import React from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "./components/header";
import Footer from "./components/footer";

const Services = () => {
  return (
    <main className="font-dm">
      <Head>
        <title>Our Services | ShagunShri Wealtha – Mutual Funds, Insurance &amp; Wealth Planning in Ujjain</title>
        <meta
          name="description"
          content="Explore ShagunShri Wealtha's financial services in Ujjain — mutual funds, portfolio management (PMS), retirement planning, life insurance, health insurance, and general insurance. Expert advisory for wealth creation and wealth protection."
        />
        <meta name="keywords" content="mutual funds Ujjain, retirement planning Ujjain, PMS, life insurance, health insurance, general insurance, wealth protection, financial services Ujjain" />
      </Head>
      <Navbar />
      <section
        className="bg-cover h-[400px] md:h-[450px] lg:h-[500px] flex items-center justify-center flex-col relative font-dm"
        style={{ backgroundImage: "url('/images/home.png')" }}
      >
        <div className="absolute inset-0 bg-gray-800/50"></div>

        <div className="lg:max-w-[1300px] mx-auto px-4 flex items-center justify-center flex-col w-full gap-3 relative z-10 text-center">
          <h1 className="font-lexend text-3xl lg:text-5xl text-left text-white font-bold">
            Our Services & Products
          </h1>

          <p className="text-white text-sm font-medium lg:text-base  max-w-xl">
            We provide trusted financial solutions including mutual fund
            investments, insurance plans, retirement planning, portfolio
            management services, and tax planning to help individuals and
            families achieve long-term financial security and growth.
          </p>

          <a
            href="/contact-us"
            className="ml-0 mt-1 rounded-full bg-white text-black font-semibold text-sm lg:text-base px-2 py-1 lg:px-3 lg:py-1.5 flex items-center transition-colors duration-200"
          >
            Contact us
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
          </a>
        </div>
      </section>
      <section className="w-full bg-[#F8F9FB] py-12 lg:py-16">
        {/* CONTAINER */}
        <div className="max-w-[1300px] mx-auto px-4 ">
          {/* ================= PRODUCTS ================= */}
          <div className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-5 items-stretch gap-4 lg:gap-2 mb-8 bg-theme2/40 rounded-2xl">
              <div className="col-span-1 lg:col-span-3 rounded-2xl lg:rounded-3xl px-4 lg:px-8 py-4 flex flex-col justify-start">
                <h3
                  id="mutual-funds"
                  className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2"
                >
                  Mutual Funds
                </h3>

                <p className="text-gray-600 mb-4 max-w-full">
                  Build long-term wealth with diversified, professionally
                  managed portfolios across equity, debt, and hybrid categories.
                  We help you select funds based on your goals, time horizon,
                  and risk profile.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      Fund selection aligned to your goals (SIP / Lump sum) and
                      time horizon
                    </p>
                  </li>

                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      Diversification across sectors and assets to manage risk
                    </p>
                  </li>

                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      Regular portfolio review and rebalancing as markets change
                    </p>
                  </li>

                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      Tax-efficient options (e.g., ELSS) based on eligibility
                    </p>
                  </li>

                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      Clear guidance on costs, risk, liquidity, and expected
                      return ranges
                    </p>
                  </li>
                </ul>
              </div>

              <div className="col-span-1 lg:col-span-2 rounded-2xl lg:rounded-r-3xl overflow-hidden h-full">
                <img
                  src="/images/services/mf.png"
                  alt="Mutual Funds investment product"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 items-stretch gap-4 lg:gap-2 mb-8 bg-theme2/40 rounded-2xl">
              <div className="col-span-1 lg:col-span-3 lg:order-2 rounded-2xl lg:rounded-3xl px-4 lg:px-8 py-4 flex flex-col justify-start">
                <h3
                  id="retirement-planning"
                  className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2"
                >
                  Retirement Planning
                </h3>

                <p className="text-gray-600 mb-4 max-w-full">
                  Plan for financial independence with a structured roadmap that
                  covers income needs, inflation, healthcare, and life
                  milestones. We align investments to your retirement timeline.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      Retirement corpus estimation with realistic assumptions
                    </p>
                  </li>

                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      Asset allocation strategy (equity / debt) by age & goals
                    </p>
                  </li>

                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      SIP planning and step-up strategy to reach targets faster
                    </p>
                  </li>

                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      Withdrawal plan guidance to create stable post-retirement
                      income
                    </p>
                  </li>

                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      Review and rebalancing as your life stage and markets
                      evolve
                    </p>
                  </li>
                </ul>
              </div>

              <div className="col-span-1 lg:col-span-2 lg:order-1 rounded-2xl lg:rounded-r-3xl overflow-hidden h-full">
                <img
                  src="/images/services/rp.png"
                  alt="Retirement planning service"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 items-stretch gap-4 lg:gap-2 mb-8 bg-theme2/40 rounded-2xl">
              <div className="col-span-1 lg:col-span-3 rounded-2xl lg:rounded-3xl px-4 lg:px-8 py-4 flex flex-col justify-start">
                <h3
                  id="portfolio-management-pms"
                  className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2"
                >
                  Portfolio Management (PMS)
                </h3>

                <p className="text-gray-600 mb-4 max-w-full">
                  For investors seeking a more customized approach, PMS offers
                  curated portfolios aligned to your objectives and risk level.
                  We help you monitor performance and maintain discipline.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      Goal-based onboarding and suitability assessment
                    </p>
                  </li>

                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      Portfolio construction with sector, style, and risk
                      controls
                    </p>
                  </li>

                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      Periodic reporting and performance tracking against
                      benchmarks
                    </p>
                  </li>

                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      Rebalancing and risk monitoring during market volatility
                    </p>
                  </li>

                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      Guidance on fees, taxation, and liquidity considerations
                    </p>
                  </li>
                </ul>
              </div>

              <div className="col-span-1 lg:col-span-2 rounded-2xl lg:rounded-r-3xl overflow-hidden h-full">
                <img
                  src="/images/services/pm.png"
                  alt="Portfolio management (PMS) service"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 items-stretch gap-4 lg:gap-2 mb-8 bg-theme2/40 rounded-2xl">
              <div className="col-span-1 lg:col-span-3 lg:order-2 rounded-2xl lg:rounded-3xl px-4 lg:px-8 py-4 flex flex-col justify-start">
                <h3
                  id="life-insurance"
                  className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2"
                >
                  Life Insurance
                </h3>

                <p className="text-gray-600 mb-4 max-w-full">
                  Protect your family’s financial future with the right cover
                  across term, savings, and goal-based plans. We help you choose
                  a plan that matches your responsibilities and budget.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      Term insurance planning for adequate protection
                    </p>
                  </li>

                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      Coverage review based on income, loans, and dependents
                    </p>
                  </li>

                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      Guidance on riders (critical illness, accidental cover)
                    </p>
                  </li>

                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      Premium vs. benefit comparison across insurers
                    </p>
                  </li>

                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      Assistance with documentation and renewal reminders
                    </p>
                  </li>
                </ul>
              </div>

              <div className="col-span-1 lg:col-span-2 lg:order-1 rounded-2xl lg:rounded-r-3xl overflow-hidden h-full">
                <img
                  src="/images/services/li.png"
                  alt="Life insurance protection plan"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 items-stretch gap-4 lg:gap-2 mb-8 bg-theme2/40 rounded-2xl">
              <div className="col-span-1 lg:col-span-3 rounded-2xl lg:rounded-3xl px-4 lg:px-8 py-4 flex flex-col justify-start">
                <h3
                  id="health-insurance"
                  className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2"
                >
                  Health Insurance
                </h3>

                <p className="text-gray-600 mb-4 max-w-full">
                  Manage medical costs with comprehensive health cover for you
                  and your family. We help you evaluate benefits, exclusions,
                  networks, and add-ons for long-term peace of mind.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      Sum insured planning based on city and family profile
                    </p>
                  </li>

                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      Comparison of room rent limits, co-pay, and waiting
                      periods
                    </p>
                  </li>

                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      Guidance on add-ons (super top-up, maternity, OPD)
                    </p>
                  </li>

                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      Support for cashless network checks and renewals
                    </p>
                  </li>

                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      Claim guidance and documentation support when needed
                    </p>
                  </li>
                </ul>
              </div>

              <div className="col-span-1 lg:col-span-2 rounded-2xl lg:rounded-r-3xl overflow-hidden h-full">
                <img
                  src="/images/services/hi.png"
                  alt="Health insurance cover for medical expenses"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 items-stretch gap-4 lg:gap-2 mb-8 bg-theme2/40 rounded-2xl">
              <div className="col-span-1 lg:col-span-3 lg:order-2 rounded-2xl lg:rounded-3xl px-4 lg:px-8 py-4 flex flex-col justify-start">
                <h3
                  id="general-insurance"
                  className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2"
                >
                  General Insurance
                </h3>

                <p className="text-gray-600 mb-4 max-w-full">
                  Safeguard your assets with coverage for vehicle, home, travel,
                  and other non-life risks. We help you compare plans and keep
                  policies updated so you’re protected when it matters.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      Motor insurance planning (comprehensive vs. third-party)
                    </p>
                  </li>

                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      Home and property cover guidance for valuables and
                      structure
                    </p>
                  </li>

                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      Travel insurance selection for domestic and international
                      trips
                    </p>
                  </li>

                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      Renewal reminders and assistance with endorsements
                    </p>
                  </li>

                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-theme1 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984a10 10 0 0 1 14.995 -8.984zm-1.293 5.953l-4 4l-2 -2a1 1 0 1 0 -1.414 1.414l2.707 2.707a1 1 0 0 0 1.414 0l4.707 -4.707a1 1 0 0 0 -1.414 -1.414z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm md:text-base">
                      Claim support and documentation guidance when required
                    </p>
                  </li>
                </ul>
              </div>

              <div className="col-span-1 lg:col-span-2 lg:order-1 rounded-2xl lg:rounded-r-3xl overflow-hidden h-full">
                <img
                  src="/images/services/gi.png"
                  alt="General insurance for assets and travel"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Services;
