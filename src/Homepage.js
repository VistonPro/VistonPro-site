import React from "react";

const Homepage = () => {
  return (
    <div className="bg-white min-h-screen text-gray-800">
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to VistonPro</h1>
        <p className="text-xl">Smarter tools and training for real estate and finance professionals</p>
        <a
          href="/tools"
          className="inline-block mt-6 bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100"
        >
          Try Our Tools</a>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16">
        <section className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <img src="https://img.icons8.com/ios-filled/100/briefcase.png" alt="Calculator" className="mx-auto mb-4 w-16" />
            <h2 className="text-xl font-bold mb-2">Closing Cost Estimator</h2>
            <p>Instant buyer estimates with built-in loan logic for VA, FHA, and more.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <img src="https://img.icons8.com/ios-filled/100/bar-chart.png" alt="Tracker" className="mx-auto mb-4 w-16" />
            <h2 className="text-xl font-bold mb-2">Sales & Commission Tracker</h2>
            <p>Visualize earnings, splits, goals and stay organized all year long.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <img src="https://img.icons8.com/ios-filled/100/mortarboard.png" alt="CEU" className="mx-auto mb-4 w-16" />
            <h2 className="text-xl font-bold mb-2">CEU Courses</h2>
            <p>Self-paced continuing education for real estate professionals in multiple states.</p>
          </div>
        </section>

        <section className="bg-blue-50 mt-24 p-10 text-center rounded-xl">
          <h3 className="text-2xl font-bold mb-3 text-blue-700">🚀 New State Certifications Coming Soon</h3>
          <p className="text-gray-700 mb-6">Sign up to be notified when CEU training is available in your state.</p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Your email address"
              className="p-3 border border-gray-300 rounded w-full sm:w-80"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
              Notify Me
            </button>
          </form>
        </section>
      </main>

      <footer className="text-center py-10 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} VistonPro. All rights reserved.
      </footer>
    </div>
  );
};

export default Homepage;
