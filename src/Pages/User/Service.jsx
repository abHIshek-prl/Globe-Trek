import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../../Components/User-Components/Navbar";
import Footer from "../../Components/User-Components/Footer";
import Servc from "../../assets/UserImg/servis.png";

function Service() {
  return (
    <div>
      <div className="h-screen max-w-screen">
        <Navbar />

       
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="h-[89%] w-full bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${Servc})` }}
        >
          <div className="h-full w-full bg-[#000000af] text-center flex flex-col justify-center items-center">
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-white"
            >
              Seamless Travel, Unforgettable Memories <br />
              <motion.span
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "mirror" }}
                className="text-[#dee649]"
              >
                Plan
              </motion.span>
              ,
              <motion.span
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "mirror", delay: 0.2 }}
                className="text-[#66c659]"
              >
                Book
              </motion.span>
              ,
              <motion.span
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "mirror", delay: 0.4 }}
                className="text-[#00d9ff]"
              >
                Explore
              </motion.span>
              !
            </motion.h1>

            <p className="mt-4 text-xl font-semibold text-white">
              Discover tailored travel solutions that fit your needs.
            </p>
            <p className="text-xl font-semibold text-white">Plan and book effortlessly!</p>
          </div>
        </motion.div>

        
        <div className="w-full min-h-screen p-8 bg-gray-100">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-6 text-3xl font-bold text-center text-gray-800"
          >
            Our Travel Solutions
          </motion.h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[
              { icon: "🗺️", title: "Trip Planning", link: "/planning", desc: "Plan customized trips with ease." },
              { icon: "🏝️", title: "Tour Packages", link: "/package", desc: "Explore curated tours for every destination." },
              { icon: "🚗", title: "Vehicle Rentals", link: "/vehicle", desc: "Rent vehicles with or without drivers." },
              { icon: "👨‍💼", title: "Local Guides", link: "/guid", desc: "Connect with expert local guides." },
              { icon: "🏨", title: "Resort Bookings", link: "/resort", desc: "Find and book the best accommodations." },
              { icon: "⛰️", title: "Adventure Activities", link: "/advanture", desc: "Discover thrilling adventures worldwide." }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-6 text-center transition-all duration-300 bg-white shadow-lg rounded-2xl hover:shadow-black"
              >
                <button>
                  <Link to={service.link}>
                    <div className="mb-3 text-5xl">{service.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-700">{service.title}</h3>
                    <p className="mt-2 text-gray-600">{service.desc}</p>
                  </Link>
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Service;
