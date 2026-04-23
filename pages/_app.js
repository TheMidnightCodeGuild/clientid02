import "@/styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const siteUrl = "https://www.shagunshriwealtha.com";
  const canonicalUrl = `${siteUrl}${router.asPath.split("?")[0] || "/"}`;
  const isAdminRoute = router.pathname.startsWith("/asdfghjkl");
  const isSeoBlogRoute = router.pathname.startsWith("/seoBlogs/");

  const seoBlogMeta = {
    BestMutualFundsConsultant: {
      title: "Best Mutual Fund Consultant | Shagunshri Wealtha",
      description:
        "Looking for the best mutual fund consultant? Get expert SIP, STP, SWP & tax saving advice with Shagunshri Wealtha.",
    },
    MutualFunds: {
      title: "Mutual Funds Guide for Professionals | Shagunshri Wealtha",
      description:
        "Learn mutual funds, SIP, STP & SWP strategies. Expert investment & tax saving tips by Shagunshri Wealtha.",
    },
    RetirementPlanning: {
      title: "Retirement Planning Guide | Shagunshri Wealtha",
      description:
        "Plan retirement with SIP, mutual funds & insurance. Expert wealth management by Shagunshri Wealtha in Ujjain, Indore & Dewas.",
    },
    PortfolioManagement: {
      title: "Portfolio Management Guide | Shagunshri Wealtha",
      description:
        "Master portfolio management with SIP, STP, SWP & mutual funds. Expert wealth management by Shagunshri Wealtha.",
    },
    LifeInsurance: {
      title: "Life Insurance Guide | Shagunshri Wealtha",
      description:
        "Secure your future with life insurance, SIP & mutual funds. Expert wealth management by Shagunshri Wealtha.",
    },
    HealthInsurance: {
      title: "Health Insurance Guide | Shagunshri Wealtha",
      description:
        "Protect your finances with health insurance. Learn tax saving, SIP & wealth management tips with Shagunshri Wealtha.",
    },
    GeneralInsurance: {
      title: "General Insurance Guide | Shagunshri Wealtha",
      description:
        "Protect assets with general insurance. Learn investment, SIP & wealth management tips by Shagunshri Wealtha.",
    },
    ShagunShriWealtha: {
      title: "Shagunshri Wealtha | Investment & Wealth Management",
      description:
        "Shagunshri Wealtha offers expert SIP, mutual funds, insurance & tax saving solutions in Ujjain, Indore & Dewas.",
    },
    BestInvestmentConsultant: {
      title: "Best Investment Consultant | Shagunshri Wealtha",
      description:
        "Find the best investment consultant for SIP, mutual funds & insurance. Expert wealth management by Shagunshri Wealtha.",
    },
    SmartInvestment: {
      title: "Smart Investment Guide | Shagunshri Wealtha",
      description:
        "Learn smart investment with SIP, mutual funds & insurance. Expert wealth management by Shagunshri Wealtha.",
    },
  };
  const blogSlug = router.pathname.split("/").pop();
  const blogMeta = seoBlogMeta[blogSlug];

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
        {isSeoBlogRoute && blogMeta ? (
          <>
            <meta name="twitter:title" content={blogMeta.title} />
            <meta name="twitter:description" content={blogMeta.description} />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Article",
                  headline: blogMeta.title,
                  description: blogMeta.description,
                  mainEntityOfPage: canonicalUrl,
                  author: {
                    "@type": "Organization",
                    name: "Shagunshri Wealtha",
                  },
                  publisher: {
                    "@type": "Organization",
                    name: "Shagunshri Wealtha",
                    logo: {
                      "@type": "ImageObject",
                      url: `${siteUrl}/images/logo.png`,
                    },
                  },
                  image: `${siteUrl}/images/logo.png`,
                }),
              }}
            />
          </>
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
