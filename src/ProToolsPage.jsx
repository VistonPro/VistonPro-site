import React from "react";
import { Link, useLocation } from "react-router-dom";

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
      {/* Nav */}
      <nav className="bg-white shadow p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-extrabold text-indigo-600 tracking-tight">
            VISTON<span className="text-rose-600">PRO</span>
          </Link>
          <div className="hidden md:flex space-x-6">
            {navLinks.map(link => (
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

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-4 text-center">
          Pro Closing Cost Calculator
        </h1>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Unlock this advanced tool for accurate buyer & seller closing costs.
          Includes local title fee logic, VA/FHA built in, and export-ready output.
          Lifetime access — one-time payment.
        </p>

        <div className="flex justify-center mb-12">
          <a
            href="YOUR_STRIPE_PAYMENT_LINK_HERE"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-rose-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-rose-700 transition"
          >
            Buy Now – $99 One-Time
          </a>
        </div>

        {/* Polished Embed Section */}
        <section className="bg-white rounded-xl shadow p-6 mb-12">
          <h2 className="text-2xl font-bold text-indigo-700 mb-2">Your Closing Cost Tool</h2>
          <p className="text-gray-600 mb-4">
            Fill in your deal details below. All calculations update automatically —
            perfect for VA/FHA, custom title fees, and ready-to-print output.
          </p>
          <div className="border-2 border-gray-200 rounded overflow-hidden">
            <iframe
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTNtBDlH3Po-WRbl_ykJ1tgrz3JCsEIuWrI0zSdutnvEXkx1pL8kIX00JZI02W8o9ijvI7WKNm3LzNE/pubhtml?widget=true&amp;headers=false"
              width="100%"
              height="800"
              className="w-full"
              title="Pro Closing Cost Calculator"
            ></iframe>
          </div>
        </section>

        <div className="text-center">
          <Link
            to="/"
            className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-indigo-700 transition"
          >
            ← Back to Homepage
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-white text-center text-sm py-6 mt-24">
        &copy; {new Date().getFullYear()} VistonPro. All rights reserved.
      </footer>
    </div>
  );
};

export default ProToolsPage;

