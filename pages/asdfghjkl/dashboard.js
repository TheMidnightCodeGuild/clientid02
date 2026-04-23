import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";

// ─── Dashboard sub-pages ───────────────────────────────────────────────────
import UploadBlogs from "./uploadBlogs";
import ViewAllBlogs from "./viewAllBlogs";

let UploadImages = null;
try { UploadImages = require("./uploadImages").default; } catch {}

let ViewAllImages = null;
try { ViewAllImages = require("./viewAllImages").default; } catch {}

let ViewAllEntries = null;
try { ViewAllEntries = require("./viewAllEntries.jsx").default; } catch {}

// ─── Tab definitions ────────────────────────────────────────────────────────
const TABS = [
  { key: "uploadBlogs",   label: "Upload Blog",     icon: "✍️",  component: <UploadBlogs /> },
  { key: "uploadImages",  label: "Upload Images",   icon: "🖼️",  component: UploadImages  ? <UploadImages />  : <FallbackMsg name="UploadImages" /> },
  { key: "viewAllBlogs",  label: "View Blogs",      icon: "📖",  component: <ViewAllBlogs /> },
  { key: "viewAllImages", label: "View Images",     icon: "🗃️",  component: ViewAllImages ? <ViewAllImages /> : <FallbackMsg name="ViewAllImages" /> },
  { key: "viewAllEntries",label: "View Entries",    icon: "📋",  component: ViewAllEntries? <ViewAllEntries /> : <FallbackMsg name="ViewAllEntries" /> },
];

function FallbackMsg({ name }) {
  return <div style={{ color: "#94a3b8", textAlign: "center", padding: "2rem" }}>{name}.jsx not found.</div>;
}

const SESSION_KEY = "sw_dash_auth";

// ─── Main component ──────────────────────────────────────────────────────────
export default function Dashboard() {
  const [authenticated, setAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true); // hydration guard
  const [activeTab, setActiveTab] = useState(TABS[0].key);

  // Restore session on mount (client-only)
  useEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_KEY) === "1") {
        setAuthenticated(true);
      }
    } catch {}
    setChecking(false);
  }, []);

  const handleSuccess = () => {
    try { sessionStorage.setItem(SESSION_KEY, "1"); } catch {}
    setAuthenticated(true);
  };

  const handleLogout = () => {
    try { sessionStorage.removeItem(SESSION_KEY); } catch {}
    setAuthenticated(false);
  };

  if (checking) return null; // avoid SSR/hydration flash

  if (!authenticated) {
    return <LoginGate onSuccess={handleSuccess} />;
  }

  const activeComponent = TABS.find((t) => t.key === activeTab)?.component ?? null;

  return (
    <>
      <Head>
        <title>Dashboard — Shagunshri Wealtha</title>
        <meta name="robots" content="noindex,nofollow,noarchive" />
      </Head>

      <style>{dashboardStyles}</style>

      <div className="db-root">
        {/* Sidebar */}
        <aside className="db-sidebar">
          <div className="db-brand">
            <span className="db-brand-icon">✦</span>
            <span className="db-brand-name">Shagunshri</span>
          </div>
          <nav className="db-nav">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`db-nav-item${activeTab === tab.key ? " active" : ""}`}
              >
                <span className="db-nav-icon">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
          <button className="db-logout-btn" onClick={handleLogout}>
            <span>⎋</span> Logout
          </button>
        </aside>

        {/* Main content */}
        <main className="db-main">
          <header className="db-topbar">
            <h1 className="db-page-title">
              {TABS.find((t) => t.key === activeTab)?.icon}{" "}
              {TABS.find((t) => t.key === activeTab)?.label}
            </h1>
            <span className="db-session-badge">🔒 Secure Session</span>
          </header>
          <div className="db-content">{activeComponent}</div>
        </main>
      </div>
    </>
  );
}

// ─── Login Gate ──────────────────────────────────────────────────────────────
function LoginGate({ onSuccess }) {
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");
  const [locked, setLocked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [shake, setShake] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => { inputRef.current?.focus(); }, []);

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 600);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (locked || loading) return;
    if (!password.trim()) {
      setError("Please enter the password.");
      triggerShake();
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/verify-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        onSuccess();
      } else {
        setError(data.error || "Incorrect password.");
        if (data.locked) setLocked(true);
        triggerShake();
        setPassword("");
      }
    } catch {
      setError("Network error. Please try again.");
      triggerShake();
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Login — Shagunshri Wealtha Dashboard</title>
        <meta name="robots" content="noindex,nofollow,noarchive" />
      </Head>
      <style>{loginStyles}</style>

      {/* Animated background blobs */}
      <div className="lg-root">
        <div className="lg-blob lg-blob-1" />
        <div className="lg-blob lg-blob-2" />
        <div className="lg-blob lg-blob-3" />

        <div className={`lg-card${shake ? " shake" : ""}`}>
          {/* Lock icon */}
          <div className="lg-lock">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>

          <h1 className="lg-title">Admin Dashboard</h1>
          <p className="lg-subtitle">Enter your password to access the dashboard</p>

          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="lg-field">
              <label className="lg-label" htmlFor="dash-password">Password</label>
              <div className="lg-input-wrap">
                <input
                  ref={inputRef}
                  id="dash-password"
                  name="dash-password"
                  type={showPw ? "text" : "password"}
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(""); }}
                  className="lg-input"
                  placeholder="Enter dashboard password"
                  disabled={locked || loading}
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  className="lg-eye-btn"
                  onClick={() => setShowPw((v) => !v)}
                  tabIndex={-1}
                  aria-label="Toggle password visibility"
                >
                  {showPw ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            {error && (
              <div className="lg-error" role="alert">
                <span>⚠️</span> {error}
              </div>
            )}

            <button
              type="submit"
              className="lg-submit"
              disabled={locked || loading}
            >
              {loading ? (
                <span className="lg-spinner" />
              ) : locked ? (
                "🔒 Locked"
              ) : (
                "Unlock Dashboard"
              )}
            </button>
          </form>

          <p className="lg-footer-note">
            🛡️ Protected with rate-limiting · Session expires on tab close
          </p>
        </div>
      </div>
    </>
  );
}

// ─── CSS ─────────────────────────────────────────────────────────────────────
const loginStyles = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .lg-root {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #0a0a14;
    overflow: hidden;
    position: relative;
    font-family: 'Inter', 'Segoe UI', sans-serif;
  }

  /* Animated gradient blobs */
  .lg-blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.25;
    animation: floatBlob 10s ease-in-out infinite alternate;
  }
  .lg-blob-1 { width: 480px; height: 480px; background: #6c47ff; top: -150px; left: -180px; animation-delay: 0s; }
  .lg-blob-2 { width: 380px; height: 380px; background: #ff6c6c; bottom: -120px; right: -140px; animation-delay: 3s; }
  .lg-blob-3 { width: 300px; height: 300px; background: #47c5ff; top: 40%; left: 55%; animation-delay: 6s; }

  @keyframes floatBlob {
    0%   { transform: translate(0, 0) scale(1); }
    100% { transform: translate(30px, 30px) scale(1.08); }
  }

  /* Card */
  .lg-card {
    position: relative;
    z-index: 10;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.12);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border-radius: 24px;
    padding: 48px 40px 36px;
    width: 100%;
    max-width: 420px;
    box-shadow: 0 32px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(108,71,255,0.2);
    transition: transform 0.2s;
  }

  @keyframes shakeAnim {
    0%, 100% { transform: translateX(0); }
    15%       { transform: translateX(-10px); }
    30%       { transform: translateX(10px); }
    45%       { transform: translateX(-8px); }
    60%       { transform: translateX(8px); }
    75%       { transform: translateX(-4px); }
    90%       { transform: translateX(4px); }
  }
  .lg-card.shake { animation: shakeAnim 0.55s ease; }

  /* Lock icon */
  .lg-lock {
    width: 64px;
    height: 64px;
    margin: 0 auto 24px;
    background: linear-gradient(135deg, #6c47ff 0%, #a855f7 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    box-shadow: 0 0 40px rgba(108,71,255,0.5);
  }
  .lg-lock svg { color: #fff; width: 100%; height: 100%; }

  .lg-title {
    color: #fff;
    font-size: 1.6rem;
    font-weight: 700;
    text-align: center;
    letter-spacing: -0.02em;
  }
  .lg-subtitle {
    color: #94a3b8;
    font-size: 0.875rem;
    text-align: center;
    margin-top: 8px;
    margin-bottom: 32px;
  }

  /* Field */
  .lg-field { margin-bottom: 16px; }
  .lg-label { display: block; color: #cbd5e1; font-size: 0.8rem; font-weight: 600; letter-spacing: .06em; text-transform: uppercase; margin-bottom: 8px; }
  .lg-input-wrap { position: relative; }
  .lg-input {
    width: 100%;
    padding: 14px 48px 14px 16px;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 12px;
    color: #fff;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  .lg-input::placeholder { color: #475569; }
  .lg-input:focus { border-color: #6c47ff; box-shadow: 0 0 0 3px rgba(108,71,255,0.25); }
  .lg-input:disabled { opacity: 0.5; cursor: not-allowed; }

  .lg-eye-btn {
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.1rem;
    line-height: 1;
    padding: 2px;
  }

  /* Error */
  .lg-error {
    background: rgba(239,68,68,0.12);
    border: 1px solid rgba(239,68,68,0.3);
    color: #fca5a5;
    font-size: 0.85rem;
    padding: 10px 14px;
    border-radius: 10px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  /* Submit */
  .lg-submit {
    width: 100%;
    padding: 15px;
    background: linear-gradient(135deg, #6c47ff 0%, #a855f7 100%);
    color: #fff;
    font-size: 1rem;
    font-weight: 700;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    transition: opacity 0.2s, transform 0.15s, box-shadow 0.2s;
    box-shadow: 0 4px 20px rgba(108,71,255,0.45);
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 52px;
    letter-spacing: 0.02em;
  }
  .lg-submit:hover:not(:disabled) { opacity: 0.9; transform: translateY(-1px); box-shadow: 0 8px 28px rgba(108,71,255,0.55); }
  .lg-submit:active:not(:disabled) { transform: translateY(0); }
  .lg-submit:disabled { opacity: 0.5; cursor: not-allowed; }

  /* Spinner */
  .lg-spinner {
    width: 20px; height: 20px;
    border: 2px solid rgba(255,255,255,0.3);
    border-top-color: #fff;
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
    display: inline-block;
  }
  @keyframes spin { to { transform: rotate(360deg); } }

  .lg-footer-note {
    color: #475569;
    font-size: 0.75rem;
    text-align: center;
    margin-top: 24px;
    line-height: 1.5;
  }
`;

const dashboardStyles = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .db-root {
    display: flex;
    min-height: 100vh;
    background: #0d0d1a;
    font-family: 'Inter', 'Segoe UI', sans-serif;
    color: #e2e8f0;
  }

  /* Sidebar */
  .db-sidebar {
    width: 240px;
    flex-shrink: 0;
    background: rgba(255,255,255,0.03);
    border-right: 1px solid rgba(255,255,255,0.08);
    display: flex;
    flex-direction: column;
    padding: 28px 16px 24px;
    backdrop-filter: blur(12px);
  }

  .db-brand {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 8px 28px;
    border-bottom: 1px solid rgba(255,255,255,0.07);
    margin-bottom: 24px;
  }
  .db-brand-icon { font-size: 1.4rem; color: #a855f7; }
  .db-brand-name { font-size: 1rem; font-weight: 700; color: #e2e8f0; letter-spacing: -0.01em; }

  .db-nav { flex: 1; display: flex; flex-direction: column; gap: 4px; }
  .db-nav-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 11px 14px;
    border-radius: 10px;
    background: none;
    border: none;
    color: #94a3b8;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.18s, color 0.18s;
    text-align: left;
    width: 100%;
  }
  .db-nav-item:hover { background: rgba(255,255,255,0.06); color: #e2e8f0; }
  .db-nav-item.active { background: linear-gradient(135deg, rgba(108,71,255,0.35), rgba(168,85,247,0.25)); color: #c4b5fd; font-weight: 600; }
  .db-nav-icon { font-size: 1.1rem; width: 20px; text-align: center; }

  .db-logout-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 11px 14px;
    margin-top: 16px;
    border-radius: 10px;
    background: rgba(239,68,68,0.1);
    border: 1px solid rgba(239,68,68,0.2);
    color: #f87171;
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.18s, color 0.18s;
    width: 100%;
  }
  .db-logout-btn:hover { background: rgba(239,68,68,0.2); color: #fca5a5; }

  /* Main area */
  .db-main { flex: 1; display: flex; flex-direction: column; overflow: hidden; }

  .db-topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 32px;
    border-bottom: 1px solid rgba(255,255,255,0.07);
    background: rgba(255,255,255,0.02);
  }
  .db-page-title { font-size: 1.3rem; font-weight: 700; color: #e2e8f0; display: flex; align-items: center; gap: 10px; }
  .db-session-badge {
    font-size: 0.75rem;
    color: #4ade80;
    background: rgba(74,222,128,0.1);
    border: 1px solid rgba(74,222,128,0.2);
    padding: 5px 12px;
    border-radius: 99px;
    font-weight: 600;
  }

  .db-content { flex: 1; padding: 32px; overflow-y: auto; }

  @media (max-width: 640px) {
    .db-root { flex-direction: column; }
    .db-sidebar { width: 100%; flex-direction: row; flex-wrap: wrap; padding: 16px; gap: 8px; }
    .db-brand { border-bottom: none; padding-bottom: 0; margin-bottom: 0; }
    .db-nav { flex-direction: row; flex-wrap: wrap; }
    .db-nav-item { width: auto; padding: 8px 12px; }
    .db-logout-btn { width: auto; margin-top: 0; }
    .db-topbar { padding: 16px; flex-direction: column; align-items: flex-start; gap: 8px; }
    .db-content { padding: 16px; }
  }
`;
