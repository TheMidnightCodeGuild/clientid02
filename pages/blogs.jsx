"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./components/header";
import Footer from "./components/footer";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const parseJsonResponse = async (res) => {
    const text = await res.text();

    if (text.trimStart().startsWith("<")) {
      throw new Error("API returned HTML (route issue)");
    }

    try {
      return JSON.parse(text);
    } catch {
      throw new Error("Invalid JSON response");
    }
  };

  const fetchBlogs = async () => {
    try {
      const res = await fetch("/api/blogs/viewAllBlogs");
      const data = await parseJsonResponse(res);

      if (!res.ok) {
        throw new Error(data.error || "Failed to fetch blogs");
      }

      setBlogs(data.blogs || []);
    } catch (err) {
      console.error(err);
      setError(err.message);
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const formatDate = (timestamp) => {
    if (!timestamp) return "";
    const d = timestamp?.toDate ? timestamp.toDate() : new Date(timestamp);
    return d.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  if (loading) {
    return (
      <main>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <p>Loading blogs...</p>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Navbar />

      <section className="bg-[#F8F9FB] py-12 lg:py-16">
        <div className="max-w-[1300px] mx-auto px-4">
          <h1 className="text-3xl lg:text-4xl font-semibold text-center mb-10">
            Blogs
          </h1>

          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-lg">
              {error}
            </div>
          )}

          {blogs.length === 0 ? (
            <div className="text-center text-gray-500 py-12">
              No blogs found.
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((blog) => (
                <div
                  key={blog.blogId}
                  className="bg-white rounded-2xl shadow-sm border overflow-hidden hover:shadow-md transition"
                >
                  {/* Image */}
                  {blog.imageUrl ? (
                    <img
                      src={blog.imageUrl}
                      alt={blog.title}
                      className="w-full h-48 object-cover"
                      onError={(e) =>
                        (e.target.src = "/fallback.png")
                      }
                    />
                  ) : (
                    <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                      No Image
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="font-semibold text-lg line-clamp-2">
                      {blog.title}
                    </h3>

                    <p className="text-indigo-600 text-sm mt-1 line-clamp-1">
                      {blog.subtitle}
                    </p>

                    <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                      {blog.content}
                    </p>

                    {blog.createdAt && (
                      <p className="text-xs text-gray-400 mt-3">
                        {formatDate(blog.createdAt)}
                      </p>
                    )}
                  </div>
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

export default Blogs;