import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-800 font-dmsans w-full text-gray-900">
      <div className="max-w-[1300px] px-4 mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-10 py-6">
        <div className="lg:col-span-1">
          <div className="mb-4 ">
            <Link href="/" className="inline-block">
              <Image
                className="w-36 h-auto"
                src="/images/logo.png"
                alt="shagun-shree-logo"
                width={100}
                height={65}
              />
            </Link>
          </div>
          <p className="text-gray-50 font-medium text-sm lg:text-base mb-6">
            We at Sankalp Shree Investment specialize in providing mutual fund
            advisory, insurance and comprehensive financial planning solutions.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="https://www.linkedin.com/company/"
              target="_blank"
              className="text-blue-50 hover:text-white active:text-blue-600 transition duration-100"
            >
              <svg
                className="w-6 h-6 lg:w-7 lg:h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </Link>
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              className="text-blue-50 hover:text-white active:text-blue-600 transition duration-100"
            >
              <svg
                className="w-6 h-6 lg:w-7 lg:h-7"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z"
                  fill="currentColor"
                ></path>
              </svg>
            </Link>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="text-white font-bold tracking-widest uppercase text-sm lg:text-base mb-4">
            Quick Links
          </div>

          <nav className="flex flex-col gap-2 lg:gap-3">
            <div>
              <Link
                href="/"
                className="text-sm lg:text-base text-gray-50 hover:text-white"
              >
                Home
              </Link>
            </div>

            <div>
              <Link
                href="/about-us"
                className="text-sm lg:text-base text-gray-50 hover:text-white"
              >
                About us
              </Link>
            </div>

            <div>
              <Link
                href="/Contactus"
                className="text-sm lg:text-base text-gray-50 hover:text-white"
              >
                Contact us
              </Link>
            </div>
          </nav>
        </div>

        <div className="lg:col-span-1">
          <div className="text-white font-bold tracking-widest uppercase text-sm lg:text-base mb-4">
            Services & Products
          </div>
          <nav className="flex flex-col gap-2 lg:gap-3">
            <div>
              <Link
                href="/services/Dynamicsgp"
                className="text-sm lg:text-base text-gray-50 hover:text-white"
              >
                Mutual Funds
              </Link>
            </div>
            <div>
              <Link
                href="/services/F&O"
                className="text-sm lg:text-base text-gray-50 hover:text-white"
              >
                Child Future Planning
              </Link>
            </div>
            <div>
              <Link
                href="/services/Bc"
                className="text-sm lg:text-base text-gray-50 hover:text-white"
              >
                Retirement Planning
              </Link>
            </div>
            <div>
              <Link
                href="/services/Powerbi"
                className="text-sm lg:text-base text-gray-50 hover:text-white"
              >
                Portfolio Management Service (PMS)
              </Link>
            </div>
            <div>
              <Link
                href="/services/Sap"
                className="text-sm lg:text-base text-gray-50 hover:text-white"
              >
                Life Insurance
              </Link>
            </div>
            <div>
              <Link
                href="/services/Servicenow"
                className="text-sm lg:text-base text-gray-50 hover:text-white"
              >
                Mediclaim
              </Link>
            </div>
            <div>
              <Link
                href="/services/Web&mobile"
                className="text-sm lg:text-base text-gray-50 hover:text-white"
              >
                Tax Planning
              </Link>
            </div>
          </nav>
        </div>

        <div className="col-span-1">
          <div className="text-white font-bold tracking-widest uppercase text-sm lg:text-base mb-4">
            Contact Us
          </div>
          <nav className="flex flex-col gap-4">
            <Link href="tel:94250-93166" className="flex items-start group">
              <div className="rounded-full w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center shrink-0 text-white">
                <svg
                  className="text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m16 8 6-6" />
                  <path d="M22 8V2h-6" />
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                </svg>
              </div>
              <div className="ml-3 mt-0.5 flex-col w-full h-auto text-left text-sm lg:text-base text-gray-50 hover:text-white break-words">
                +91 9425904786
              </div>
            </Link>

            <Link
              href="mailto:shagunshri.invest@gmail.com"
              target="_blank"
              className="flex items-start group cursor-pointer duration-150"
            >
              <div className="rounded-full relative w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center shrink-0 text-white">
                <svg
                  className="text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                </svg>
              </div>
              <div className="ml-3 mt-0.5 w-full h-auto text-left text-sm lg:text-base text-gray-50 hover:text-white break-words">
                shagunshri.invest@gmail.com
              </div>
            </Link>
            <div className="flex items-start">
              <div className="rounded-full relative w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center shrink-0 text-white">
                <svg
                  className="text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z" />
                  <path d="M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2" />
                  <path d="M18 22v-3" />
                  <circle cx="10" cy="10" r="3" />
                </svg>
              </div>
              <div className="text-sm lg:text-base text-gray-50 ml-3 mt-0.5 break-words">
                203/1, C Block, Dindayal Upadhyay Complex Indore Road, Ujjain –
                456010
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="bg-slate-900 py-3 w-full text-blue-50">
        <div className="max-w-[1300px] mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <Link
            href="/"
            className="font-medium text-sm sm:text-base text-center md:text-left hover:text-white uppercase"
          >
            © 2026 shagun shree
          </Link>
          <div className="flex flex-wrap justify-center md:justify-end text-center md:text-right text-sm sm:text-base">
            Designed & Developed By&nbsp;
            <Link
              href="https://www.noxalgo.com"
              target="_blank"
              className="font-medium hover:text-white uppercase self-center"
            >
              {" "}
              Noxalgo LLP
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
