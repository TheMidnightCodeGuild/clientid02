import React, { useState, useEffect } from "react";
import Navbar from "./components/header";
import Footer from "./components/footer";

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
      <Navbar />

      <section className="w-full bg-[#F8F9FB] py-12 lg:py-16">
        <div className="max-w-[1300px] mx-auto px-4 lg:px-6">
          <h1 className="font-sora text-3xl lg:text-4xl font-semibold mb-8 text-center">
            Gallery
          </h1>

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