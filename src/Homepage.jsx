import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Homepage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Tools", path: "/tools" },
    { label: "Shop", path: "/shop" },
    { label: "Training", path: "/training" },
    { label: "Pro Tools", path: "/pro-tools" },
  ];

  const cards = [
    {
      icon: "💼",
      title: "Closing Cost Calculator",
      desc: "Estimate buyer costs in seconds with VA, FHA, and title logic built in.",
      link: "/tools",
    },
    {
      icon: "📊",
      title: "Sales & Commission Tracker",
      desc: "Track income, splits, and production goals with ease.",
      link: "/tools",
    },
    {
      icon: "🎓",
      title: "CEU Training (State Approved)",
      desc: "Complete your continuing education online at your pace.",
      link: "/training",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-rose-50 text-gray-800">
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
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden px-4 pt-4 pb-2 space-y-2">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className="block text-gray-700 hover:text-rose-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <header className="bg-gradient-to-r from-indigo-700 to-rose-600 text-white py-20 px-4 text-center shadow-lg">
        <h1 className="text-5xl font-extrabold mb-4">VISTONPRO</h1>
        <p className="text-xl opacity-90 max-w-2xl mx-auto">
          Tools, training, and premium resources for real estate professionals, brokers, and lenders.
        </p>
        <Link
          to="/tools"
          className="inline-block mt-8 px-8 py-3 bg-white text-indigo-700 font-semibold rounded-full shadow hover:scale-105 transition-transform"
        >
          Explore Free Tools
        </Link>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-20">
        <section className="grid md:grid-cols-3 gap-10 text-center">
          {cards.map((card, i) => (
            <Link
              to={card.link}
              key={i}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition block text-left"
            >
              <div className="text-4xl mb-3">{card.icon}</div>
              <h2 className="text-xl font-bold mb-2">{card.title}</h2>
              <p className="text-gray-600">{card.desc}</p>
            </Link>
          ))}
        </section>

        {/* ✅ Pro Tool Callout */}
        <section className="mt-24 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-indigo-700 mb-4">
            Unlock the Pro Closing Cost Tool
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Advanced VA/FHA logic, title fees, export-ready output. One-time payment, lifetime access — no subscription.
          </p>
          <Link
            to="/pro-tools"
            className="inline-block bg-rose-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-rose-700 transition"
          >
            Buy Now for $99
          </Link>
        </section>

        <section className="bg-white mt-24 text-center py-16 px-6 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-extrabold mb-4 text-indigo-800">🚀 CEU Expansion Coming Soon</h2>
          <p className="text-gray-700 text-lg mb-6 max-w-xl mx-auto">
            We’re expanding to support CE requirements in TX, FL, CA, NY and more. Be first to know.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email to get early access"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              Notify Me
            </button>
          </form>
        </section>
      </main>

      <footer className="bg-slate-800 text-white text-center text-sm py-6 mt-24">
        &copy; {new Date().getFullYear()} VISTONPRO. All rights reserved.
      </footer>
    </div>
  );
};

export default Homepage;
