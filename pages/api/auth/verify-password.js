import crypto from "crypto";

// ─────────────────────────────────────────────────────────────────────────────
// CHANGE THIS HASH to match your desired password.
// To regenerate run in terminal:
//   node -e "const c=require('crypto');console.log(c.createHash('sha256').update('YOUR_NEW_PASSWORD').digest('hex'))"
// Current password: Shagunshri@2024
// ─────────────────────────────────────────────────────────────────────────────
const PASSWORD_HASH =
  "83bea6fdab66fa60dc91ea3859b06c5467847560af92cbc75af71aba9c2633d1";

// In-memory rate-limit store (resets on server restart).
// For production, swap with Redis or a database.
const attempts = {};
const MAX_ATTEMPTS = 5;
const LOCKOUT_MS = 15 * 60 * 1000; // 15 minutes

function getClientIp(req) {
  return (
    req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
    req.socket?.remoteAddress ||
    "unknown"
  );
}

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const ip = getClientIp(req);
  const now = Date.now();

  // Clear expired lockout window
  if (attempts[ip] && now - attempts[ip].firstAttempt > LOCKOUT_MS) {
    delete attempts[ip];
  }

  // Reject if currently locked out
  if (attempts[ip] && attempts[ip].count >= MAX_ATTEMPTS) {
    const remaining = Math.ceil(
      (LOCKOUT_MS - (now - attempts[ip].firstAttempt)) / 1000 / 60
    );
    return res.status(429).json({
      error: `Too many failed attempts. Try again in ${remaining} minute(s).`,
      locked: true,
    });
  }

  const { password } = req.body;
  if (!password || typeof password !== "string") {
    return res.status(400).json({ error: "Password is required." });
  }

  // Hash the incoming password for comparison
  const inputHash = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");

  // Constant-time comparison to prevent timing attacks
  let isMatch = false;
  try {
    isMatch =
      inputHash.length === PASSWORD_HASH.length &&
      crypto.timingSafeEqual(
        Buffer.from(inputHash, "hex"),
        Buffer.from(PASSWORD_HASH, "hex")
      );
  } catch {
    isMatch = false;
  }

  if (!isMatch) {
    if (!attempts[ip]) {
      attempts[ip] = { count: 1, firstAttempt: now };
    } else {
      attempts[ip].count += 1;
    }
    const remaining = MAX_ATTEMPTS - attempts[ip].count;
    return res.status(401).json({
      error:
        remaining > 0
          ? `Incorrect password. ${remaining} attempt(s) remaining.`
          : "Too many failed attempts. Please wait 15 minutes.",
      locked: remaining <= 0,
    });
  }

  // Success — clear attempt record
  delete attempts[ip];
  return res.status(200).json({ success: true });
}
