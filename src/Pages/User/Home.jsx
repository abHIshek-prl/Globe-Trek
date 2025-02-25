import React from "react";
import { motion } from "framer-motion";
import Hme from "../../assets/UserImg/Homee.png";
import Footer from "../../Components/User-Components/Footer";
import Navbar from "../../Components/User-Components/Navbar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full overflow-x-hidden"
      style={{ backgroundImage: `url(${Hme})` }}
    >
      <Navbar />

      <motion.div className="w-full">
        {/* Hero Section */}
        <motion.section
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-[#000000a4] px-6 py-16 text-center text-[#ffffff]"
        >
          <h1 className="text-3xl font-bold md:text-5xl">
            Discover Your Next Adventure
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Find the perfect travel plan, tour packages, and vehicles tailored
            just for you.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 mt-6 font-semibold text-black transition bg-yellow-400 rounded-lg shadow-lg hover:bg-yellow-500"
          >
            <Link to="/planning">Start Planning</Link>
          </motion.button>
        </motion.section>

        {/* Services Section */}
        <section className="px-4 py-10 bg-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid max-w-6xl grid-cols-1 gap-6 mx-auto sm:grid-cols-2 md:grid-cols-3"
          >
            {/* Resorts */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="p-6 transition bg-white shadow-xl rounded-xl hover:shadow-[#373737]"
            >
              <Link to="/resort">
                <h3 className="text-xl font-bold">Resorts</h3>
                <p className="mt-2 text-gray-600">
                  Book your resorts based on your preferences, duration, and
                  budget.
                </p>
              </Link>
            </motion.button>

            {/* Packages */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="p-6 transition bg-white shadow-xl rounded-xl hover:shadow-[#373737]"
            >
              <Link to="/package">
                <h3 className="text-xl font-bold">Book Tour Packages</h3>
                <p className="mt-2 text-gray-600">
                  Explore curated tours and packages from local experts.
                </p>
              </Link>
            </motion.button>

            {/* Vehicle Rentals */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="p-6 transition bg-white shadow-xl rounded-xl hover:shadow-[#373737]"
            >
              <Link to="/vehicle">
                <h3 className="text-xl font-bold">Vehicle Rentals</h3>
                <p className="mt-2 text-gray-600">
                  Rent a vehicle with or without a driver for your trip.
                </p>
              </Link>
            </motion.button>
          </motion.div>

          <div className="flex items-center justify-center w-full h-[150px]">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 mt-6 font-semibold text-black transition bg-yellow-400 rounded-lg shadow-lg hover:bg-yellow-500"
            >
              <Link to="/service">More</Link>
            </motion.button>
          </div>
        </section>

        {/* About Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-[#d9d9d9cf] px-6 py-16 text-center text-[#262626]"
        >
          <h1 className="text-3xl font-bold md:text-5xl">
            Know More About Us And Our Services
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Find the perfect travel plan, tour packages, and vehicles tailored
            just for you.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 mt-6 font-semibold text-black transition bg-yellow-400 rounded-lg shadow-lg hover:bg-yellow-500"
          >
            <Link to="/about">Know More</Link>
          </motion.button>
        </motion.section>
      </motion.div>

      <Footer />
    </motion.div>
  );
}

export default Home;
