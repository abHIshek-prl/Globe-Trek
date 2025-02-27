import React, { useState } from "react";
import AgNavbar from "../../Components/Agncy-Components/AgNavbar";
import AgFooter from "../../Components/Agncy-Components/AgFooter";
import { motion } from "framer-motion";

function AddResort() {
  const [resortData, setResortData] = useState({
    name: "",
    description: "",
    price: "",
    location: "",
    facilities: "",
    image: null,
    imagePreview: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResortData({ ...resortData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setResortData({
          ...resortData,
          image: file,
          imagePreview: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!resortData.name || !resortData.description || !resortData.price || !resortData.location || !resortData.facilities) {
      alert("Please fill in all fields.");
      return;
    }

    console.log("Resort Data:", resortData);
    alert("Resort added successfully!");

    setResortData({
      name: "",
      description: "",
      price: "",
      location: "",
      facilities: "",
      image: null,
      imagePreview: "",
    });
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        {/* Navbar */}
        <AgNavbar />

        {/* Hero Section with Animation */}
        <motion.div
          className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX1RDyP9DPvpv-LCI1YV70RMprFR2LfhGfZQ&s')",
          }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <motion.div
            className="relative z-10 px-4 text-center text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl font-bold">Add a New Resort</h1>
            <p className="mt-2 text-lg">Offer travelers an unforgettable experience</p>
          </motion.div>
        </motion.div>

        {/* Form Container with Animation */}
        <motion.div
          className="max-w-3xl p-8 mx-auto mt-8 bg-white rounded-lg shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Resort Details</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Resort Name */}
            <div>
              <label className="block font-semibold text-gray-700">Resort Name</label>
              <input
                type="text"
                name="name"
                value={resortData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                placeholder="Enter resort name"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block font-semibold text-gray-700">Description</label>
              <textarea
                name="description"
                value={resortData.description}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                placeholder="Enter resort description"
                rows="4"
                required
              ></textarea>
            </div>

            {/* Price */}
            <div>
              <label className="block font-semibold text-gray-700">Price per Night (₹)</label>
              <input
                type="number"
                name="price"
                value={resortData.price}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                placeholder="Enter price per night"
                required
              />
            </div>

            {/* Location */}
            <div>
              <label className="block font-semibold text-gray-700">Location</label>
              <input
                type="text"
                name="location"
                value={resortData.location}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                placeholder="Enter resort location"
                required
              />
            </div>

            {/* Facilities */}
            <div>
              <label className="block font-semibold text-gray-700">Facilities</label>
              <input
                type="text"
                name="facilities"
                value={resortData.facilities}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                placeholder="Enter available facilities (WiFi, Pool, Spa, etc.)"
                required
              />
            </div>

            {/* Image Upload */}
            <div>
              <label className="block font-semibold text-gray-700">Upload Resort Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full p-2 border rounded-lg"
              />
              {resortData.imagePreview && (
                <motion.img
                  src={resortData.imagePreview}
                  alt="Preview"
                  className="object-cover w-full h-48 mt-3 rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              )}
            </div>

            {/* Submit Button with Hover Animation */}
            <motion.button
              type="submit"
              className="w-full py-2 font-semibold text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Add Resort
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Footer */}
      <AgFooter />
    </>
  );
}

export default AddResort;
