import React, { useState } from "react";
import Navbar from "../../Components/User-Components/Navbar";

function Payment() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    selectedItems: [
      "Destination: Bali",
      "Vehicle: SUV",
      "Resort: Beachfront Villa",
    ],
    amount: "₹14,999", // Dynamically fetched from backend
  });

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex items-center justify-center flex-1 px-4 py-6">
        <div className="flex flex-col w-full max-w-2xl p-6 bg-white shadow-xl rounded-2xl sm:p-8">
          <h2 className="mb-2 text-2xl font-bold text-center text-gray-800 sm:text-3xl">
            Payment Details
          </h2>
          <p className="mb-6 text-center text-gray-500">
            Complete your booking securely
          </p>

          {/* Form Fields */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 sm:col-span-2"
            />
          </div>

          {/* Selected Items */}
          <div className="p-3 mt-4 bg-gray-100 rounded-lg">
            <p className="text-sm text-gray-500">Selected Items</p>
            <div className="flex flex-wrap gap-2 text-sm font-semibold text-gray-700">
              {formData.selectedItems.map((item, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-gray-200 rounded-md"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Amount */}
          <div className="p-3 mt-4 bg-gray-100 rounded-lg">
            <p className="text-sm text-gray-500">Amount</p>
            <p className="text-xl font-bold text-blue-600">{formData.amount}</p>
          </div>

          {/* Payment Button */}
          <button className="w-full py-3 mt-6 text-white transition-all duration-300 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700">
            Proceed to Pay
          </button>
        </div>
      </div>
    </div>
  );
}

export default Payment;
