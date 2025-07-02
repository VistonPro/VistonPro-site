import React, { useState } from "react";

export default function ClosingCostApp() {
  // === Deal Info ===
  const [preparedFor, setPreparedFor] = useState("");
  const [agentName, setAgentName] = useState("");
  const [company, setCompany] = useState("");
  const [date, setDate] = useState("");

  const [loanType, setLoanType] = useState("");
  const [salesPrice, setSalesPrice] = useState(250000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(0);
  const [interestRate, setInterestRate] = useState(6.5);
  const [termYears, setTermYears] = useState(30);
  const [annualTaxes, setAnnualTaxes] = useState(2500);
  const [annualInsurance, setAnnualInsurance] = useState(1200);

  const [vaFeePercent, setVaFeePercent] = useState(0);
  const [fhaFeePercent, setFhaFeePercent] = useState(0);

  const [taxMonths, setTaxMonths] = useState(0);
  const [insuranceMonths, setInsuranceMonths] = useState(0);
  const [prepaidDays, setPrepaidDays] = useState(0);
  const [reserves, setReserves] = useState(0);

  const titleInsuranceChart = [
    { price: 50000, owner: 382, lender: 189.75 },
    { price: 100000, owner: 582, lender: 250 },
    { price: 200000, owner: 882, lender: 339.75 },
    { price: 300000, owner: 1182, lender: 429.75 },
    { price: 400000, owner: 1482, lender: 519.75 },
    { price: 500000, owner: 1782, lender: 609.75 },
  ];

  const downPayment = salesPrice * (downPaymentPercent / 100);
  const vaFundingFee = loanType === "VA" ? salesPrice * (vaFeePercent / 100) : 0;
  const fhaMortgageIns = loanType === "FHA" ? salesPrice * (fhaFeePercent / 100) : 0;
  const loanAmount = salesPrice - downPayment + vaFundingFee + fhaMortgageIns;

  const pmt = (rate, nper, pv) => {
    const r = rate / 12 / 100;
    return (r * -pv) / (1 - Math.pow(1 + r, -nper));
  };
  const principalAndInterest = Math.round(Math.abs(pmt(interestRate, termYears * 12, loanAmount)));
  const mortgageInsurance = Math.round(
    downPaymentPercent < 5 ? 0.011 * loanAmount / 12 :
    downPaymentPercent < 10 ? 0.0071 * loanAmount / 12 :
    downPaymentPercent < 15 ? 0.0054 * loanAmount / 12 :
    downPaymentPercent < 20 ? 0.0039 * loanAmount / 12 : 0
  );
  const monthlyInsurance = Math.round(annualInsurance / 12);
  const monthlyTaxes = Math.round(annualTaxes / 12);
  const dailyInterest = (loanAmount * (interestRate / 100)) / 365;
  const monthlyPayment = principalAndInterest + mortgageInsurance + monthlyInsurance + monthlyTaxes;

  const [fees, setFees] = useState([
    { type: "Custom", desc: "Custom Fee", cost: 0, paidBy: "Buyer" },
  ]);

  const commonFeeTypes = [
    "Custom",
    "Owner Title Insurance",
    "Lender Title Insurance",
    "Escrow Fees",
    "Loan Origination Fee",
    "Commitment Fee AHFC .25%",
    "Discount Points",
    "Credit Report",
    "Appraisal Fee",
    "Collection Setup",
    "Tax Service Fee",
    "Flood Cert Fee",
    "Document Prep Fee",
    "Notary Fee",
    "Processing Fee",
    "Buyer Credit"
  ];

  const getTitleInsurance = (price, type) => {
    let match = titleInsuranceChart[0];
    for (let i = 1; i < titleInsuranceChart.length; i++) {
      if (titleInsuranceChart[i].price <= price) {
        match = titleInsuranceChart[i];
      } else {
        break;
      }
    }
    return type === "Owner Title Insurance" ? match.owner : match.lender;
  };

  const getEscrowFee = (price) => price > 27999 ? (price / 1000) * 1.25 + 263 : 263;

  const updateFee = (index, field, value) => {
    const updated = [...fees];
    updated[index][field] = value;

    if (field === "type") {
      updated[index].desc = value;
      if (value === "Owner Title Insurance") {
        updated[index].cost = getTitleInsurance(salesPrice, "Owner Title Insurance");
      } else if (value === "Lender Title Insurance") {
        updated[index].cost = getTitleInsurance(salesPrice, "Lender Title Insurance");
      } else if (value === "Escrow Fees") {
        updated[index].cost = getEscrowFee(salesPrice);
      } else if (value === "Loan Origination Fee") {
        updated[index].cost = loanAmount * 0.01;
      } else if (value === "Commitment Fee AHFC .25%") {
        updated[index].cost = loanAmount * 0.0025;
      } else {
        updated[index].cost = 0;
      }
    }
    if (field === "cost") {
      updated[index].cost = parseFloat(value) || 0;
    }
    setFees(updated);
  };

  const addFee = () => setFees([...fees, { type: "Custom", desc: "Custom Fee", cost: 0, paidBy: "Buyer" }]);
  const removeFee = (index) => setFees(fees.filter((_, i) => i !== index));

  const getBuyerSellerAmounts = (fee) => {
    if (fee.type === "Buyer Credit") return [-fee.cost, 0];
    if (fee.paidBy === "Buyer") return [fee.cost, 0];
    if (fee.paidBy === "Seller") return [0, fee.cost];
    if (fee.paidBy === "Split") return [fee.cost / 2, fee.cost / 2];
    return [0, 0];
  };

  const totalBuyerCosts = fees.reduce((sum, fee) => sum + getBuyerSellerAmounts(fee)[0], 0);
  const totalSellerCosts = fees.reduce((sum, fee) => sum + getBuyerSellerAmounts(fee)[1], 0);

  const upfrontMI = loanType === "FHA" ? salesPrice * 0.0175 : 0;
  const prepaidTaxes = taxMonths * monthlyTaxes;
  const prepaidInsurance = insuranceMonths * monthlyInsurance;
  const prepaidInterest = prepaidDays * dailyInterest;
  const prepaidTotal = upfrontMI + prepaidTaxes + prepaidInsurance + prepaidInterest + parseFloat(reserves || 0);

  const totalToClose = downPayment + totalBuyerCosts + prepaidTotal;

  return (
    <div id="print-area" className="max-w-5xl mx-auto p-8 bg-white rounded shadow">
      <h1 className="text-3xl font-bold mb-4 text-indigo-700">Closing Cost Estimate</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label>Prepared For</label>
          <input value={preparedFor} onChange={e => setPreparedFor(e.target.value)} className="w-full border p-2 mb-2" />
          <label>Agent Name</label>
          <input value={agentName} onChange={e => setAgentName(e.target.value)} className="w-full border p-2 mb-2" />
          <label>Company</label>
          <input value={company} onChange={e => setCompany(e.target.value)} className="w-full border p-2 mb-2" />
          <label>Date</label>
          <input type="date" value={date} onChange={e => setDate(e.target.value)} className="w-full border p-2 mb-2" />
        </div>

        <div>
          <label>Loan Type</label>
          <select value={loanType} onChange={e => setLoanType(e.target.value)} className="w-full border p-2 mb-2">
            <option value="">-- Select Loan Type --</option>
            <option value="VA">VA</option>
            <option value="FHA">FHA</option>
            <option value="Conventional">Conventional</option>
            <option value="USDA">USDA</option>
          </select>

          {loanType === "VA" && (
            <>
              <label>VA Funding Fee %</label>
              <select value={vaFeePercent} onChange={e => setVaFeePercent(parseFloat(e.target.value))} className="w-full border p-2 mb-2">
                <option value="0">-- Select VA Funding Fee --</option>
                <option value="2.3">2.3%</option>
                <option value="3.6">3.6%</option>
                <option value="1.65">1.65%</option>
              </select>
            </>
          )}

          {loanType === "FHA" && (
            <>
              <label>FHA Mortgage INS %</label>
              <select value={fhaFeePercent} onChange={e => setFhaFeePercent(parseFloat(e.target.value))} className="w-full border p-2 mb-2">
                <option value="0">None</option>
                <option value="1.75">1.75%</option>
              </select>
            </>
          )}

          <label>Sales Price</label>
          <input type="number" value={salesPrice} onChange={e => setSalesPrice(parseFloat(e.target.value) || 0)} className="w-full border p-2 mb-2" />
          <label>Down Payment %</label>
          <input type="number" value={downPaymentPercent} onChange={e => setDownPaymentPercent(parseFloat(e.target.value) || 0)} className="w-full border p-2 mb-2" />
          <label>Interest Rate %</label>
          <input type="number" value={interestRate} onChange={e => setInterestRate(parseFloat(e.target.value) || 0)} className="w-full border p-2 mb-2" />
          <label>Term (Years)</label>
          <input type="number" value={termYears} onChange={e => setTermYears(parseInt(e.target.value) || 0)} className="w-full border p-2 mb-2" />
          <label>Annual Taxes</label>
          <input type="number" value={annualTaxes} onChange={e => setAnnualTaxes(parseFloat(e.target.value) || 0)} className="w-full border p-2 mb-2" />
          <label>Annual Hazard Insurance</label>
          <input type="number" value={annualInsurance} onChange={e => setAnnualInsurance(parseFloat(e.target.value) || 0)} className="w-full border p-2 mb-2" />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div><strong>Loan Amount:</strong> ${loanAmount.toFixed(2)}</div>
        <div><strong>Principal & Interest:</strong> ${principalAndInterest}</div>
        <div><strong>MI:</strong> ${mortgageInsurance}</div>
        <div><strong>Monthly Payment:</strong> ${monthlyPayment}</div>
      </div>

      <h2 className="text-xl font-bold mb-2 mt-8">Fee Table</h2>
      {fees.map((fee, idx) => (
        <div key={idx} className="flex gap-2 mb-2 items-center">
          <select value={fee.type} onChange={e => updateFee(idx, "type", e.target.value)} className="border p-2">
            {commonFeeTypes.map(type => <option key={type}>{type}</option>)}
          </select>
          <input value={fee.desc} onChange={e => updateFee(idx, "desc", e.target.value)} className="flex-1 border p-2" />
          <input type="number" value={fee.cost} onChange={e => updateFee(idx, "cost", e.target.value)} className="w-24 border p-2" />
          <select value={fee.paidBy} onChange={e => updateFee(idx, "paidBy", e.target.value)} className="border p-2">
            <option>Buyer</option>
            <option>Seller</option>
            <option>Split</option>
          </select>
          <div className="w-24">Buyer: ${getBuyerSellerAmounts(fee)[0].toFixed(2)}</div>
          <div className="w-24">Seller: ${getBuyerSellerAmounts(fee)[1].toFixed(2)}</div>
          <button onClick={() => removeFee(idx)} className="text-red-600 font-bold ml-2">✕</button>
        </div>
      ))}
      <button onClick={addFee} className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 mt-4">+ Add Fee</button>

      <div className="text-right font-bold mt-2">
        Closing Costs Total: ${totalBuyerCosts.toFixed(2)}
      </div>

      <div className="my-6">
        <h2 className="text-xl font-bold mb-2">Prepaids</h2>
        <label>Upfront MI (FHA only): ${upfrontMI.toFixed(2)}</label><br />
        <label>Taxes (Months)</label>
        <select value={taxMonths} onChange={e => setTaxMonths(parseInt(e.target.value))} className="border p-2 mb-2 ml-2">
          {[...Array(13).keys()].map(n => <option key={n} value={n}>{n}</option>)}
        </select>
        <div>Prepaid Taxes: ${prepaidTaxes.toFixed(2)}</div>

        <label>Insurance (Months)</label>
        <select value={insuranceMonths} onChange={e => setInsuranceMonths(parseInt(e.target.value))} className="border p-2 mb-2 ml-2">
          {[...Array(13).keys()].map(n => <option key={n} value={n}>{n}</option>)}
        </select>
        <div>Prepaid Insurance: ${prepaidInsurance.toFixed(2)}</div>

        <label>Prepaid Interest (Days)</label>
        <select value={prepaidDays} onChange={e => setPrepaidDays(parseInt(e.target.value))} className="border p-2 mb-2 ml-2">
          {[...Array(32).keys()].slice(1).map(n => <option key={n} value={n}>{n}</option>)}
        </select>
        <div>Prepaid Interest: ${prepaidInterest.toFixed(2)}</div>

        <label>Reserves</label>
        <input type="number" value={reserves} onChange={e => setReserves(parseFloat(e.target.value) || 0)} className="border p-2 mb-2 ml-2" />

        <div className="text-right font-bold mt-2">
          Prepaids Total: ${prepaidTotal.toFixed(2)}
        </div>
      </div>

      <div className="p-4 bg-indigo-50 rounded">
        <h2 className="text-xl font-bold mb-2">Summary</h2>
        <div>Buyer Closing Costs: ${totalBuyerCosts.toFixed(2)}</div>
        <div>Seller Closing Costs: ${totalSellerCosts.toFixed(2)}</div>
        <div>Prepaids: ${prepaidTotal.toFixed(2)}</div>
        <div>Down Payment: ${downPayment.toFixed(2)}</div>
        <div className="text-lg font-bold mt-2">Total to Close: ${totalToClose.toFixed(2)}</div>
      </div>

      <button onClick={() => window.print()} className="bg-rose-600 text-white px-6 py-3 rounded mt-6 hover:bg-rose-700 print:hidden">
        Print or Save as PDF
      </button>
    </div>
  );
}
