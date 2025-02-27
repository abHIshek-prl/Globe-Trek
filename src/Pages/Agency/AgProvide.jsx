import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AgNavbar from "../../Components/Agncy-Components/AgNavbar";
import AgFooter from "../../Components/Agncy-Components/AgFooter";

function AgProvide() {
  const options = [
    { title: "Add Packages", description: "Create new travel packages", link: "/agpackage" },
    { title: "Add Vehicles", description: "List rental vehicles for travelers", link: "/agvehicle" },
    { title: "Add Guides", description: "Register professional tour guides", link: "/agguid" },
  ];

  const centeredOptions = [
    { title: "Add Resorts", description: "List premium resorts for guests", link: "/agresort" },
    { title: "Add Activities", description: "Offer exciting adventure activities", link: "/agactivity" },
  ];

  return (
    <>
      <AgNavbar />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative flex flex-col items-center justify-center h-[50vh] text-white bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('https://cadecocruz.org.bo/userfiles/image/2022/05/09/viajes%20y%20turismo.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative text-center"
        >
          <h1 className="text-4xl font-bold md:text-5xl">Enhance Your Travel Business</h1>
          <p className="mt-4 text-lg md:text-xl">
            Add and manage your travel services seamlessly.
          </p>
        </motion.div>
      </motion.section>

      {/* Provide Options Grid */}
      <div className="container px-6 mx-auto my-12">
        {/* First Row: 3 Items */}
        <motion.div
          className="grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          {options.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.5 }}
            >
              <Link to={item.link}>
                <div className="p-6 text-center transition-transform transform bg-white rounded-lg shadow-lg cursor-pointer hover:scale-105 hover:shadow-2xl">
                  <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
                  <p className="mt-2 text-gray-600">{item.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Second Row: 2 Items Centered */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {centeredOptions.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.5 }}
            >
              <Link to={item.link}>
                <div className="p-6 text-center transition-transform transform bg-white rounded-lg shadow-lg cursor-pointer hover:scale-105 hover:shadow-2xl w-80">
                  <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
                  <p className="mt-2 text-gray-600">{item.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Additional Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative flex flex-col items-center justify-center h-[50vh] text-white bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy6nvQYkaTrXJYg2IZA-x_nm-ulKRbIMNtndT2Z1C1AJyRPJVb5156l_wXxmuWGn-jjF8&usqp=CAU')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative text-center"
        >
          <h1 className="text-4xl font-bold md:text-5xl">Expand Your Business Horizons</h1>
          <p className="mt-4 text-lg md:text-xl">
            Join us in transforming travel experiences with quality services.
          </p>
        </motion.div>
      </motion.section>

      <AgFooter />
    </>
  );
}

export default AgProvide;
