import Head from "next/head";
import Link from "next/link";
import Navbar from "./components/header";
import Footer from "./components/footer";

const BLOG_CARDS = [
  {
    title: "Best Mutual Fund Consultant",
    description:
      "How job professionals can build wealth smartly with expert consultant guidance.",
    href: "/seoBlogs/BestMutualFundsConsultant",
  },
  {
    title: "Mutual Funds Explained",
    description:
      "Smart investment strategies for professionals using mutual funds, SIP, STP, and SWP.",
    href: "/seoBlogs/MutualFunds",
  },
  {
    title: "Retirement Planning",
    description:
      "Build long-term financial independence with practical retirement planning strategies.",
    href: "/seoBlogs/RetirementPlanning",
  },
  {
    title: "Portfolio Management",
    description:
      "Learn how to structure, optimize, and rebalance your portfolio for long-term growth.",
    href: "/seoBlogs/PortfolioManagement",
  },
  {
    title: "Life Insurance Guide",
    description:
      "Protect your family and integrate life insurance into your investment strategy.",
    href: "/seoBlogs/LifeInsurance",
  },
  {
    title: "Health Insurance Guide",
    description:
      "Safeguard your wealth against medical emergencies with smart health coverage.",
    href: "/seoBlogs/HealthInsurance",
  },
  {
    title: "General Insurance Guide",
    description:
      "Protect your assets and financial goals with the right general insurance mix.",
    href: "/seoBlogs/GeneralInsurance",
  },
  {
    title: "Shagunshri Wealtha",
    description:
      "Discover complete wealth management services for professionals in your city.",
    href: "/seoBlogs/ShagunShriWealtha",
  },
  {
    title: "Best Investment Consultant",
    description:
      "A practical guide to choosing the right consultant for your financial future.",
    href: "/seoBlogs/BestInvestmentConsultant",
  },
  {
    title: "Smart Investment Strategies",
    description:
      "Build wealth the right way with disciplined, goal-based investment planning.",
    href: "/seoBlogs/SmartInvestment",
  },
];

export default function Insights() {
  return (
    <div>
      <Head>
        <title>Insights | Shagunshri Wealtha</title>
        <meta
          name="description"
          content="Explore smart investment and insurance insights from Shagunshri Wealtha."
        />
      </Head>

      <Navbar />

      <section
        className="bg-cover h-[400px] md:h-[450px] lg:h-[500px] flex items-start justify-center flex-col relative font-dm"
        style={{ backgroundImage: "url('/images/home.png')" }}
      >
        <div className="absolute inset-0 bg-gray-800/50" />
        <div className="lg:max-w-[1300px] mx-auto px-4 flex items-start justify-start flex-col w-full gap-3 relative z-10 text-center">
          <h1 className="font-lexend text-3xl lg:text-5xl text-left text-white font-bold">
            Insights & SEO Blogs
          </h1>
          <p className="text-white text-sm font-medium lg:text-base max-w-2xl text-left">
            Explore expert articles on mutual funds, SIP, insurance, retirement
            planning, and wealth management strategies for job professionals.
          </p>
          <Link
            href="/contact-us"
            className="ml-0 mt-1 rounded-full bg-white text-black font-semibold text-sm lg:text-base px-2 py-1 lg:px-3 lg:py-1.5 flex items-center transition-colors duration-200"
          >
            Speak With an Advisor
            <span className="ml-2 w-8 h-8 rounded-full bg-theme1 flex items-center justify-center">
              <svg
                className="lg:w-5 lg:h-5 w-4 h-4 text-white"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 18L18 6M18 6H10M18 6V14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        </div>
      </section>

      <section className="w-full bg-[#F8F9FB] py-12 lg:py-16">
        <div className="max-w-[1300px] mx-auto px-4 lg:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {BLOG_CARDS.map((blog) => (
              <article
                key={blog.href}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
              >
                <div className="p-5 flex flex-col flex-1">
                  <h2 className="font-manrope font-semibold text-lg text-gray-900">
                    {blog.title}
                  </h2>
                  <p className="text-sm text-gray-600 mt-2 flex-1">
                    {blog.description}
                  </p>
                  <Link
                    href={blog.href}
                    className="mt-4 inline-flex items-center justify-center rounded-full bg-indigo-600 text-white text-sm font-semibold px-4 py-2 hover:bg-indigo-700 transition-colors"
                  >
                    Read Blog
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
