import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/User-Components/Navbar";
import Footer from "../../Components/User-Components/Footer";

function Packages() {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = [
    {
      id: 1,
      name: "Luxury Paris Tour",
      destination: "Paris",
      price: 1200,
      duration: "5 Days",
      description: "Experience the best of Paris with a luxury stay and guided tours.",
      image: "https://source.unsplash.com/400x250/?paris",
    },
    {
      id: 2,
      name: "Bali Adventure",
      destination: "Bali",
      price: 800,
      duration: "7 Days",
      description: "Explore Bali’s beaches and culture with exciting activities.",
      image: "https://source.unsplash.com/400x250/?bali",
    },
    {
      id: 3,
      name: "Maldives Beach Escape",
      destination: "Maldives",
      price: 1500,
      duration: "4 Days",
      description: "Relax on the pristine beaches of the Maldives with luxury accommodations.",
      image: "https://source.unsplash.com/400x250/?maldives",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative px-6 py-16 text-center text-white bg-no-repeat bg-cover"
        style={{ backgroundImage: `url('https://source.unsplash.com/1600x600/?travel')` }} // Fixed missing background image
      >
        <div className="absolute inset-0 bg-[black]"></div>
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

      {/* Package List */}
      <div className="min-h-screen p-6 bg-gray-100">
        <h2 className="mb-6 text-3xl font-bold text-center text-blue-600">Travel Packages</h2>

        <div className="grid max-w-6xl gap-6 mx-auto sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div key={pkg.id} className="overflow-hidden bg-white rounded-lg shadow-lg">
              <img src={pkg.image} alt={pkg.name} className="object-cover w-full h-48" />
              <div className="p-4">
                <h3 className="text-xl font-bold">{pkg.name}</h3>
                <p className="text-gray-600">{pkg.destination} | {pkg.duration}</p>
                <p className="font-semibold text-blue-600">${pkg.price}</p>
                <button
                  className="w-full px-4 py-2 mt-3 text-white bg-blue-500 rounded hover:bg-blue-600"
                  onClick={() => setSelectedPackage(pkg)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Package Details */}
      {selectedPackage && (
        <div className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="relative w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
            <button
              className="absolute text-2xl text-red-500 top-2 right-2 hover:text-red-700"
              onClick={() => setSelectedPackage(null)}
            >
              ✕
            </button>
            <img
              src={selectedPackage.image}
              alt={selectedPackage.name}
              className="object-cover w-full rounded-lg h-52"
            />
            <h3 className="mt-4 text-2xl font-bold">{selectedPackage.name}</h3>
            <p className="text-gray-600">{selectedPackage.destination} | {selectedPackage.duration}</p>
            <p className="mt-2">{selectedPackage.description}</p>
            <p className="mt-2 font-bold text-blue-600">${selectedPackage.price}</p>
            <button
              className="w-full px-4 py-2 mt-4 text-white bg-blue-600 rounded hover:bg-blue-700"
              onClick={() => setSelectedPackage(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Packages;
