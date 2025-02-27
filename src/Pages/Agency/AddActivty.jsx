import React, { useState } from "react";
import AgNavbar from "../../Components/Agncy-Components/AgNavbar";
import { motion } from "framer-motion";
import AgFooter from "../../Components/Agncy-Components/AgFooter";

function AddActivity() {
  const [activityData, setActivityData] = useState({
    name: "",
    description: "",
    location: "",
    level: "Easy",
    price: "",
    otherDetails: "",
    image: null,
    imagePreview: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setActivityData({ ...activityData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setActivityData({
          ...activityData,
          image: file,
          imagePreview: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!activityData.name || !activityData.description || !activityData.location || !activityData.price) {
      alert("Please fill in all required fields.");
      return;
    }

    console.log("Activity Data:", activityData);
    alert("Adventure Activity added successfully!");

    setActivityData({
      name: "",
      description: "",
      location: "",
      level: "Easy",
      price: "",
      otherDetails: "",
      image: null,
      imagePreview: "",
    });
  };

  return (
    <><div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <AgNavbar />

      {/* Hero Section */}
      <div
        className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6MuPV7hQPaihh-eesdMA6ZLGEwsAl-qtnCQ&s')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div
          className="relative z-10 px-4 text-center text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-bold">Add an Adventure Activity</h1>
          <p className="mt-2 text-lg">Create thrilling experiences for travelers</p>
        </motion.div>
      </div>

      {/* Form Container with Animation */}
      <motion.div
        className="max-w-3xl p-8 mx-auto mt-8 bg-white rounded-lg shadow-md"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Adventure Activity Details</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Activity Name */}
          <div>
            <label className="block font-semibold text-gray-700">Activity Name</label>
            <input
              type="text"
              name="name"
              value={activityData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Enter activity name"
              required />
          </div>

          {/* Description */}
          <div>
            <label className="block font-semibold text-gray-700">Description</label>
            <textarea
              name="description"
              value={activityData.description}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Enter activity details"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Location */}
          <div>
            <label className="block font-semibold text-gray-700">Location</label>
            <input
              type="text"
              name="location"
              value={activityData.location}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Enter activity location"
              required />
          </div>

          {/* Difficulty Level */}
          <div>
            <label className="block font-semibold text-gray-700">Difficulty Level</label>
            <select
              name="level"
              value={activityData.level}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          {/* Price */}
          <div>
            <label className="block font-semibold text-gray-700">Price (₹)</label>
            <input
              type="number"
              name="price"
              value={activityData.price}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Enter price"
              required />
          </div>

          {/* Other Details */}
          <div>
            <label className="block font-semibold text-gray-700">Other Details</label>
            <textarea
              name="otherDetails"
              value={activityData.otherDetails}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Enter additional details"
              rows="3"
            ></textarea>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block font-semibold text-gray-700">Upload Activity Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-2 border rounded-lg" />
            {activityData.imagePreview && (
              <motion.img
                src={activityData.imagePreview}
                alt="Preview"
                className="object-cover w-full h-48 mt-3 rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }} />
            )}
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full py-2 font-semibold text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Add Activity
          </motion.button>
        </form>
      </motion.div>
    </div>
    <AgFooter />
    </>
  );
}

export default AddActivity;
