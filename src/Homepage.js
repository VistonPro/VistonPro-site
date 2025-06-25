import React from "react";

const Homepage = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <header className="text-center max-w-4xl mx-auto py-16">
        <h1 className="text-5xl font-extrabold text-blue-800 mb-6">Tools + Training for Real Estate Pros</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Empowering agents, lenders, and brokers with free calculators, CEU courses, and smart productivity tools.
        </p>
        <a
          href="/tools"
          className="inline-block mt-8 bg-blue-600 text-white text-lg px-8 py-4 rounded-full shadow hover:bg-blue-700 transition"
        >
          Explore Free Tools
        </a>
      </header>

      <section className="max-w-6xl mx-auto py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">💼 Closing Cost Calculator</h3>
            <p className="text-gray-600">Estimate buyer costs in seconds with built-in VA, FHA, and title logic.</p>
          </div>
          <div className="p-6 bg-white border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">📈 Sales & Commission Tracker</h3>
            <p className="text-gray-600">Track income, splits, and production goals with ease.</p>
          </div>
          <div className="p-6 bg-white border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">🎓 CEU Training (State Approved)</h3>
            <p className="text-gray-600">Complete your continuing education online at your pace.</p>
          </div>
        </div>
      </section>

      <section className="bg-blue-100 py-16 mt-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Coming Soon: Multi-State CEU Training</h2>
          <p className="text-gray-700 text-lg mb-6">
            We’re expanding to support CE requirements in TX, FL, CA, NY and more. Be first to know.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email to get early access"
              className="flex-1 p-3 border rounded w-full sm:w-80"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
              Notify Me
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Homepage;

