import React from "react";

const Homepage = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to VistonPro</h1>
        <p className="text-lg text-gray-600">
          Smart tools and continuing education for real estate, mortgage, and insurance professionals.
        </p>
        <div className="mt-6">
          <a
            href="/tools"
            className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700"
          >
            Explore Free Tools
          </a>
        </div>
      </header>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Trusted by Real Estate Professionals Nationwide</h2>
        <p className="text-gray-700 mb-6">
          VistonPro offers powerful digital tools and accredited CEU training to help you stay licensed and grow your business.
        </p>
        <ul className="grid md:grid-cols-3 gap-6">
          <li className="p-4 border rounded shadow">
            <h3 className="font-bold mb-2">💼 Closing Cost Calculator</h3>
            <p>Estimate buyer costs in seconds with built-in VA, FHA, and title logic.</p>
          </li>
          <li className="p-4 border rounded shadow">
            <h3 className="font-bold mb-2">📈 Sales & Commission Tracker</h3>
            <p>Stay on top of your earnings, splits, and production goals.</p>
          </li>
          <li className="p-4 border rounded shadow">
            <h3 className="font-bold mb-2">🎓 CEU Training (State Approved)</h3>
            <p>Complete your required hours with easy-to-follow, self-paced courses.</p>
          </li>
        </ul>
      </section>

      <section className="bg-gray-100 p-8 rounded">
        <h2 className="text-2xl font-semibold mb-4 text-center">Coming Soon: Multi-State CEU Training</h2>
        <p className="text-center mb-6 text-gray-700">
          We're expanding to support CE requirements in TX, FL, CA, NY and more.
        </p>
        <form className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email to get early access"
            className="flex-1 p-3 border rounded"
          />
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
            Notify Me
          </button>
        </form>
      </section>
    </div>
  );
};

export default Homepage;
