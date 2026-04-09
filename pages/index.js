import React, { useRef } from "react";
import Head from "next/head";
import Navbar from "./components/header";
import Image from "next/image";
import Footer from "./components/footer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const index = () => {
  const servicePrevRef = useRef(null);
  const serviceNextRef = useRef(null);
  const servicePaginationRef = useRef(null);

  const services = [
    {
      title: "Mutual Funds",
      description:
        "We provide expert guidance in selecting and managing mutual fund investments tailored to your financial goals, risk profile, and long-term wealth creation strategy.",
      icon: "/images/services/mf.png",
    },
    {
      title: "Portfolio Management Service (PMS)",
      description:
        "Our Portfolio Management Services offer professionally managed investment portfolios designed to deliver optimized returns through strategic asset allocation and active management.",
      icon: "/images/services/pm.png",
    },
    {
      title: "Retirement Planning",
      description:
        "Our retirement planning strategies focus on building a stable and sufficient corpus to maintain your desired lifestyle after retirement.",
      icon: "/images/services/rp.png",
    },
    {
      title: "Life Insurance",
      description:
        "We help you secure your family’s financial future with reliable life insurance solutions that provide protection, savings, and long-term financial stability.",
      icon: "/images/services/li.png",
    },
    {
      title: "Mediclaim (Health Insurance)",
      description:
        "Our health insurance solutions ensure financial protection against medical emergencies, offering comprehensive coverage and peace of mind for you and your family.",
      icon: "/images/services/hi.png",
    },
    {
      title: "General Insurance",
      description:
        "We offer comprehensive general insurance solutions to protect your assets, property, and business against unforeseen risks and damages.",
      icon: "/images/services/gi.png",
    },
  ];
  return (
    <>
      <Head>
        <title>ShagunShri Wealtha | Best Financial Advisory in Ujjain – Wealth Creation &amp; Protection</title>
        <meta
          name="description"
          content="At ShagunShri Wealtha, we provide advisory services in wealth creation and wealth protection through financial planning. Trusted as the best financial consultant in Ujjain — offering mutual funds, insurance, retirement planning, and portfolio management."
        />
        <meta name="keywords" content="financial advisor Ujjain, wealth creation Ujjain, wealth protection, mutual funds Ujjain, retirement planning, insurance advisor, portfolio management, ShagunShri Wealtha, best financial planning Ujjain" />
      </Head>
      <Navbar />

      <section className="relative h-screen overflow-hidden">
        {/* Mirrored Background */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-x-[-1]"
          style={{ backgroundImage: "url('/images/home.png')" }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="lg:max-w-[1300px] mx-auto w-full px-4">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-5 py-20 lg:py-0">
              <p className="inline-block text-[10px] sm:text-xs uppercase tracking-[0.4em] py-1.5 px-4 rounded-full text-white bg-white/30 backdrop-blur-md border border-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
                Since 2013
              </p>

              <h1 className="text-3xl lg:text-6xl lg:leading-[60px] font-normal text-white font-lexend">
                Integrity Driven Financial <br className="hidden sm:block" />
                <span className="text-blue-600 font-bold">
                  Planning Excellence
                </span>
              </h1>

              <div className="max-w-3xl">
                <p className="text-sm sm:text-base text-white italic leading-relaxed font-dm">
                  Providing expert mutual fund advisory, insurance solutions,
                  portfolio management, and tax planning services with
                  integrity, experience, and personalized guidance, helping
                  individuals and families build secure wealth and achieve
                  long-term financial goals.
                </p>

                <a
                  href="/contact-us"
                  className="mt-4 inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm text-white font-medium text-base px-4 py-2 transition-colors duration-200 border border-gray-50"
                >
                  Contact Now
                  <span className="ml-2 w-8 h-8 rounded-full bg-theme1 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
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
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#fffff0] py-16">
        <div className="lg:max-w-[1300px] px-4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Left */}
          <div>
            <div className="flex items-center gap-2 pb-2">
              <div className="w-3 h-3 bg-theme1 rounded-sm"></div>
              <span className="text-theme1 tracking-wider font-medium uppercase text-sm">
                About ShagunShri-Wealtha
              </span>
            </div>

            <h2 className="text-3xl font-lexend lg:text-4xl lg:leading-[44px] font-bold text-gray-900 mb-4">
              Smart Investment &amp; Insurance Solutions for Your Financial
              Security
            </h2>

            <p className="text-gray-600 text-sm lg:text-base mb-6 leading-relaxed">
              ShagunShri-Wealtha, led by financial consultant Dev Bajpai,
              provides trusted financial guidance to help individuals and
              families build long-term financial stability. Our focus is on
              simplifying financial planning through reliable investment
              strategies, insurance protection, and tax-saving opportunities
              tailored to each client's needs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-8">
              {[
                "Mutual Fund Investment Planning",
                "Life & Health Insurance",
                "Retirement Planning",
                "Portfolio Management",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0B2C4D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 12l5 5l10 -10" />
                    <path d="M2 12l5 5m5 -5l5 -5" />
                  </svg>
                  <span className="text-gray-700 font-semibold text-sm">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="/about-us"
              className="inline-flex items-center justify-center rounded-full bg-theme1 px-8 py-3 text-white font-semibold hover:opacity-90 transition"
            >
              Know More About Us
            </a>
          </div>

          {/* Founder Image - Right */}
          <div className="relative w-full">
            <div className="relative rounded-2xl overflow-hidden w-full h-[420px] lg:h-[520px] shadow-xl">
              <Image
                src="/images/founder.png"
                alt="Mr. Dev Bajpai – Founder, ShagunShri-Wealtha"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 left-4 right-4 lg:left-6 lg:right-auto lg:w-[320px] bg-theme1 px-5 py-4 shadow-lg rounded-xl">
              <p className="text-base font-lexend font-semibold text-white leading-snug">
                Mr. Dev M. Bajpai
              </p>
              <p className="text-sm text-white/80 mt-1">
                Founder &amp; Financial Consultant, Since 2013
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-10 lg:py-32">
        <div className="lg:max-w-[1300px] px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="lg:w-3/4">
              <h1 className="text-2xl text-black italic font-bold mb-2">
                Why choose us?
              </h1>

              <h2 className="text-3xl text-black font-extrabold lg:text-4xl">
                Trusted Guidance for{" "}
                <span className="text-theme1 underline">
                  Smart Financial Decisions
                </span>
              </h2>

              <p className="mt-3 text-gray-700">
                At ShagunShri-Wealtha, we help individuals and families plan
                their financial future with confidence. Our approach focuses on
                transparent advice, personalized investment strategies, and
                reliable insurance solutions designed to protect and grow your
                wealth.
              </p>
            </div>

            <div className="space-y-6 lg:space-y-10">
              {/* Block 1 */}
              <div className="flex">
                <span className="flex-shrink-0 inline-flex justify-center items-center shadow-md size-[55px] rounded-full border border-gray-200 bg-theme1/10 text-theme1">
                  ✓
                </span>
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                    Expert Investment Guidance
                  </h3>
                  <p className="mt-1 text-gray-600">
                    Get professional support for mutual fund investments,
                    portfolio planning, and long-term wealth creation strategies
                    tailored to your financial goals.
                  </p>
                </div>
              </div>

              {/* Block 2 */}
              <div className="flex">
                <span className="flex-shrink-0 inline-flex justify-center items-center shadow-md size-[55px] rounded-full border border-gray-200 bg-theme1/10 text-theme1">
                  ✓
                </span>
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                    Complete Insurance Solutions
                  </h3>
                  <p className="mt-1 text-gray-600">
                    We help you secure your future with life, health, and motor
                    insurance plans that provide financial protection and peace
                    of mind for you and your family.
                  </p>
                </div>
              </div>

              {/* Block 3 */}
              <div className="flex">
                <span className="flex-shrink-0 inline-flex justify-center items-center shadow-md size-[55px] rounded-full border border-gray-200 bg-theme1/10 text-theme1">
                  ✓
                </span>
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                    Personalized Financial Planning
                  </h3>
                  <p className="mt-1 text-gray-600">
                    From retirement planning to tax-saving investments, we
                    design financial strategies that match your life goals and
                    risk profile.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-theme2">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 justify-items-center text-center px-4 py-12 lg:max-w-[1300px] mx-auto">
          <div className="flex flex-col gap-2 items-center">
            <p className="text-3xl lg:text-4xl font-bold text-white counter-value">
              13+
            </p>
            <p className="text-sm lg:text-base text-white/80">
              Years of Financial Consulting
            </p>
          </div>

          <div className="flex flex-col gap-2 items-center">
            <p className="text-3xl lg:text-4xl font-bold text-white counter-value">
              800+
            </p>
            <p className="text-sm lg:text-base text-white/80">
              Happy Clients Served
            </p>
          </div>

          <div className="flex flex-col gap-2 items-center">
            <p className="text-3xl lg:text-4xl font-bold text-white counter-value">
              10+
            </p>
            <p className="text-sm lg:text-base text-white/80">
              Financial Services Offered
            </p>
          </div>

          <div className="flex flex-col gap-2 items-center">
            <p className="text-3xl lg:text-4xl font-bold text-white counter-value">
              1000+
            </p>
            <p className="text-sm lg:text-base text-white/80">
              Investment & Insurance Plans Guided
            </p>
          </div>

          <div className="flex flex-col gap-2 items-center">
            <p className="text-3xl lg:text-4xl font-bold text-white counter-value">
              100%
            </p>
            <p className="text-sm lg:text-base text-white/80">
              Commitment to Client Satisfaction
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 lg:py-12">
        <div className="mx-auto lg:max-w-[1300px] px-4">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 bg-theme1 rounded-sm"></div>
              <span className="text-theme1 tracking-wider font-medium">
                Our Services
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-10 items-start sm:items-center">
              <h2 className="text-3xl lg:text-4xl font-semibold text-black">
                Professional{" "}
                <span className="text-theme2">Services We Offer</span>
              </h2>
              <p className="text-gray-600 max-w-md sm:ml-auto leading-relaxed text-left">
                Tailored investment and insurance solutions designed to protect
                and grow your wealth at every stage of life
              </p>
            </div>
          </div>

          <div className="relative">
            <Swiper
              className="serviceSwiper pb-12"
              modules={[Navigation, Pagination]}
              spaceBetween={24}
              slidesPerView={1}
              pagination={{
                el: servicePaginationRef.current,
                clickable: true,
              }}
              navigation={{
                prevEl: servicePrevRef.current,
                nextEl: serviceNextRef.current,
              }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = servicePrevRef.current;
                swiper.params.navigation.nextEl = serviceNextRef.current;
                swiper.params.pagination.el = servicePaginationRef.current;
              }}
              onInit={(swiper) => {
                swiper.navigation.init();
                swiper.navigation.update();
                swiper.pagination.init();
                swiper.pagination.render();
                swiper.pagination.update();
              }}
              aria-label="Service highlights slider"
            >
              {services.map((service, index) => (
                <SwiperSlide key={index} className="h-auto">
                  <article className="flex h-full flex-col rounded-3xl border border-gray-200 bg-gradient-to-br from-white via-white to-blue-100/60 p-4 shadow-lg shadow-blue-100/50">
                    <div className="relative mb-5 overflow-hidden rounded-2xl h-48 w-full">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70"></div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm text-gray-600 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-yellow-700">
                      Explore service
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-theme1 text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"
                        >
                          <path d="M7 7h10v10" />
                          <path d="M7 17 17 7" />
                        </svg>
                      </span>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-theme1">
              <div
                ref={servicePaginationRef}
                className="serviceSwiper-pagination !relative !w-auto"
              ></div>
              <div className="flex gap-3">
                <button
                  ref={servicePrevRef}
                  className="serviceSwiper-button-prev inline-flex h-11 w-11 items-center justify-center rounded-full border border-theme1 bg-white text-xl font-bold shadow-sm transition hover:bg-theme1 hover:text-white"
                  aria-label="Previous service"
                  type="button"
                >
                  ←
                </button>
                <button
                  ref={serviceNextRef}
                  className="serviceSwiper-button-next inline-flex h-11 w-11 items-center justify-center rounded-full border border-theme1 bg-white text-xl font-bold shadow-sm transition hover:bg-theme1 hover:text-white"
                  aria-label="Next service"
                  type="button"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonials" className="py-12 bg-gray-50">
        <div className="lg:max-w-[1300px] mx-auto px-4">
          <div className="mb-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-theme1 rounded-sm"></div>
              <span className="text-theme1 tracking-wider font-medium">
                Testimonials
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start sm:items-center">
              <h2 className="text-3xl lg:text-4xl font-semibold text-black">
                Hear It From <span className="text-theme2">Our Clients</span>
              </h2>
              <p className="text-gray-800 max-w-md sm:ml-auto leading-relaxed">
                Real stories from clients who trusted us with their financial
                goals and achieved lasting peace of mind.
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="relative bg-white p-6 rounded-3xl flex h-full flex-col justify-between border border-gray-800 overflow-hidden">
              <div className="absolute right-4 bottom-4 opacity-10 text-theme1 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 379.51"
                  className="w-14 h-14"
                  fill="currentColor"
                >
                  <path d="M299.73 345.54c81.25-22.55 134.13-69.68 147.28-151.7 3.58-22.31-1.42-5.46-16.55 5.86-49.4 36.97-146.53 23.88-160.01-60.55C243.33-10.34 430.24-36.22 485.56 46.34c12.87 19.19 21.39 41.59 24.46 66.19 13.33 106.99-41.5 202.28-137.82 247.04-17.82 8.28-36.6 14.76-56.81 19.52-10.12 2.04-17.47-3.46-20.86-12.78-2.87-7.95-3.85-16.72 5.2-20.77zm-267.78 0c81.25-22.55 134.14-69.68 147.28-151.7 3.58-22.31-1.42-5.46-16.55 5.86-49.4 36.97-146.53 23.88-160-60.55-27.14-149.49 159.78-175.37 215.1-92.81 12.87 19.19 21.39 41.59 24.46 66.19 13.33 106.99-41.5 202.28-137.82 247.04-17.82 8.28-36.59 14.76-56.81 19.52-10.12 2.04-17.47-3.46-20.86-12.78-2.87-7.95-3.85-16.72 5.2-20.77z"></path>
                </svg>
              </div>
              <div>
                <p className="testimonial-text text-gray-700 leading-relaxed line-clamp-3">
                  “Dev ji guided me through my first SIP investment and
                  explained everything in simple terms. Within three years my
                  portfolio has grown significantly. I trust ShagunShri-Wealtha
                  completely with my family’s financial future.”
                </p>
                <button
                  type="button"
                  className="testimonial-toggle mt-3 text-sm font-semibold text-theme1 hover:text-[#1f5a12] transition"
                  data-expanded="false"
                  onClick={(e) => {
                    const btn = e.currentTarget;
                    const p = btn.previousElementSibling;
                    const expanded = btn.dataset.expanded === "true";
                    p.classList.toggle("line-clamp-3", expanded);
                    btn.dataset.expanded = expanded ? "false" : "true";
                    btn.textContent = expanded ? "Read More" : "Read Less";
                  }}
                >
                  Read More
                </button>
              </div>
              <div className="flex items-center gap-4 pt-4 border-top mt-6 border-t">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="icon icon-tabler icons-tabler-filled icon-tabler-user"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z"></path>
                  <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z"></path>
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900">Ramesh Sharma</h3>
                  <p className="text-sm text-gray-500">Teacher, Ujjain</p>
                </div>
              </div>
            </article>

            <article className="relative bg-white p-6 rounded-3xl flex h-full flex-col justify-between border border-gray-800 overflow-hidden">
              <div className="absolute right-4 bottom-4 opacity-10 text-theme1 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 379.51"
                  className="w-14 h-14"
                  fill="currentColor"
                >
                  <path d="M299.73 345.54c81.25-22.55 134.13-69.68 147.28-151.7 3.58-22.31-1.42-5.46-16.55 5.86-49.4 36.97-146.53 23.88-160.01-60.55C243.33-10.34 430.24-36.22 485.56 46.34c12.87 19.19 21.39 41.59 24.46 66.19 13.33 106.99-41.5 202.28-137.82 247.04-17.82 8.28-36.6 14.76-56.81 19.52-10.12 2.04-17.47-3.46-20.86-12.78-2.87-7.95-3.85-16.72 5.2-20.77zm-267.78 0c81.25-22.55 134.14-69.68 147.28-151.7 3.58-22.31-1.42-5.46-16.55 5.86-49.4 36.97-146.53 23.88-160-60.55-27.14-149.49 159.78-175.37 215.1-92.81 12.87 19.19 21.39 41.59 24.46 66.19 13.33 106.99-41.5 202.28-137.82 247.04-17.82 8.28-36.59 14.76-56.81 19.52-10.12 2.04-17.47-3.46-20.86-12.78-2.87-7.95-3.85-16.72 5.2-20.77z"></path>
                </svg>
              </div>
              <div>
                <p className="testimonial-text text-gray-700 leading-relaxed line-clamp-3">
                  “I approached ShagunShri-Wealtha for a Mediclaim policy for my
                  parents. They compared multiple options, found the best
                  coverage at an affordable premium, and supported us through
                  the claim process too. Truly a dependable advisor.”
                </p>
                <button
                  type="button"
                  className="testimonial-toggle mt-3 text-sm font-semibold text-theme1 hover:text-[#1f5a12] transition"
                  data-expanded="false"
                  onClick={(e) => {
                    const btn = e.currentTarget;
                    const p = btn.previousElementSibling;
                    const expanded = btn.dataset.expanded === "true";
                    p.classList.toggle("line-clamp-3", expanded);
                    btn.dataset.expanded = expanded ? "false" : "true";
                    btn.textContent = expanded ? "Read More" : "Read Less";
                  }}
                >
                  Read More
                </button>
              </div>
              <div className="flex items-center gap-4 pt-4 border-top mt-6 border-t">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="icon icon-tabler icons-tabler-filled icon-tabler-user"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z"></path>
                  <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z"></path>
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900">Priya Verma</h3>
                  <p className="text-sm text-gray-500">Homemaker, Ujjain</p>
                </div>
              </div>
            </article>

            <article className="relative bg-white p-6 rounded-3xl flex h-full flex-col justify-between border border-gray-800 overflow-hidden">
              <div className="absolute right-4 bottom-4 opacity-10 text-theme1 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 379.51"
                  className="w-14 h-14"
                  fill="currentColor"
                >
                  <path d="M299.73 345.54c81.25-22.55 134.13-69.68 147.28-151.7 3.58-22.31-1.42-5.46-16.55 5.86-49.4 36.97-146.53 23.88-160.01-60.55C243.33-10.34 430.24-36.22 485.56 46.34c12.87 19.19 21.39 41.59 24.46 66.19 13.33 106.99-41.5 202.28-137.82 247.04-17.82 8.28-36.6 14.76-56.81 19.52-10.12 2.04-17.47-3.46-20.86-12.78-2.87-7.95-3.85-16.72 5.2-20.77zm-267.78 0c81.25-22.55 134.14-69.68 147.28-151.7 3.58-22.31-1.42-5.46-16.55 5.86-49.4 36.97-146.53 23.88-160-60.55-27.14-149.49 159.78-175.37 215.1-92.81 12.87 19.19 21.39 41.59 24.46 66.19 13.33 106.99-41.5 202.28-137.82 247.04-17.82 8.28-36.59 14.76-56.81 19.52-10.12 2.04-17.47-3.46-20.86-12.78-2.87-7.95-3.85-16.72 5.2-20.77z"></path>
                </svg>
              </div>
              <div>
                <p className="testimonial-text text-gray-700 leading-relaxed line-clamp-3">
                  “Mr. Dev Bajpai helped us plan our retirement systematically.
                  He suggested a balanced mix of mutual funds and insurance that
                  suits our risk appetite. Now in our 50s, we feel genuinely
                  secure about the future — something we couldn’t say before
                  meeting him.”
                </p>
                <button
                  type="button"
                  className="testimonial-toggle mt-3 text-sm font-semibold text-theme1 hover:text-[#1f5a12] transition"
                  data-expanded="false"
                  onClick={(e) => {
                    const btn = e.currentTarget;
                    const p = btn.previousElementSibling;
                    const expanded = btn.dataset.expanded === "true";
                    p.classList.toggle("line-clamp-3", expanded);
                    btn.dataset.expanded = expanded ? "false" : "true";
                    btn.textContent = expanded ? "Read More" : "Read Less";
                  }}
                >
                  Read More
                </button>
              </div>
              <div className="flex items-center gap-4 pt-4 border-top mt-6 border-t">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="icon icon-tabler icons-tabler-filled icon-tabler-user"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 2a5 5 0 0 1 5 5l-.005 -.217a5 5 0 0 0 -4.995 -4.783z"></path>
                  <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z"></path>
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Suresh &amp; Kavita Gupta
                  </h3>
                  <p className="text-sm text-gray-500">
                    Business Owners, Ujjain
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="faq" className="pb-10">
        <div className="max-w-[1300px] mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-3xl lg:text-4xl  font-semibold text-gray-900">
              Frequently Asked <span className="text-theme1">Questions</span>
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Get answers to your questions about mutual funds, insurance,
              retirement planning, and investment advisory.
            </p>
          </div>
          <div className="space-y-4">
            <article className="faq-item rounded-2xl border border-gray-200 bg-white shadow-sm transition-all">
              <button
                type="button"
                className="w-full flex items-center justify-between px-5 sm:px-6 py-4 text-left"
                onClick={(e) => {
                  const item = e.currentTarget.closest(".faq-item");
                  const answer = item.querySelector(".faq-answer");
                  const icon = item.querySelector(".faq-icon");
                  const isOpen =
                    answer.style.maxHeight && answer.style.maxHeight !== "0px";
                  answer.style.maxHeight = isOpen
                    ? "0px"
                    : answer.scrollHeight + "px";
                  answer.style.paddingBottom = isOpen ? "0" : "";
                  icon.textContent = isOpen ? "+" : "−";
                }}
              >
                <span className="font-semibold text-gray-900">
                  What services does ShagunShri-Wealtha offer?
                </span>
                <span className="faq-icon w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-transform">
                  +
                </span>
              </button>
              <div className="faq-answer px-5 sm:px-6 pb-0 text-gray-600 leading-relaxed overflow-hidden max-h-0 transition-all duration-300">
                <p className="pb-5">
                  We offer a comprehensive range of financial services including
                  Mutual Fund investment planning, Portfolio Management Services
                  (PMS), Retirement Planning, Life Insurance, Health Insurance
                  (Mediclaim), and General Insurance. Our goal is to provide
                  personalized, end-to-end financial solutions that align with
                  your life goals and risk appetite.
                </p>
              </div>
            </article>

            <article className="faq-item rounded-2xl border border-gray-200 bg-white shadow-sm transition-all">
              <button
                type="button"
                className="w-full flex items-center justify-between px-5 sm:px-6 py-4 text-left"
                onClick={(e) => {
                  const item = e.currentTarget.closest(".faq-item");
                  const answer = item.querySelector(".faq-answer");
                  const icon = item.querySelector(".faq-icon");
                  const isOpen =
                    answer.style.maxHeight && answer.style.maxHeight !== "0px";
                  answer.style.maxHeight = isOpen
                    ? "0px"
                    : answer.scrollHeight + "px";
                  icon.textContent = isOpen ? "+" : "−";
                }}
              >
                <span className="font-semibold text-gray-900">
                  How do I start investing in Mutual Funds through
                  ShagunShri-Wealtha?
                </span>
                <span className="faq-icon w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-transform">
                  +
                </span>
              </button>
              <div className="faq-answer px-5 sm:px-6 pb-0 text-gray-600 leading-relaxed overflow-hidden max-h-0 transition-all duration-300">
                <p className="pb-5">
                  Getting started is simple. Reach out to us via our contact
                  page or call us directly. Our advisor, Mr. Dev Bajpai, will
                  understand your financial goals, assess your risk profile, and
                  recommend a suitable mutual fund portfolio — whether SIP-based
                  or lump sum — tailored specifically for you. We also assist
                  with KYC completion and account setup.
                </p>
              </div>
            </article>

            <article className="faq-item rounded-2xl border border-gray-200 bg-white shadow-sm transition-all">
              <button
                type="button"
                className="w-full flex items-center justify-between px-5 sm:px-6 py-4 text-left"
                onClick={(e) => {
                  const item = e.currentTarget.closest(".faq-item");
                  const answer = item.querySelector(".faq-answer");
                  const icon = item.querySelector(".faq-icon");
                  const isOpen =
                    answer.style.maxHeight && answer.style.maxHeight !== "0px";
                  answer.style.maxHeight = isOpen
                    ? "0px"
                    : answer.scrollHeight + "px";
                  icon.textContent = isOpen ? "+" : "−";
                }}
              >
                <span className="font-semibold text-gray-900">
                  What is the difference between Mutual Funds and Portfolio
                  Management Services (PMS)?
                </span>
                <span className="faq-icon w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-transform">
                  +
                </span>
              </button>
              <div className="faq-answer px-5 sm:px-6 pb-0 text-gray-600 leading-relaxed overflow-hidden max-h-0 transition-all duration-300">
                <p className="pb-5">
                  Mutual Funds pool money from multiple investors and invest in
                  diversified assets, making them suitable for most investors.
                  PMS (Portfolio Management Services), on the other hand, offers
                  individually managed investment portfolios with a higher
                  degree of customization and active management, typically
                  suited for high-net-worth individuals (HNIs) with larger
                  investable surpluses. We help you choose the right option
                  based on your financial situation.
                </p>
              </div>
            </article>

            <article className="faq-item rounded-2xl border border-gray-200 bg-white shadow-sm transition-all">
              <button
                type="button"
                className="w-full flex items-center justify-between px-5 sm:px-6 py-4 text-left"
                onClick={(e) => {
                  const item = e.currentTarget.closest(".faq-item");
                  const answer = item.querySelector(".faq-answer");
                  const icon = item.querySelector(".faq-icon");
                  const isOpen =
                    answer.style.maxHeight && answer.style.maxHeight !== "0px";
                  answer.style.maxHeight = isOpen
                    ? "0px"
                    : answer.scrollHeight + "px";
                  icon.textContent = isOpen ? "+" : "−";
                }}
              >
                <span className="font-semibold text-gray-900">
                  Why should I get Life Insurance or Health Insurance through a
                  financial advisor?
                </span>
                <span className="faq-icon w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-transform">
                  +
                </span>
              </button>
              <div className="faq-answer px-5 sm:px-6 pb-0 text-gray-600 leading-relaxed overflow-hidden max-h-0 transition-all duration-300">
                <p className="pb-5">
                  A financial advisor helps you identify the right plan based on
                  your age, income, family needs, and existing coverage — rather
                  than just picking a policy off the shelf. At
                  ShagunShri-Wealtha, we compare plans across leading insurers,
                  explain the fine print, help you avoid over-insuring or
                  under-insuring, and assist you during claims. Our guidance
                  ensures your insurance truly protects you when it matters
                  most.
                </p>
              </div>
            </article>

            <article className="faq-item rounded-2xl border border-gray-200 bg-white shadow-sm transition-all">
              <button
                type="button"
                className="w-full flex items-center justify-between px-5 sm:px-6 py-4 text-left"
                onClick={(e) => {
                  const item = e.currentTarget.closest(".faq-item");
                  const answer = item.querySelector(".faq-answer");
                  const icon = item.querySelector(".faq-icon");
                  const isOpen =
                    answer.style.maxHeight && answer.style.maxHeight !== "0px";
                  answer.style.maxHeight = isOpen
                    ? "0px"
                    : answer.scrollHeight + "px";
                  icon.textContent = isOpen ? "+" : "−";
                }}
              >
                <span className="font-semibold text-gray-900">
                  When should I start planning for retirement?
                </span>
                <span className="faq-icon w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-transform">
                  +
                </span>
              </button>
              <div className="faq-answer px-5 sm:px-6 pb-0 text-gray-600 leading-relaxed overflow-hidden max-h-0 transition-all duration-300">
                <p className="pb-5">
                  The earlier, the better. Starting your retirement plan in your
                  20s or 30s allows the power of compounding to work in your
                  favour, requiring smaller monthly contributions to build a
                  substantial corpus. Even if you start later, our advisors can
                  design a catch-up strategy with a mix of high-return mutual
                  funds, pension plans, and other instruments to help you retire
                  comfortably.
                </p>
              </div>
            </article>

            <article className="faq-item rounded-2xl border border-gray-200 bg-white shadow-sm transition-all">
              <button
                type="button"
                className="w-full flex items-center justify-between px-5 sm:px-6 py-4 text-left"
                onClick={(e) => {
                  const item = e.currentTarget.closest(".faq-item");
                  const answer = item.querySelector(".faq-answer");
                  const icon = item.querySelector(".faq-icon");
                  const isOpen =
                    answer.style.maxHeight && answer.style.maxHeight !== "0px";
                  answer.style.maxHeight = isOpen
                    ? "0px"
                    : answer.scrollHeight + "px";
                  icon.textContent = isOpen ? "+" : "−";
                }}
              >
                <span className="font-semibold text-gray-900">
                  How can I get in touch with ShagunShri-Wealtha?
                </span>
                <span className="faq-icon w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-transform">
                  +
                </span>
              </button>
              <div className="faq-answer px-5 sm:px-6 pb-0 text-gray-600 leading-relaxed overflow-hidden max-h-0 transition-all duration-300">
                <p className="pb-5">
                  You can reach us through our Contact Us page, call us directly
                  at our office in Ujjain, or drop us a message via WhatsApp.
                  Mr. Dev Bajpai personally consults with each client to
                  understand their financial needs. We offer a free initial
                  consultation to help you get started on your financial journey
                  with confidence.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="relative text-white h-[400px]">
        <div className="absolute inset-0">
          <img
            src="/images/home.png"
            alt="cta"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between lg:max-w-[1300px] mx-auto py-10 lg:py-2">
          <div className="w-full lg:mt-20 text-center m">
            <h1 className="text-3xl lg:text-5xl font-extrabold mb-2 ">
              Partner With Us for Trusted, <br />
              <span className="text-theme2">
                Professional Financial Advisory
              </span>
            </h1>

            <p className="text-gray-300 mb-6 text-lg italic">
              Delivering reliable investment advisory, insurance solutions, and
              retirement planning backed by 13+ years of experience and trust.
            </p>

            <a
              href="/contact-us"
              className="inline-block bg-theme1 text-white font-semibold py-2.5 px-4 rounded-full shadow-lg transition duration-300 hover:opacity-90"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default index;
