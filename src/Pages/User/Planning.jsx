import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/User-Components/Navbar";
import Footer from "../../Components/User-Components/Footer";
import Pln from "../../assets/UserImg/plan.png";

function Planning() {
  const [budget, setBudget] = useState("");
  const [members, setMembers] = useState("");
  const [places, setPlaces] = useState([]);
  const [customPlace, setCustomPlace] = useState("");
  const [duration, setDuration] = useState("");
  const [recommendedPackages, setRecommendedPackages] = useState([]);

  const availablePlaces = ["Paris", "Bali", "Maldives", "Dubai", "New York"];

  const handleSearch = () => {
    // Simulated recommended packages
    const packages = [
      { id: 1, name: "Luxury Paris Tour", destination: "Paris", price: 1200, duration: "5 Days" },
      { id: 2, name: "Bali Adventure", destination: "Bali", price: 800, duration: "7 Days" },
      { id: 3, name: "Maldives Beach Escape", destination: "Maldives", price: 1500, duration: "4 Days" },
    ];
    setRecommendedPackages(packages);
  };

  const handleAddPlace = (place) => {
    if (place.trim() && !places.includes(place)) {
      setPlaces([...places, place]);
    }
    setCustomPlace("");
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative px-6 py-16 text-center text-white bg-no-repeat bg-cover" style={{ backgroundImage: `url(${Pln})` }}>
        <div className="absolute inset-0 bg-[#000000ad]"></div>
        <div className="relative z-10">
          <h1 className="text-3xl font-bold md:text-5xl">Plan With Your Requirements</h1>
          <p className="mt-4 text-lg md:text-xl">
            Find the perfect travel plan, tour packages, and vehicles tailored just for you.
          </p>
          <Link to="/package">
            <button className="px-6 py-3 mt-6 font-semibold text-black bg-yellow-400 rounded-lg shadow-lg hover:bg-yellow-500">
              View All Packages
            </button>
          </Link>
        </div>
      </section>

      {/* Planning Section */}
      <div className="min-h-screen p-6 bg-[#efeeee]">
        <h2 className="mb-6 text-3xl font-bold text-center text-blue-600">Plan Your Trip</h2>

        <div className="max-w-3xl p-6 mx-auto bg-white rounded-lg shadow-md">
          {/* Budget & Members */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="number"
              placeholder="Enter Budget ($)"
              className="w-full p-2 border rounded"
              min="1"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />
            <input
              type="number"
              placeholder="Number of Members"
              className="w-full p-2 border rounded"
              min="1"
              value={members}
              onChange={(e) => setMembers(e.target.value)}
            />
          </div>

          {/* Preferred Places - Dropdown & Input Combined */}
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Select or Enter Destination</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Type or select a place"
                className="w-full p-2 border rounded"
                value={customPlace}
                onChange={(e) => setCustomPlace(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAddPlace(customPlace)}
              />
              {/* Dropdown suggestions */}
              {customPlace && (
                <ul className="absolute left-0 w-full bg-white border rounded shadow-lg">
                  {availablePlaces
                    .filter((place) => place.toLowerCase().includes(customPlace.toLowerCase()))
                    .map((place) => (
                      <li
                        key={place}
                        className="p-2 cursor-pointer hover:bg-gray-200"
                        onClick={() => handleAddPlace(place)}
                      >
                        {place}
                      </li>
                    ))}
                  <li
                    className="p-2 text-blue-600 cursor-pointer hover:bg-gray-200"
                    onClick={() => handleAddPlace(customPlace)}
                  >
                    + Add "{customPlace}"
                  </li>
                </ul>
              )}
            </div>
          </div>

          {/* Selected Places */}
          {places.length > 0 && (
            <div className="mb-4">
              <label className="block mb-2 font-semibold">Selected Places</label>
              <div className="flex flex-wrap gap-2">
                {places.map((place, index) => (
                  <div key={index} className="flex items-center px-3 py-1 bg-blue-100 rounded">
                    {place}
                    <button
                      onClick={() => setPlaces(places.filter((p) => p !== place))}
                      className="ml-2 text-red-500"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Duration */}
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Trip Duration</label>
            <select
              className="w-full p-2 border rounded"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            >
              <option value="">Select Duration</option>
              <option value="1-3 Days">1-3 Days</option>
              <option value="4-7 Days">4-7 Days</option>
              <option value="8+ Days">8+ Days</option>
            </select>
          </div>

          {/* Search Button */}
          <button onClick={handleSearch} className="w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
            Search Packages
          </button>
        </div>

        {/* Recommended Packages */}
        {recommendedPackages.length > 0 && (
          <div className="max-w-3xl mx-auto mt-6">
            <h3 className="mb-4 text-xl font-semibold text-center">Recommended Packages</h3>
            <div className="grid gap-4">
              {recommendedPackages.map((pkg) => (
                <div key={pkg.id} className="flex justify-between p-4 bg-white rounded-lg shadow-md">
                  <div>
                    <h4 className="font-bold">{pkg.name}</h4>
                    <p>
                      {pkg.destination} | {pkg.duration}
                    </p>
                    <p className="font-semibold text-blue-600">${pkg.price}</p>
                  </div>
                  <button className="px-3 py-1 text-white bg-blue-500 rounded hover:bg-blue-600">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Planning;
