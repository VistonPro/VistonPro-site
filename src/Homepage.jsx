
import React from "react";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 text-gray-800">
      <header className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white py-20 px-4 text-center shadow-lg">
        <h1 className="text-5xl font-extrabold mb-4">VistonPro</h1>
        <p className="text-xl opacity-90 max-w-2xl mx-auto">
          Powerful tools and continuing education for real estate professionals, brokers, and lenders.
        </p>
        <a
          href="#tools"
          className="inline-block mt-8 px-8 py-3 bg-white text-indigo-700 font-semibold rounded-full shadow hover:scale-105 transition-transform"
        >
          Explore Free Tools
        </a>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-20">
        <section id="tools" className="grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: "💼",
              title: "Closing Cost Calculator",
              desc: "Estimate buyer costs in seconds with VA, FHA, and title logic built in.",
            },
            {
              icon: "📊",
              title: "Sales & Commission Tracker",
              desc: "Track income, splits, and goals. Built for agents and teams.",
            },
            {
              icon: "🎓",
              title: "CEU Training",
              desc: "Approved online courses for state CE requirements.",
            },
          ].map((card, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-3">{card.icon}</div>
              <h2 className="text-xl font-bold mb-2">{card.title}</h2>
              <p className="text-gray-600">{card.desc}</p>
            </div>
          ))}
        </section>

        <section className="bg-white mt-24 text-center py-16 px-6 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-extrabold mb-4 text-indigo-800">🚀 CEU Expansion Coming Soon</h2>
          <p className="text-lg text-gray-700 mb-6 max-w-xl mx-auto">
            We’re expanding to support CEU licensing in TX, CA, FL, NY and more. Join our early access list.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-96 px-4 py-3 border border-gray-300 rounded-lg"
            />
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
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
