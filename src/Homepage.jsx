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
  ];

  const cards = [
    {
      icon: "💼",
      title: "Closing Cost Calculator",
      desc: "Estimate buyer costs with VA, FHA, and title logic built in.",
      link: "/tools",
    },
    {
      icon: "📊",
      title: "Sales & Commission Tracker",
      desc: "Track income, splits, and goals. Built for agents and teams.",
      link: "/tools",
    },
    {
      icon: "🎓",
      title: "CEU Training",
      desc: "Approved online courses for state CE requirements.",
      link: "/training",
    },
    {
      icon: "🧰",
      title: "Marketing Templates",
      desc: "Editable real estate flyers, postcards & listing kits.",
      link: "/shop",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-rose-50 text-gray-800">
      <nav className="bg-white shadow p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-extrabold text-indigo-600 tracking-tight">VISTON<span className="text-rose-600">PRO</span></Link>
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

      <header className="bg-gradient-to-r from-indigo-600 to-rose-600 text-white py-20 px-4 text-center shadow-lg">
        <h1 className="text-5xl font-extrabold mb-4">Real Estate Tools & Templates</h1>
        <p className="text-xl opacity-90 max-w-2xl mx-auto">
          Digital calculators, CEU training, and marketing kits — all in one modern platform.
        </p>
        <Link
          to="/tools"
          className="inline-block mt-8 px-8 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow hover:scale-105 transition-transform"
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

        <section className="bg-white mt-24 text-center py-16 px-6 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-extrabold mb-4 text-indigo-700">🚀 CEU Expansion Coming Soon</h2>
          <p className="text-lg text-gray-700 mb-6 max-w-xl mx-auto">
            We’re expanding CEU support to TX, CA, FL, NY and more. Join the early access list.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
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
        &copy; {new Date().getFullYear()} VistonPro. All rights reserved.
      </footer>
    </div>
  );
};

export default Homepage;
