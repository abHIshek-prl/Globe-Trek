import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AgNavbar from "../../Components/Agncy-Components/AgNavbar";
import { motion } from "framer-motion";
import AgFooter from "../../Components/Agncy-Components/AgFooter";

function AddActivity() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const [imagePreview, setImagePreview] = useState("");

    const onSubmit = (data) => {
        console.log("Activity Data:", data);
        alert("Adventure Activity added successfully!");
        reset();
        setImagePreview("");
    };

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

    return (
        <>
            <div className="min-h-screen bg-gray-100">
                <AgNavbar />
                <motion.div
                    className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center"
                    style={{
                        backgroundImage:
                            "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6MuPV7hQPaihh-eesdMA6ZLGEwsAl-qtnCQ&s')",
                    }}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <motion.div className="relative z-10 px-4 text-center text-white">
                        <h1 className="text-4xl font-bold">Add an Adventure Activity</h1>
                        <p className="mt-2 text-lg">Create thrilling experiences for travelers</p>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="max-w-3xl p-8 mx-auto mt-8 bg-white rounded-lg shadow-md"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Adventure Activity Details</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <label className="block font-semibold text-gray-700">Activity Name</label>
                            <input
                                type="text"
                                {...register("name", { required: "Activity name is required" })}
                                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter activity name"
                            />
                            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                        </div>

                        <div>
                            <label className="block font-semibold text-gray-700">Description</label>
                            <textarea
                                {...register("description", { required: "Description is required" })}
                                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter activity details"
                                rows="4"
                            ></textarea>
                            {errors.description && <p className="text-red-500">{errors.description.message}</p>}
                        </div>

                        <div>
                            <label className="block font-semibold text-gray-700">Location</label>
                            <input
                                type="text"
                                {...register("location", { required: "Location is required" })}
                                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter activity location"
                            />
                            {errors.location && <p className="text-red-500">{errors.location.message}</p>}
                        </div>

                        <div>
                            <label className="block font-semibold text-gray-700">Difficulty Level</label>
                            <select
                                {...register("level")}
                                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                            >
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>
                            </select>
                        </div>

                        <div>
                            <label className="block font-semibold text-gray-700">Price (₹)</label>
                            <input
                                type="number"
                                {...register("price", { required: "Price is required", min: 100 })}
                                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter price"
                            />
                            {errors.price && <p className="text-red-500">{errors.price.message}</p>}
                        </div>

                        <div>
                            <label className="block font-semibold text-gray-700">Upload Activity Image</label>
                            <input
                                type="file"
                                accept="image/*"
                                {...register("image", { required: "Image is required" })}
                                onChange={handleImageChange}
                                className="w-full p-2 border rounded-lg"
                            />
                            {errors.image && <p className="text-red-500">{errors.image.message}</p>}
                            {imagePreview && (
                                <motion.img
                                    src={imagePreview}
                                    alt="Preview"
                                    className="object-cover w-full h-48 mt-3 rounded-lg"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                />
                            )}
                        </div>

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
