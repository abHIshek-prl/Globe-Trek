import React, { useState } from "react";
import { motion } from "framer-motion";
import AgNavbar from "../../Components/Agncy-Components/AgNavbar";
import AgFooter from "../../Components/Agncy-Components/AgFooter";

function AddGuide() {
  const [guideData, setGuideData] = useState({
    name: "",
    experience: "",
    languages: "",
    location: "",
    price: "",
    image: null,
    imagePreview: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGuideData({ ...guideData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setGuideData({
          ...guideData,
          image: file,
          imagePreview: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!guideData.name || !guideData.experience || !guideData.languages || !guideData.location || !guideData.price) {
      alert("Please fill in all fields.");
      return;
    }

    console.log("Guide Data:", guideData);
    alert("Guide added successfully!");

    setGuideData({
      name: "",
      experience: "",
      languages: "",
      location: "",
      price: "",
      image: null,
      imagePreview: "",
    });
  };

  return (
    <><div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <AgNavbar />

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('https://img.freepik.com/free-vector/group-tourists-travelling-with-guide-holding-flag-flat-illustration_74855-18752.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 px-4 text-center text-white">
          <h1 className="text-4xl font-bold">Add a New Guide</h1>
          <p className="mt-2 text-lg">Enhance travel experiences with expert guides</p>
        </div>
      </motion.div>

      {/* Form Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl p-8 mx-auto mt-8 bg-white rounded-lg shadow-md"
      >
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Add Guide Details</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Guide Name */}
          <motion.div whileHover={{ scale: 1.02 }}>
            <label className="block font-semibold text-gray-700">Guide Name</label>
            <input
              type="text"
              name="name"
              value={guideData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Enter guide name"
              required />
          </motion.div>

          {/* Experience */}
          <motion.div whileHover={{ scale: 1.02 }}>
            <label className="block font-semibold text-gray-700">Experience (Years)</label>
            <input
              type="number"
              name="experience"
              value={guideData.experience}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Enter experience in years"
              required />
          </motion.div>

          {/* Languages */}
          <motion.div whileHover={{ scale: 1.02 }}>
            <label className="block font-semibold text-gray-700">Languages Spoken</label>
            <input
              type="text"
              name="languages"
              value={guideData.languages}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Enter languages (comma-separated)"
              required />
          </motion.div>

          {/* Location */}
          <motion.div whileHover={{ scale: 1.02 }}>
            <label className="block font-semibold text-gray-700">Location</label>
            <input
              type="text"
              name="location"
              value={guideData.location}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Enter guide's location"
              required />
          </motion.div>

          {/* Price */}
          <motion.div whileHover={{ scale: 1.02 }}>
            <label className="block font-semibold text-gray-700">Price (₹ per day)</label>
            <input
              type="number"
              name="price"
              value={guideData.price}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Enter price per day"
              required />
          </motion.div>

          {/* Image Upload */}
          <motion.div whileHover={{ scale: 1.02 }}>
            <label className="block font-semibold text-gray-700">Upload Guide Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-2 border rounded-lg" />
            {guideData.imagePreview && (
              <motion.img 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                src={guideData.imagePreview}
                alt="Preview"
                className="object-cover w-full h-48 mt-3 rounded-lg" />
            )}
          </motion.div>

          {/* Submit Button */}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="w-full py-2 font-semibold text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Add Guide
          </motion.button>
        </form>
      </motion.div>
    </div><AgFooter /></>
  );
}

export default AddGuide;
