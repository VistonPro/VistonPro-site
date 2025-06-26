import React from "react";
import { Link, useLocation } from "react-router-dom";

const PlaceholderPage = ({ title, description }) => {
  const location = useLocation();
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Tools", path: "/tools" },
    { label: "Shop", path: "/shop" },
    { label: "Training", path: "/training" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-gray-800">
      <nav className="bg-white shadow p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-lg font-bold text-indigo-700">VistonPro</Link>
          <div className="hidden md:flex space-x-6">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`hover:text-indigo-600 transition font-medium ${
                  location.pathname === link.path
                    ? "text-indigo-700 font-semibold"
                    : "text-gray-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl font-bold text-indigo-700 mb-4">{title}</h1>
        <p className="text-lg text-gray-600 mb-8">{description}</p>
        <Link
          to="/"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Back to Homepage
        </Link>
      </main>
    </div>
  );
};

export const ShopPage = () => (
  <PlaceholderPage
    title="VistonPro Shop"
    description="Browse marketing templates, real estate bundles, and brand kits. Coming soon!"
  />
);

export const TrainingPage = () => (
  <PlaceholderPage
    title="Continuing Education"
    description="Online CEU training for real estate professionals — available soon in TX, CA, FL, NY and more."
  />
);
