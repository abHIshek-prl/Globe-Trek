import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AgNavbar from '../../Components/Agncy-Components/AgNavbar';
import AgFooter from '../../Components/Agncy-Components/AgFooter';

function AgencyHome() {
  return (
    <>
      <div>
        <AgNavbar />

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative flex flex-col items-center justify-center h-[60vh] text-white bg-no-repeat bg-cover"
          style={{
            backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhhxHonUG6rIwSRTZf8h5ee1-mXI4v-ATTaH6fKA1ePqdrg28UJBaG7LFGqpJJwr9DlXw&usqp=CAU')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="relative text-center">
            <h1 className="text-4xl font-bold md:text-5xl">Welcome to Your Agency</h1>
            <p className="mt-4 text-lg md:text-xl">Manage your travel offerings seamlessly.</p>
          </motion.div>
        </motion.section>

        {/* Grid Section */}
        <div className="container px-6 mx-auto my-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3"
          >
            {[
              { title: "Add Package", description: "Create new travel packages"},
              { title: "Add Guide", description: "Register professional tour guides" },
              { title: "Add Resort", description: "List new resorts for travelers" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.6 }}
                className="p-6 text-center transition-transform transform bg-white rounded-lg shadow-lg cursor-pointer hover:scale-105 hover:shadow-2xl"
              >
                <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* More Button */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }} className="flex justify-center mt-8">
            <Link to="/provide" className="px-6 py-3 text-white transition duration-300 bg-blue-600 rounded-md hover:bg-blue-700">
              More
            </Link>
          </motion.div>
        </div>

        {/* About Section */}
        <motion.section
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative flex flex-col items-center justify-center h-[60vh] text-white bg-no-repeat bg-cover"
          style={{
            backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhhxHonUG6rIwSRTZf8h5ee1-mXI4v-ATTaH6fKA1ePqdrg28UJBaG7LFGqpJJwr9DlXw&usqp=CAU')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.5, duration: 1 }} 
            className="relative text-center"
          >
            <h1 className="text-4xl font-bold md:text-5xl">Know More About Platform</h1>
            <p className="mt-4 text-lg md:text-xl">Manage your travel offerings seamlessly.</p>

            {/* Centered Button */}
            <div className="flex justify-center mt-6">
              <Link to="/agabout" className="px-6 py-3 text-white transition duration-300 bg-blue-600 rounded-md hover:bg-blue-700">
                More
              </Link>
            </div>
          </motion.div>
        </motion.section>

        {/* Footer */}
        <AgFooter />
      </div>
    </>
  );
}

export default AgencyHome;
