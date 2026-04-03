import React, { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "./components/header";
import Footer from "./components/footer";
import Link from "next/link";
const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("/api/images/viewAllImages");
        const text = await res.text();

        if (text.trimStart().startsWith("<")) {
          throw new Error("API route error (returned HTML)");
        }

        const data = JSON.parse(text);

        if (!res.ok) {
          throw new Error(data.error || "Failed to fetch images");
        }

        const formattedImages = (data.images || []).map((url) => ({
          url,
          name: url.split("/").pop(),
        }));

        setImages(formattedImages);
      } catch (error) {
        console.error("Error fetching images:", error);
        setImages([]);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return (
      <main className="font-dm">
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <p>Loading images...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="font-dm">
      <Head>
        <title>Gallery | Shagun Shri Investment</title>
        <meta
          name="description"
          content="Explore the gallery of Shagun Shri Investment — glimpse our events, client milestones, and financial advisory journey through our curated photo collection."
        />
      </Head>
      <Navbar />
      <section
        className="bg-cover h-[400px] md:h-[450px] lg:h-[500px] flex items-center justify-center flex-col relative font-dm"
        style={{ backgroundImage: "url('/images/home.png')" }}
      >
        <div className="absolute inset-0 bg-gray-800/50"></div>
        <div className="lg:max-w-[1300px] mx-auto px-4 flex items-center justify-center flex-col w-full gap-3 relative z-10 text-center">
          <h1 className="font-lexend text-3xl lg:text-5xl text-left text-white font-bold">
            Our Gallery
          </h1>
          <p className="text-white text-sm font-medium lg:text-base max-w-xl">
            A glimpse into our journey — from client milestones and financial
            workshops to team moments that reflect our commitment to trust,
            transparency, and long-term financial partnerships.
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
        <div className="max-w-[1300px] mx-auto px-4 lg:px-6">
          {images.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              No images found.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="group relative aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={img.url}
                    alt={img.name}
                    onError={(e) => (e.target.src = "/fallback.png")}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Gallery;
