import React, { useRef } from "react";
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
      icon: "/images/1.png",
    },
    {
      title: "Portfolio Management Service (PMS)",
      description:
        "Our Portfolio Management Services offer professionally managed investment portfolios designed to deliver optimized returns through strategic asset allocation and active management.",
      icon: "/images/pms.png",
    },
    {
      title: "Life Insurance",
      description:
        "We help you secure your family’s financial future with reliable life insurance solutions that provide protection, savings, and long-term financial stability.",
      icon: "/images/life-insurance.png",
    },
    {
      title: "Mediclaim (Health Insurance)",
      description:
        "Our health insurance solutions ensure financial protection against medical emergencies, offering comprehensive coverage and peace of mind for you and your family.",
      icon: "/images/health-insurance.png",
    },
    {
      title: "Child Future Planning",
      description:
        "We design structured investment plans to secure your child’s education and future milestones through disciplined and goal-oriented financial planning.",
      icon: "/images/child-planning.png",
    },
    {
      title: "Retirement Planning",
      description:
        "Our retirement planning strategies focus on building a stable and sufficient corpus to maintain your desired lifestyle after retirement.",
      icon: "/images/retirement.png",
    },
  ];
  return (
    <>
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
        <div className="lg:max-w-[1300px] px-4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative w-full mx-auto md:mx-0">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                width={100}
                height={100}
                src="/images/1.png"
                alt="Shagun Shri Investment"
                className="w-full h-[300px] lg:h-[500px] object-cover border border-gray-200"
              />
            </div>

            <div className="absolute -bottom-4 left-0 bg-theme1 backdrop-blur-md px-4 py-4 max-w-[350px]">
              <p className="text-base font-lexend font-semibold text-white leading-snug">
                Trusted Financial Guidance
              </p>
              <p className="text-sm text-white mt-1">
                Helping individuals and families achieve financial freedom
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 pb-2">
              <div className="w-3 h-3 bg-theme1 rounded-sm"></div>
              <span className="text-theme1 tracking-wider font-medium uppercase">
                About Shagun Shri Investment
              </span>
            </div>

            <h2 className="text-3xl font-lexend lg:text-4xl lg:leading-[40px] font-bold text-gray-900 mb-4">
              Smart Investment & Insurance Solutions for Your Financial Security
            </h2>

            <p className="text-gray-600 text-sm lg:text-base mb-6 max-w-2xl leading-relaxed">
              Shagun Shri Investment, led by financial consultant Dev Bajpai,
              provides trusted financial guidance to help individuals and
              families build long-term financial stability. Our focus is on
              simplifying financial planning through reliable investment
              strategies, insurance protection, and tax-saving opportunities
              tailored to each client’s needs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-6">
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0B2C4D"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-checks"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>{" "}
                  <path d="M7 12l5 5l10 -10"></path>{" "}
                  <path d="M2 12l5 5m5 -5l5 -5"></path>{" "}
                </svg>
                <span className="text-gray-700 font-semibold">
                  Mutual Fund Investment Planning
                </span>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0B2C4D"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-checks"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>{" "}
                  <path d="M7 12l5 5l10 -10"></path>{" "}
                  <path d="M2 12l5 5m5 -5l5 -5"></path>{" "}
                </svg>
                <span className="text-gray-700 font-semibold">
                  Life & Health Insurance
                </span>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0B2C4D"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-checks"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>{" "}
                  <path d="M7 12l5 5l10 -10"></path>{" "}
                  <path d="M2 12l5 5m5 -5l5 -5"></path>{" "}
                </svg>
                <span className="text-gray-700 font-semibold">
                  Retirement Planning
                </span>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0B2C4D"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-checks"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>{" "}
                  <path d="M7 12l5 5l10 -10"></path>{" "}
                  <path d="M2 12l5 5m5 -5l5 -5"></path>{" "}
                </svg>
                <span className="text-gray-700 font-semibold">
                  Portfolio Management
                </span>
              </div>
            </div>

            <a
              href="/about-us"
              className="inline-flex items-center justify-center rounded-full bg-theme1 px-8 py-3 text-white font-semibold"
            >
              Know More About Us
            </a>
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
                At Shagun Shri Investment, we help individuals and families plan
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
                End-to-end advisory, compliance, and consulting services
                designed to strengthen governance
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
                Practical partnerships that translate into measurable growth,
                sharper compliance, and calmer boardrooms.
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
                  “Their compliance playbooks and internal-control walkthroughs
                  have become the gold standard for our plants. Every audit
                  cycle is calmer because their team thinks three steps ahead.”
                </p>
                <button
                  type="button"
                  className="testimonial-toggle mt-3 text-sm font-semibold text-theme1 hover:text-[#1f5a12] transition"
                  data-expanded="false"
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
                  <h3 className="font-semibold text-gray-900">Amit Vora</h3>
                  <p className="text-sm text-gray-500">
                    Operations Head, Zenith Metals
                  </p>
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
                  “They built a cross-border holding structure, orchestrated RBI
                  filings, and still made time to coach our finance team. It
                  feels like having an in-house chief compliance officer.”
                </p>
                <button
                  type="button"
                  className="testimonial-toggle mt-3 text-sm font-semibold text-theme1 hover:text-[#1f5a12] transition"
                  data-expanded="false"
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
                  <h3 className="font-semibold text-gray-900">Ishita Menon</h3>
                  <p className="text-sm text-gray-500">
                    Founder, Dwell &amp; Co.
                  </p>
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
                  “Weekly steering calls, detailed MIS packs, and instant
                  statutory updates mean our board meetings are now about
                  strategy rather than catching up on compliance.”
                </p>
                <button
                  type="button"
                  className="testimonial-toggle mt-3 text-sm font-semibold text-theme1 hover:text-[#1f5a12] transition"
                  data-expanded="false"
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
                  <h3 className="font-semibold text-gray-900">Prakash Nair</h3>
                  <p className="text-sm text-gray-500">
                    Independent Director, Suryodaya Group
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="bg-base-100 py-8 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-12 space-y-4 text-center sm:mb-16 lg:mb-24">
            <p className="text-primary text-sm font-medium uppercase">
              Blog list
            </p>
            <h2 className="text-base-content text-2xl font-semibold md:text-3xl lg:text-4xl">
              Plan your upcoming journey.
            </h2>
            <p className="text-base-content/80 text-xl">
              Explore new destinations, indulge in local cuisines, and immerse
              yourself in diverse cultures.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="card card-border shadow-none">
              <figure>
                <img
                  src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/blog/blog-36.png"
                  alt="Modern house"
                />
              </figure>
              <div className="card-body gap-3">
                <h5 className="card-title text-xl">
                  Laws of Transfer of Immovable Property
                </h5>
                <p className="mb-5">
                  Experience the charm of this lovely and cozy apartment,
                  featuring warm decor and inviting spaces, perfect for
                  relaxation and comfort, ideal for your next getaway.
                </p>
                <div className="card-actions">
                  <a href="#" class="btn btn-primary btn-gradient">
                    Read More
                    <span class="icon-[tabler--arrow-right] size-5 rtl:rotate-180"></span>
                  </a>
                </div>
              </div>
            </div>

            <div className="card card-border shadow-none">
              <figure>
                <img
                  src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/blog/blog-37.png"
                  alt="Traditional house"
                />
              </figure>
              <div className="card-body gap-3">
                <h5 className="card-title text-xl">
                  Thane Development Plan 2026 & Master Plan
                </h5>
                <p className="mb-5">
                  Discover a unique nook in the heart of the city, offering
                  convenience and access to attractions. Stylishly designed, it
                  provides a comfortable retreat.
                </p>
                <div className="card-actions">
                  <a href="#" className="btn btn-primary btn-gradient">
                    Read More
                    <span class="icon-[tabler--arrow-right] size-5 rtl:rotate-180"></span>
                  </a>
                </div>
              </div>
            </div>

            <div className="card card-border shadow-none">
              <figure>
                <img
                  src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/blog/blog-38.png"
                  alt="Modern house with pool"
                />
              </figure>
              <div className="card-body gap-3">
                <h5 className="card-title text-xl">
                  What is a Property Sale Agreement?
                </h5>
                <p className="mb-5">
                  Welcome to this charming independent house bedroom, featuring
                  a spacious layout and cozy furnishings. Enjoy abundant natural
                  light and peaceful.
                </p>
                <div className="card-actions">
                  <a href="#" className="btn btn-primary btn-gradient">
                    Read More
                    <span className="icon-[tabler--arrow-right] size-5 rtl:rotate-180"></span>
                  </a>
                </div>
              </div>
            </div>
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
              Find clarity on audits, taxation, compliance and advisory support.
            </p>
          </div>
          <div className="space-y-4">
            <article className="faq-item rounded-2xl border border-gray-200 bg-white shadow-sm transition-all">
              <button
                type="button"
                className="w-full flex items-center justify-between px-5 sm:px-6 py-4 text-left"
                onClick="toggleFAQ(this)"
              >
                <span className="font-semibold text-gray-900">
                  Which industries does your firm serve?
                </span>
                <span className="faq-icon w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-transform">
                  +
                </span>
              </button>
              <div className="faq-answer px-5 sm:px-6 pb-0 text-gray-600 leading-relaxed overflow-hidden max-h-0 transition-all duration-300">
                <p className="pb-5">
                  With over four decades of experience, we serve clients across
                  manufacturing, banking & NBFCs, real estate, infrastructure,
                  healthcare, trading, professional services, and public sector
                  undertakings. Our sectoral understanding enables us to provide
                  practical and regulation-aligned solutions.
                </p>
              </div>
            </article>

            <article className="faq-item rounded-2xl border border-gray-200 bg-white shadow-sm transition-all">
              <button
                type="button"
                className="w-full flex items-center justify-between px-5 sm:px-6 py-4 text-left"
                onclick="toggleFAQ(this)"
              >
                <span className="font-semibold text-gray-900">
                  Do you provide complete GST and indirect tax compliance
                  services?
                </span>
                <span className="faq-icon w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-transform">
                  +
                </span>
              </button>
              <div className="faq-answer px-5 sm:px-6 pb-0 text-gray-600 leading-relaxed overflow-hidden max-h-0 transition-all duration-300">
                <p className="pb-5">
                  Yes. We offer end-to-end GST compliance including
                  registration, return filing, reconciliations, departmental
                  notices, assessments, audits, and representation before
                  authorities, ensuring timely compliance and risk mitigation.
                </p>
              </div>
            </article>

            <article className="faq-item rounded-2xl border border-gray-200 bg-white shadow-sm transition-all">
              <button
                type="button"
                className="w-full flex items-center justify-between px-5 sm:px-6 py-4 text-left"
                onclick="toggleFAQ(this)"
              >
                <span className="font-semibold text-gray-900">
                  What types of audits does your firm conduct?
                </span>
                <span className="faq-icon w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-transform">
                  +
                </span>
              </button>
              <div className="faq-answer px-5 sm:px-6 pb-0 text-gray-600 leading-relaxed overflow-hidden max-h-0 transition-all duration-300">
                <p className="pb-5">
                  We conduct statutory audits, internal audits, tax audits, bank
                  audits, and special audits. The firm has also served as
                  Statutory Central Auditors (SCAs) for banks and financial
                  institutions, reflecting our expertise in regulated
                  environments.
                </p>
              </div>
            </article>

            <article className="faq-item rounded-2xl border border-gray-200 bg-white shadow-sm transition-all">
              <button
                type="button"
                className="w-full flex items-center justify-between px-5 sm:px-6 py-4 text-left"
                onclick="toggleFAQ(this)"
              >
                <span className="font-semibold text-gray-900">
                  Do you offer financial advisory and business consulting
                  services?
                </span>
                <span className="faq-icon w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-transform">
                  +
                </span>
              </button>
              <div className="faq-answer px-5 sm:px-6 pb-0 text-gray-600 leading-relaxed overflow-hidden max-h-0 transition-all duration-300">
                <p className="pb-5">
                  Yes. Our advisory services include financial planning,
                  feasibility studies, business restructuring, valuation, risk
                  assessment, and strategic guidance to support informed
                  decision-making and sustainable growth.
                </p>
              </div>
            </article>

            <article className="faq-item rounded-2xl border border-gray-200 bg-white shadow-sm transition-all">
              <button
                type="button"
                className="w-full flex items-center justify-between px-5 sm:px-6 py-4 text-left"
                onclick="toggleFAQ(this)"
              >
                <span className="font-semibold text-gray-900">
                  Can you assist with company formation and regulatory
                  compliance?
                </span>
                <span className="faq-icon w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-transform">
                  +
                </span>
              </button>
              <div className="faq-answer px-5 sm:px-6 pb-0 text-gray-600 leading-relaxed overflow-hidden max-h-0 transition-all duration-300">
                <p className="pb-5">
                  We provide comprehensive corporate compliance services
                  including company incorporation, ROC filings, corporate
                  restructuring, secretarial compliance, and advisory on
                  regulatory matters to ensure seamless governance and statutory
                  adherence.
                </p>
              </div>
            </article>

            <article className="faq-item rounded-2xl border border-gray-200 bg-white shadow-sm transition-all">
              <button
                type="button"
                className="w-full flex items-center justify-between px-5 sm:px-6 py-4 text-left"
                onclick="toggleFAQ(this)"
              >
                <span className="font-semibold text-gray-900">
                  How can we engage with & Associates?
                </span>
                <span className="faq-icon w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-transform">
                  +
                </span>
              </button>
              <div className="faq-answer px-5 sm:px-6 pb-0 text-gray-600 leading-relaxed overflow-hidden max-h-0 transition-all duration-300">
                <p className="pb-5">
                  You may connect with us through our contact channels to
                  discuss your requirements. After understanding your
                  objectives, we provide a structured engagement proposal
                  outlining scope, timelines, and professional fees, ensuring
                  clarity and transparency from the outset.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="relative text-white h-[400px]">
        <div className="absolute inset-0">
          <img
            src="/images/home-banner.jpg"
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
              Delivering reliable audit, taxation, and compliance solutions
              backed by experience, integrity, and regulatory expertise.
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
