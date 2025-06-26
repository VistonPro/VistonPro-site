import React from "react";

const ToolsPage = () => {
  const tools = [
    {
      title: "Closing Cost Calculator",
      status: "Beta",
      description: "Estimate buyer costs with VA, FHA, and local title logic.",
      icon: "💼",
    },
    {
      title: "Sales & Commission Tracker",
      status: "Coming Soon",
      description: "Track GCI, splits, income goals, and year-to-date progress.",
      icon: "📊",
    },
    {
      title: "Custom Marketing Templates",
      status: "$5+",
      description: "Editable Canva templates for flyers, postcards, social kits.",
      icon: "🎨",
    },
    {
      title: "Real Estate Bundle Kits",
      status: "Coming Soon",
      description: "Professionally-designed listing kits, buyer guides, and scripts.",
      icon: "📦",
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-gray-800 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-10">Tools + Templates for Real Estate Pros</h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Explore free tools and premium downloads for agents, brokers, and lenders. Built to save you time and elevate your brand.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div key={index} className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
              <div className="text-4xl mb-4">{tool.icon}</div>
              <h2 className="text-xl font-bold mb-1">{tool.title}</h2>
              <span className="inline-block text-sm text-white bg-indigo-500 px-3 py-1 rounded-full mb-2">{tool.status}</span>
              <p className="text-gray-600 text-sm">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolsPage;
