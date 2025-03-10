import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import AgNavbar from "../../Components/Agncy-Components/AgNavbar";
import AgFooter from "../../Components/Agncy-Components/AgFooter";

function AddPackage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [imagePreview, setImagePreview] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data) => {
    console.log("Package Data:", data);
    alert("Package added successfully!");
    reset();
    setImagePreview("");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <AgNavbar />

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr6KzC6x2cY93RmN9it3OZ5KPifYL-L6QogKlOHTXue4QRlcotdyqUW6uALGA1mkdg0Q&usqp=CAU')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 px-4 text-center text-white">
          <h1 className="text-4xl font-bold">Create & Explore New Travel Packages</h1>
          <p className="mt-2 text-lg">Offer unforgettable journeys with our platform!</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl p-8 mx-auto mt-8 bg-white rounded-lg shadow-md"
      >
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Add a New Travel Package</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block font-semibold text-gray-700">Package Title</label>
            <input
              type="text"
              {...register("title", { required: "Package title is required" })}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Enter package title"
            />
            {errors.title && <p className="text-sm text-red-500">{errors.title.message}</p>}
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Package Destination</label>
            <input
              type="text"
              {...register("destination", { required: "Destination is required" })}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Enter destination"
            />
            {errors.destination && <p className="text-sm text-red-500">{errors.destination.message}</p>}
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Description</label>
            <textarea
              {...register("description", { required: "Description is required" })}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Enter package details"
              rows="4"
            ></textarea>
            {errors.description && <p className="text-sm text-red-500">{errors.description.message}</p>}
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Price (₹)</label>
            <input
              type="number"
              {...register("price", {
                required: "Price is required",
                min: { value: 1, message: "Price must be greater than ₹0" },
              })}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Enter price"
            />
            {errors.price && <p className="text-sm text-red-500">{errors.price.message}</p>}
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Duration (Days)</label>
            <input
              type="number"
              {...register("duration", {
                required: "Duration is required",
                min: { value: 1, message: "Duration must be at least 1 day" },
              })}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Enter duration"
            />
            {errors.duration && <p className="text-sm text-red-500">{errors.duration.message}</p>}
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Upload Image</label>
            <input type="file" accept="image/*" {...register("image")} onChange={handleImageChange} className="w-full p-2 border rounded-lg" />
            {imagePreview && (
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                src={imagePreview}
                alt="Preview"
                className="object-cover w-full h-48 mt-3 rounded-lg"
              />
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-2 font-semibold text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Add Package
          </motion.button>
        </form>
      </motion.div>
      <AgFooter />
    </div>
  );
}

export default AddPackage;
