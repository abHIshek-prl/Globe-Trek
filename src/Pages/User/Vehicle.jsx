import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/User-Components/Navbar";
import Footer from "../../Components/User-Components/Footer";

function Vehicle() {
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const vehicles = [
    { id: 1, name: "Toyota Innova Crysta", type: "SUV", seats: 7, price: 3000, image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/140809/innova-crysta-exterior-right-front-three-quarter-2.png?isig=0&q=80" },
    { id: 2, name: "Maruti Swift Dzire", type: "Sedan", seats: 4, price: 1800, image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/170173/dzire-2024-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80" },
    { id: 3, name: "Mahindra Scorpio", type: "SUV", seats: 7, price: 3500, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-92CCO0vALP-n_sf-8rnUwXgGCLmZSzm9Kw&s" },
    { id: 4, name: "Tempo Traveller", type: "Traveller", seats: 12, price: 5000, image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438582486/QC/MH/KR/226061581/tempo-traveler-a-c-rental-services.jpg" },
    { id: 5, name: "Luxury Bus", type: "Bus", seats: 40, price: 12000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC6Br4x4iQdSsuUsR5IuDsAJAFmXNbKTb0Pw&s" },
    { id: 6, name: "Royal Enfield Classic 350", type: "Bike", seats: 2, price: 1200, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-2queG7JHVVkdaAqv8cMabCFmaynrm9LCZg&s" },
    { id: 7, name: "Mercedes E-Class", type: "Luxury Sedan", seats: 4, price: 9000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ2ATziqrBb01dPxOdhzm8mx2n1JfX7wDmUA&s" },
    { id: 8, name: "BMW 5 Series", type: "Luxury Sedan", seats: 4, price: 11000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQz-mAZi7nhQRYBnRBEU7NQWrii0GcdE-IuQ&s" },
    { id: 9, name: "Toyota Fortuner", type: "Luxury SUV", seats: 7, price: 5500, image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202006/Front_0.png?size=690:388" },
    { id: 10,name: "Harley Davidson 750", type: "Cruiser Bike", seats: 2, price: 2500, image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/48442/front-three-quarter0.jpeg?q=80" },
    { id: 11,name: "Toyota liva", type: "sedan", seats: 5, price: 5000, image: "https://etimg.etb2bimg.com/photo/57027280.cms" },
    { id: 12,name: "Volks Wagan Polo ", type: "sedan", seats: 5, price: 7000, image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/29628/polo-exterior-right-front-three-quarter-2.jpeg?q=80" },
  ];

  return (
    <>
      <Navbar />

      <section 
        className="relative flex flex-col items-center justify-center px-6 py-20 text-center text-white bg-no-repeat bg-cover" 
        style={{ backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLeG_SyL3D4VRrTdN8rTMstzHWNgakDOp8WQ&s')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-3xl font-bold md:text-5xl">Find the Perfect Ride for Your Journey</h1>
          <p className="mt-4 text-lg md:text-xl">Find the perfect travel plan, tour packages, and vehicles tailored just for you.</p>
        </div>
      </section>

      <div className="min-h-screen p-6 bg-gray-100">
        <h2 className="mb-6 text-3xl font-bold text-center text-blue-600">Vehicle Rentals</h2>

        <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="overflow-hidden bg-white rounded-lg shadow-lg">
              <img src={vehicle.image} alt={vehicle.name} className="object-cover w-full h-48" />
              <div className="p-4">
                <h3 className="text-xl font-bold">{vehicle.name}</h3>
                <p className="text-gray-600">Type: {vehicle.type}</p>
                <p className="text-gray-600">Seats: {vehicle.seats}</p>
                <p className="font-semibold text-blue-600">₹{vehicle.price} / day</p>
                <button 
                  className="w-full px-4 py-2 mt-3 text-white bg-blue-500 rounded hover:bg-blue-600"
                  onClick={() => setSelectedVehicle(vehicle)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedVehicle && (
        <div className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
            <button 
              className="absolute text-xl text-red-500 top-2 right-2 hover:text-red-700" 
              onClick={() => setSelectedVehicle(null)}
            >
              ✕
            </button>
            <img src={selectedVehicle.image} alt={selectedVehicle.name} className="object-cover w-full h-40 rounded" />
            <h3 className="mt-4 text-2xl font-bold">{selectedVehicle.name}</h3>
            <p className="text-gray-600">Type: {selectedVehicle.type}</p>
            <p className="text-gray-600">Seats: {selectedVehicle.seats}</p>
            <p className="mt-2 font-bold text-blue-600">₹{selectedVehicle.price} / day</p>

            <div className="flex items-center justify-center gap-4 mt-4">
              <button
                className="px-6 py-2 text-white bg-gray-500 rounded-lg hover:bg-gray-600"
                onClick={() => setSelectedVehicle(null)}
              >
                Close
              </button>
              <Link to={`/booking?vehicleId=${selectedVehicle.id}`}>
                <button className="px-6 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600">
                  <Link to='/pay'>Book Now</Link>
                </button>
              </Link>
              <Link to="/chat">
                <button className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                  Chat
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Vehicle;