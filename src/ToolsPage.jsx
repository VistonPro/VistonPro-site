import React from "react";
import { Link, useLocation } from "react-router-dom";

const ToolsPage = () => {
  const location = useLocation();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Tools", path: "/tools" },
    { label: "Shop", path: "/shop" },
    { label: "Training", path: "/training" },
    { label: "Pro Tools", path: "/pro-tools" },
  ];

  const tools = [
    {
      title: "Closing Cost Calculator",
      status: "Beta",
      description: "Estimate buyer costs with VA, FHA, and local title logic.",
      icon: "💼",
      link: "/tools"
    },
    {
      title: "Sales & Commission Tracker",
      status: "Coming Soon",
      description: "Track GCI, splits, income goals, and year-to-date progress.",
      icon: "📊",
      link: "/tools"
    },
    {
      title: "Custom Marketing Templates",
      status: "$5+",
      description: "Editable Canva templates for flyers, postcards, social kits.",
      icon: "🎨",
      link: "/shop"
    },
    {
      title: "Pro Closing Cost Tool",
      status: "$99",
      description: "Unlock advanced estimates with VA/FHA, title fees, print-ready output.",
      icon: "🔒",
      link: "/pro-tools"
    }
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
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-10">Tools + Templates for Real Estate Pros</h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Explore free tools and premium downloads for agents, brokers, and lenders. Built to save you time and elevate your brand.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <Link
              to={tool.link}
              key={index}
              className="bg-white rounded-xl shadow p-6 hover:shadow-xl transition block text-left"
            >
              <div className="text-4xl mb-4">{tool.icon}</div>
              <h2 className="text-xl font-bold mb-1">{tool.title}</h2>
              <span className="inline-block text-sm text-white bg-indigo-600 px-3 py-1 rounded-full mb-2">
                {tool.status}
              </span>
              <p className="text-gray-600 text-sm">{tool.description}</p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/"
            className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-indigo-700 transition"
          >
            ← Back to Homepage
          </Link>
        </div>
      </main>

      <footer className="bg-slate-800 text-white text-center text-sm py-6 mt-24">
        &copy; {new Date().getFullYear()} VistonPro. All rights reserved.
      </footer>
    </div>
  );
};

export default ToolsPage;

