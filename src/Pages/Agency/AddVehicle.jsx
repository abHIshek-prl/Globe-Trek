import React, { useState } from "react";
import { motion } from "framer-motion";
import AgNavbar from "../../Components/Agncy-Components/AgNavbar";
import AgFooter from "../../Components/Agncy-Components/AgFooter";

function AddVehicle() {
  const [vehicleData, setVehicleData] = useState({
    name: "",
    type: "",
    seatingCapacity: "",
    price: "",
    image: null,
    imagePreview: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicleData({ ...vehicleData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setVehicleData({
          ...vehicleData,
          image: file,
          imagePreview: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!vehicleData.name || !vehicleData.type || !vehicleData.seatingCapacity || !vehicleData.price) {
      alert("Please fill in all fields.");
      return;
    }

    console.log("Vehicle Data:", vehicleData);
    alert("Vehicle added successfully!");

    setVehicleData({
      name: "",
      type: "",
      seatingCapacity: "",
      price: "",
      image: null,
      imagePreview: "",
    });
  };

  return (
    <motion.div 
      className="min-h-screen bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <AgNavbar />

      <motion.div
        className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('https://s3.us-west-2.amazonaws.com/landing-qoreups.com/academy/wp-content/uploads/2023/07/11095527/How-To-Start-A-Car-Rental-Business.webp')" }}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 px-4 text-center text-white">
          <h1 className="text-4xl font-bold">Add a New Vehicle</h1>
          <p className="mt-2 text-lg">Expand your fleet with ease</p>
        </div>
      </motion.div>

      <motion.div 
        className="max-w-3xl p-8 mx-auto mt-8 bg-white rounded-lg shadow-md"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Add Vehicle Details</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <motion.div whileHover={{ scale: 1.02 }}>
            <label className="block font-semibold text-gray-700">Vehicle Name</label>
            <input type="text" name="name" value={vehicleData.name} onChange={handleChange} className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400" placeholder="Enter vehicle name" required />
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }}>
            <label className="block font-semibold text-gray-700">Vehicle Type</label>
            <select name="type" value={vehicleData.type} onChange={handleChange} className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400" required>
              <option value="">Select Type</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Luxury">Luxury</option>
              <option value="Bus">Bus</option>
              <option value="Van">Van</option>
            </select>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }}>
            <label className="block font-semibold text-gray-700">Seating Capacity</label>
            <input type="number" name="seatingCapacity" value={vehicleData.seatingCapacity} onChange={handleChange} className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400" placeholder="Enter seating capacity" required />
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }}>
            <label className="block font-semibold text-gray-700">Price (₹)</label>
            <input type="number" name="price" value={vehicleData.price} onChange={handleChange} className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400" placeholder="Enter price" required />
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }}>
            <label className="block font-semibold text-gray-700">Upload Vehicle Image</label>
            <input type="file" accept="image/*" onChange={handleImageChange} className="w-full p-2 border rounded-lg" />
            {vehicleData.imagePreview && (
              <motion.img src={vehicleData.imagePreview} alt="Preview" className="object-cover w-full h-48 mt-3 rounded-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} />
            )}
          </motion.div>

          <motion.button type="submit" className="w-full py-2 font-semibold text-white transition bg-blue-600 rounded-lg hover:bg-blue-700" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Add Vehicle
          </motion.button>
        </form>
      </motion.div>

      <AgFooter />
    </motion.div>
  );
}

export default AddVehicle;
