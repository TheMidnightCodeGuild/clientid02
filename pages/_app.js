import "@/styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const siteUrl = "https://www.shagunshriwealtha.com";
  const canonicalUrl = `${siteUrl}${router.asPath.split("?")[0] || "/"}`;
  const isAdminRoute = router.pathname.startsWith("/asdfghjkl");

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "Shagunshri Wealtha",
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
    image: `${siteUrl}/images/logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "203/1, C Block, Dindayal Upadhyay Complex, Indore Road",
      addressLocality: "Ujjain",
      postalCode: "456010",
      addressCountry: "IN",
    },
    telephone: "+91-9425904786",
  };

  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Shagunshri Wealtha" />
        <meta property="og:image" content={`${siteUrl}/images/logo.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${siteUrl}/images/logo.png`} />
        {isAdminRoute ? (
          <meta name="robots" content="noindex,nofollow,noarchive" />
        ) : null}
        {!isAdminRoute ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(organizationSchema),
            }}
          />
        ) : null}
      </Head>
      <Component {...pageProps} />
    </>
  );
}
