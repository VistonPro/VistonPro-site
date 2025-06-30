import React, { useState } from "react";

// 📌 Your Title Insurance Chart converted to an array of objects
const titleInsuranceChart = [
  { price: 28000, owner: 250, lender: 175 },
  { price: 29000, owner: 256, lender: 175 },
  { price: 30000, owner: 262, lender: 175 },
  // ✅ Add all your rows here...
  { price: 5000000, owner: 8657, lender: 2672.25 },
];

export default function ProCalculator() {
  const [salePrice, setSalePrice] = useState("");
  const [item, setItem] = useState("");
  const [result, setResult] = useState("");

  // 📌 Lookup logic, similar to VLOOKUP TRUE
  const getClosestMatch = (price) => {
    let closest = titleInsuranceChart[0];
    for (let i = 1; i < titleInsuranceChart.length; i++) {
      if (titleInsuranceChart[i].price <= price) {
        closest = titleInsuranceChart[i];
      } else {
        break;
      }
    }
    return closest;
  };

  const calculateFee = () => {
    const price = Number(salePrice);
    if (!price || !item) {
      setResult("");
      return;
    }

    if (item === "Owner Title Insurance") {
      const match = getClosestMatch(price);
      setResult(`$${match.owner.toFixed(2)}`);
    } else if (item === "Lender Title Insurance") {
      const match = getClosestMatch(price);
      setResult(`$${match.lender.toFixed(2)}`);
    } else if (item === "Loan Origination Fee") {
      setResult(`$${(price * 0.01).toFixed(2)}`);
    } else if (item === "Commitment Fee AHFC .25%") {
      setResult(`$${(price * 0.0025).toFixed(2)}`);
    } else if (item === "Escrow Fee") {
      const fee = price > 27999 ? (price / 1000) * 1.25 + 263 : 263;
      setResult(`$${fee.toFixed(2)}`);
    } else {
      setResult("");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-8 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Pro Closing Cost Calculator</h2>

      <label className="block mb-2 font-semibold">Sale Price:</label>
      <input
        type="number"
        value={salePrice}
        onChange={(e) => setSalePrice(e.target.value)}
        placeholder="Enter Sale Price"
        className="w-full border p-2 mb-4 rounded"
      />

      <label className="block mb-2 font-semibold">Item:</label>
      <select
        value={item}
        onChange={(e) => setItem(e.target.value)}
        className="w-full border p-2 mb-4 rounded"
      >
        <option value="">-- Select Item --</option>
        <option value="Owner Title Insurance">Owner Title Insurance</option>
        <option value="Lender Title Insurance">Lender Title Insurance</option>
        <option value="Loan Origination Fee">Loan Origination Fee</option>
        <option value="Commitment Fee AHFC .25%">Commitment Fee AHFC .25%</option>
        <option value="Escrow Fee">Escrow Fee</option>
      </select>

      <button
        onClick={calculateFee}
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
      >
        Calculate
      </button>

      {result && (
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <p className="text-lg">
            <strong>Calculated Fee:</strong> {result}
          </p>
        </div>
      )}
    </div>
  );
}
