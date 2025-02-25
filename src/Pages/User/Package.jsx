import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../../Components/User-Components/Navbar";
import Footer from "../../Components/User-Components/Footer";

function Packages() {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = [
    {
      id: 1,
      name: "Golden Triangle Tour",
      destination: "Delhi - Agra - Jaipur",
      price: 15000,
      duration: "5 Days",
      description: "Explore the rich heritage of India, including the Taj Mahal, Jaipur forts, and Delhi's landmarks.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQToSN3Abj0slZ5a8mfIMWYAxvFf3U__vjbsQ&s",
    },
    {
      id: 2,
      name: "Goa Beach Holiday",
      destination: "Goa",
      price: 12000,
      duration: "4 Days",
      description: "Relax on the pristine beaches of Goa and enjoy the vibrant nightlife.",
      image: "https://s3.india.com/wp-content/uploads/2024/06/List-of-8-Famous-Beaches-Around-Goa.jpg##image/jpg",
    },
    {
      id: 3,
      name: "Kashmir Paradise Tour",
      destination: "Srinagar - Gulmarg - Pahalgam",
      price: 18000,
      duration: "6 Days",
      description: "Experience the beauty of Kashmir with scenic valleys, houseboats, and snow-capped mountains.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKp3wqGmnDll9kOmTIYBokI9O4BrcGoIb5bw&s",
    },
    {
      id: 4,
      name: "Kerala Backwaters Retreat",
      destination: "Alleppey - Munnar - Kochi",
      price: 16000,
      duration: "5 Days",
      description: "Enjoy a peaceful houseboat stay in the backwaters and explore lush green landscapes.",
      image: "https://keraladayz.com/wp-content/uploads/2023/04/banner-1024x512.jpg",
    },
    {
      id: 5,
      name: "Manali Adventure Tour",
      destination: "Manali - Solang Valley",
      price: 14000,
      duration: "5 Days",
      description: "A perfect destination for adventure lovers with trekking, paragliding, and snow activities.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmiDa8qw6P-YNrFiJxxQSlI-tgFe18Rub57Q&s",
    },
    {
      id: 6,
      name: "Rajasthan Royal Tour",
      destination: "Jaipur - Jodhpur - Udaipur",
      price: 20000,
      duration: "7 Days",
      description: "Explore the majestic palaces, forts, and heritage of Rajasthan with a royal experience.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJNeTbMCbF9MJ4klERzRikf44gLc91y85GrDJbx7ZXcef09iEdiv6mBO0CLTex8MCTj4&usqp=CAU",
    },
    {
      id: 7,
      name: "Andaman Islands Getaway",
      destination: "Port Blair - Havelock",
      price: 22000,
      duration: "6 Days",
      description: "Relax in the tropical paradise of Andaman with white sandy beaches and scuba diving.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxJS0hRt21RGIXDoZn9Of2TUeBYRLrmULbsQ&s",
    },
    {
      id: 8,
      name: "Leh-Ladakh Bike Expedition",
      destination: "Leh - Nubra Valley - Pangong Lake",
      price: 25000,
      duration: "7 Days",
      description: "A dream road trip through the high-altitude deserts and breathtaking landscapes of Ladakh.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnByj45DXKNXL_yH4Y4D1Spdqc_1c2SZ4HCA&s",
    },
    {
      id: 9,
      name: "Rishikesh Yoga & Adventure",
      destination: "Rishikesh",
      price: 13000,
      duration: "4 Days",
      description: "Experience peace with yoga retreats, river rafting, and spiritual vibes in Rishikesh.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrE1H04SgjhZQ5jfP2SIp_4GyXmr-m8qjuKQ&s",
    },
  ];

  return (
    <>
      <Navbar />

      <motion.section
        className="relative px-6 py-16 text-center text-white bg-no-repeat bg-cover"
        style={{ backgroundImage: `url('https://s3.india.com/wp-content/uploads/2024/06/List-of-8-Famous-Beaches-Around-Goa.jpg')` }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          <motion.h1 className="text-3xl font-bold md:text-5xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}>
            Discover Best Travel Packages
          </motion.h1>
          <motion.p className="mt-4 text-lg md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}>
            Explore breathtaking destinations, cultural heritage, and adventure-packed tours.
          </motion.p>
        </div>
      </motion.section>

      <div className="min-h-screen p-6 bg-gray-100">
        <h2 className="mb-6 text-3xl font-bold text-center text-blue-600">Popular Travel Packages</h2>

        <motion.div
          className="grid max-w-6xl gap-6 mx-auto sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
          }}
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              className="overflow-hidden bg-white rounded-lg shadow-lg"
              variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
            >
              <img src={pkg.image} alt={pkg.name} className="object-cover w-full h-48" />
              <div className="p-4">
                <h3 className="text-xl font-bold">{pkg.name}</h3>
                <p className="text-gray-600">{pkg.destination} | {pkg.duration}</p>
                <p className="font-semibold text-blue-600">₹{pkg.price}</p>
                <button
                  className="w-full px-4 py-2 mt-3 text-white bg-blue-500 rounded hover:bg-blue-600"
                  onClick={() => setSelectedPackage(pkg)}
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {selectedPackage && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-lg p-6 bg-white rounded-lg shadow-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
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
            <p className="mt-2 font-bold text-blue-600">₹{selectedPackage.price}</p>

            <div className="flex items-center justify-center gap-4 mt-4">
              <button
                className="px-6 py-2 text-white bg-gray-500 rounded-lg hover:bg-gray-600"
                onClick={() => setSelectedPackage(null)}
              >
                Close
              </button>
              <Link to={`/booking?packageId=${selectedPackage.id}`}>
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
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </>
  );
}

export default Packages;


