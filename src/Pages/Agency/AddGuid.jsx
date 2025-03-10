import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import AgNavbar from "../../Components/Agncy-Components/AgNavbar";
import AgFooter from "../../Components/Agncy-Components/AgFooter";

function AddGuide() {
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
    console.log("Guide Data:", data);
    alert("Guide added successfully!");
    reset();
    setImagePreview("");
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <AgNavbar />

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-vector/group-tourists-travelling-with-guide-holding-flag-flat-illustration_74855-18752.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 px-4 text-center text-white">
            <h1 className="text-4xl font-bold">Add a New Guide</h1>
            <p className="mt-2 text-lg">
              Enhance travel experiences with expert guides
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl p-8 mx-auto mt-8 bg-white rounded-lg shadow-md"
        >
          <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">
            Add Guide Details
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block font-semibold text-gray-700">
                Guide Name
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                placeholder="Enter guide name"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block font-semibold text-gray-700">
                Experience (Years)
              </label>
              <input
                type="number"
                {...register("experience", {
                  required: "Experience is required",
                  min: { value: 1, message: "Minimum 1 year required" },
                })}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                placeholder="Enter experience in years"
              />
              {errors.experience && (
                <p className="text-red-500">{errors.experience.message}</p>
              )}
            </div>

            <div>
              <label className="block font-semibold text-gray-700">
                Languages Spoken
              </label>
              <input
                type="text"
                {...register("languages", {
                  required: "Languages are required",
                })}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                placeholder="Enter languages (comma-separated)"
              />
              {errors.languages && (
                <p className="text-red-500">{errors.languages.message}</p>
              )}
            </div>

            <div>
              <label className="block font-semibold text-gray-700">
                Location
              </label>
              <input
                type="text"
                {...register("location", {
                  required: "Location is required",
                })}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                placeholder="Enter guide's location"
              />
              {errors.location && (
                <p className="text-red-500">{errors.location.message}</p>
              )}
            </div>

            <div>
              <label className="block font-semibold text-gray-700">
                Price (₹ per day)
              </label>
              <input
                type="number"
                {...register("price", {
                  required: "Price is required",
                  min: { value: 100, message: "Minimum price is ₹100" },
                })}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                placeholder="Enter price per day"
              />
              {errors.price && (
                <p className="text-red-500">{errors.price.message}</p>
              )}
            </div>

            <div>
              <label className="block font-semibold text-gray-700">
                Upload Guide Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full p-2 border rounded-lg"
              />
              {imagePreview && (
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  src={imagePreview}
                  alt="Preview"
                  className="object-cover w-full h-48 mt-3 rounded-lg"
                />
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              type="submit"
              className="w-full py-2 font-semibold text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Add Guide
            </motion.button>
          </form>
        </motion.div>
      </div>
      <AgFooter />
    </>
  );
}

export default AddGuide;
