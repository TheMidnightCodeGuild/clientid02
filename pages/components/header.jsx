import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg font-dmsans fixed top-0 w-full mx-auto z-50">
      <div className="lg:max-w-[1300px] mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              className="w-auto h-20"
              src="/images/logo.png"
              alt="logo"
              width={60}
              height={60}
              priority
            />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-black font-dmsans text-base font-medium">
            <Link
              href="/"
              className="relative rounded-full py-1 transition-colors group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>
            <Link
              href="/about-us"
              className="relative rounded-full py-1 transition-colors group"
            >
              About Us
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>

         <div className="relative inline-flex text-gray-800">
  <button
    type="button"
    className="flex items-center gap-2 font-medium"
    onMouseEnter={() => setDesktopServicesOpen(true)}
    onMouseLeave={() => setDesktopServicesOpen(false)}
  >
    Services & Products
    <svg
      className={`w-3 h-3 transition-transform ${
        desktopServicesOpen ? "rotate-180" : ""
      }`}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M2 5L8 11L14 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  </button>

  <div
    className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 transition-all duration-200 w-[420px] bg-white shadow-xl rounded-2xl p-6 ${
      desktopServicesOpen
        ? "opacity-100 visible translate-y-0"
        : "opacity-0 invisible -translate-y-2"
    }`}
    onMouseEnter={() => setDesktopServicesOpen(true)}
    onMouseLeave={() => setDesktopServicesOpen(false)}
  >
    <div className="grid grid-cols-2 gap-6">

      {/* Investment */}
      <div>
        <p className="text-sm font-semibold text-theme1 mb-2">
          Investment
        </p>
        <div className="space-y-2">
          <Link href="/services/mutual-funds" className="block text-gray-700 hover:text-theme1 text-sm">
            Mutual Funds
          </Link>
          <Link href="/services/retirement-planning" className="block text-gray-700 hover:text-theme1 text-sm">
            Retirement Planning
          </Link>
          <Link href="/services/tax-planning" className="block text-gray-700 hover:text-theme1 text-sm">
            Tax Planning
          </Link>
          <Link href="/services/pms" className="block text-gray-700 hover:text-theme1 text-sm">
            Portfolio Management (PMS)
          </Link>
        </div>
      </div>

      {/* Insurance */}
      <div>
        <p className="text-sm font-semibold text-theme1 mb-2">
          Insurance
        </p>
        <div className="space-y-2">
          <Link href="/services/life-insurance" className="block text-gray-700 hover:text-theme1 text-sm">
            Life Insurance
          </Link>
          <Link href="/services/health-insurance" className="block text-gray-700 hover:text-theme1 text-sm">
            Health Insurance
          </Link>
          <Link href="/services/motor-insurance" className="block text-gray-700 hover:text-theme1 text-sm">
            Motor Insurance
          </Link>
          <Link href="/services/general-insurance" className="block text-gray-700 hover:text-theme1 text-sm">
            General Insurance
          </Link>
        </div>
      </div>

      {/* Services */}
      <div>
        <p className="text-sm font-semibold text-theme1 mb-2">
          Documentation
        </p>
        <div className="space-y-2">
          <Link href="/services/pan-card" className="block text-gray-700 hover:text-theme1 text-sm">
            PAN Card
          </Link>
          <Link href="/services/passport" className="block text-gray-700 hover:text-theme1 text-sm">
            Passport
          </Link>
        </div>
      </div>

    </div>
  </div>
</div>
            <Link
              href="/blogs"
              className="relative rounded-full py-1 transition-colors group"
            >
              Blogs
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>

            <Link
              href="/contact-us"
              className="font-medium text-base transition-colors duration-200 bg-theme1 text-white px-6 rounded-full py-2"
            >
              Contact now
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`fixed md:hidden inset-0 z-50 ${mobileMenuOpen ? "" : "pointer-events-none"}`}>
          <div
            className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
              mobileMenuOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={closeMobileMenu}
          />

          <div
            className={`absolute top-0 right-0 h-screen w-[85vw] max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
              <Image
                className="w-12 h-auto"
                src="/images/logo.png"
                alt="logo"
                width={60}
                height={60}
                priority
              />
            </Link>
            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="p-4 overflow-y-auto h-[calc(100vh-80px)]">
            <div className="space-y-2">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-base font-medium hover:bg-blue-50 rounded-lg transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about-us"
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-base font-medium hover:bg-blue-50 rounded-lg transition-colors"
              >
                About Us
              </Link>

              {/* Mobile Services & Products */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 text-base font-medium hover:bg-blue-50 rounded-lg"
                >
                  Services & Products
                  <svg
                    className={`w-5 h-5 transform transition-transform duration-200 ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <div
                  className={`mt-2 space-y-2 pl-8 ${
                    mobileServicesOpen ? "block" : "hidden"
                  }`}
                >
                  <Link
                    href="/services/mutual-funds"
                    onClick={closeMobileMenu}
                    className="block py-2 text-gray-600 hover:text-blue-600"
                  >
                    Mutual Funds
                  </Link>
                  <Link
                    href="/services/retirement-planning"
                    onClick={closeMobileMenu}
                    className="block py-2 text-gray-600 hover:text-blue-600"
                  >
                    Retirement Planning
                  </Link>
                  <Link
                    href="/services/tax-planning"
                    onClick={closeMobileMenu}
                    className="block py-2 text-gray-600 hover:text-blue-600"
                  >
                    Tax Planning
                  </Link>
                  <Link
                    href="/services/pms"
                    onClick={closeMobileMenu}
                    className="block py-2 text-gray-600 hover:text-blue-600"
                  >
                    Portfolio Management (PMS)
                  </Link>
                  <Link
                    href="/services/life-insurance"
                    onClick={closeMobileMenu}
                    className="block py-2 text-gray-600 hover:text-blue-600"
                  >
                    Life Insurance
                  </Link>
                  <Link
                    href="/services/health-insurance"
                    onClick={closeMobileMenu}
                    className="block py-2 text-gray-600 hover:text-blue-600"
                  >
                    Health Insurance
                  </Link>
                  <Link
                    href="/services/motor-insurance"
                    onClick={closeMobileMenu}
                    className="block py-2 text-gray-600 hover:text-blue-600"
                  >
                    Motor Insurance
                  </Link>
                  <Link
                    href="/services/general-insurance"
                    onClick={closeMobileMenu}
                    className="block py-2 text-gray-600 hover:text-blue-600"
                  >
                    General Insurance
                  </Link>
                  <Link
                    href="/services/pan-card"
                    onClick={closeMobileMenu}
                    className="block py-2 text-gray-600 hover:text-blue-600"
                  >
                    PAN Card
                  </Link>
                  <Link
                    href="/services/passport"
                    onClick={closeMobileMenu}
                    className="block py-2 text-gray-600 hover:text-blue-600"
                  >
                    Passport
                  </Link>
                </div>
              </div>

              <Link
                href="/blogs"
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-base font-medium hover:bg-blue-50 rounded-lg transition-colors"
              >
                Blogs
              </Link>

              <div className="pt-4">
                <Link
                  href="/contact-us"
                  onClick={closeMobileMenu}
                  className="block w-full text-center font-medium text-base bg-theme1 hover:opacity-95 text-white px-6 py-3 rounded-lg"
                >
                  Contact now
                </Link>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
