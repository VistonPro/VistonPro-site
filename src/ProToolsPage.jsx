import React from "react";
import { Link, useLocation } from "react-router-dom";
import ProCalculator from "./ProCalculator"; // Adjust path if needed!

const ProToolsPage = () => {
  const location = useLocation();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Tools", path: "/tools" },
    { label: "Shop", path: "/shop" },
    { label: "Training", path: "/training" },
    { label: "Pro Tools", path: "/pro-tools" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-rose-50 text-gray-800">
      {/* ✅ Nav */}
      <nav className="bg-white shadow p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            to="/"
            className="text-2xl font-extrabold text-indigo-600 tracking-tight"
          >
            VISTON<span className="text-rose-600">PRO</span>
          </Link>
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`hover:text-rose-600 transition font-medium ${
                  location.pathname === link.path
                    ? "text-rose-600 font-semibold"
                    : "text-gray-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* ✅ Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-4 text-center">
          Pro Closing Cost Tool
        </h1>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Use this advanced closing cost calculator for accurate buyer & seller
          estimates. Just enter your sales price, choose your fee type, and let
          the tool handle the math — VA, FHA, title fees, and more.
        </p>

        {/* ✅ If you want a Buy Now CTA, keep this — optional */}
        <div className="flex justify-center mb-12">
          <a
            href="YOUR_STRIPE_LINK_HERE"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-rose-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-rose-700 transition"
          >
            Buy Now – $99 One-Time
          </a>
        </div>

        {/* ✅ Your React Calculator */}
        <section className="mb-12">
          <ProCalculator />
        </section>

        {/* ✅ Back to Home */}
        <div className="text-center mt-12">
          <Link
            to="/"
            className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-indigo-700 transition"
          >
            ← Back to Homepage
          </Link>
        </div>
      </main>

      {/* ✅ Footer */}
      <footer className="bg-slate-800 text-white text-center text-sm py-6 mt-24">
        &copy; {new Date().getFullYear()} VistonPro. All rights reserved.
      </footer>
    </div>
  );
};

export default ProToolsPage;


