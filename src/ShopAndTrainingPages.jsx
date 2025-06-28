import React from "react";
import { Link, useLocation } from "react-router-dom";

export const ShopPage = () => {
  const location = useLocation();
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Tools", path: "/tools" },
    { label: "Shop", path: "/shop" },
    { label: "Training", path: "/training" },
  ];

  const products = [
    {
      title: "Social Media Kit",
      price: "$10",
      description: "Customizable Instagram posts and stories for real estate marketing.",
      icon: "📱",
    },
    {
      title: "Listing Flyer Template",
      price: "$5",
      description: "Editable flyer template for open houses and new listings.",
      icon: "📄",
    },
    {
      title: "Postcard Bundle",
      price: "$8",
      description: "High-impact postcard templates for just listed & sold.",
      icon: "✉️",
    }
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
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-10">Shop Marketing Templates</h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Download editable templates and marketing assets to stand out, grow your business, and win more listings.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-xl shadow p-6 hover:shadow-xl transition">
              <div className="text-4xl mb-4">{product.icon}</div>
              <h2 className="text-xl font-bold mb-1">{product.title}</h2>
              <span className="inline-block text-sm text-white bg-indigo-600 px-3 py-1 rounded-full mb-2">{product.price}</span>
              <p className="text-gray-600 text-sm">{product.description}</p>
            </div>
          ))}
        </div>

        <Link
          to="/"
          className="inline-block mt-12 bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-indigo-700 transition"
        >
          ← Back to Homepage
        </Link>
      </main>

      <footer className="bg-slate-800 text-white text-center text-sm py-6 mt-24">
        &copy; {new Date().getFullYear()} VistonPro. All rights reserved.
      </footer>
    </div>
  );
};

export const TrainingPage = () => {
  const location = useLocation();
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Tools", path: "/tools" },
    { label: "Shop", path: "/shop" },
    { label: "Training", path: "/training" },
  ];

  const courses = [
    {
      title: "Fair Housing 101",
      hours: "2 Hours",
      description: "Understand the essentials of Fair Housing laws and compliance.",
      icon: "🏠",
      link: "https://stephanie-s-site-3116.thinkific.com/courses/fair-housing-101"
    },
    {
      title: "Required Disclosures",
      hours: "2 Hours",
      description: "Learn how to properly manage licensee disclosures and risk.",
      icon: "📑",
      link: "https://stephanie-s-site-3116.thinkific.com/courses/required-disclosures"
    },
    {
      title: "Environmental Issues & Land Use",
      hours: "2 Hours",
      description: "Stay current with land use and environmental responsibilities.",
      icon: "🌿",
      link: "https://stephanie-s-site-3116.thinkific.com/courses/take/Environmental-Issues-Land-Use/lessons/58645797-introduction"
    }
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
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-10">Continuing Education</h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Complete your required CEU hours online. Flexible, affordable, and state-compliant.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {courses.map((course, index) => (
            <a
              key={index}
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow p-6 hover:shadow-xl transition block"
            >
              <div className="text-4xl mb-4">{course.icon}</div>
              <h2 className="text-xl font-bold mb-1">{course.title}</h2>
              <span className="inline-block text-sm text-white bg-indigo-600 px-3 py-1 rounded-full mb-2">{course.hours}</span>
              <p className="text-gray-600 text-sm">{course.description}</p>
            </a>
          ))}
        </div>

        <Link
          to="/"
          className="inline-block mt-12 bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-indigo-700 transition"
        >
          ← Back to Homepage
        </Link>
      </main>

      <footer className="bg-slate-800 text-white text-center text-sm py-6 mt-24">
        &copy; {new Date().getFullYear()} VistonPro. All rights reserved.
      </footer>
    </div>
  );
};
