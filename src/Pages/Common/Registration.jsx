import React, { useState } from "react";
import { motion } from "framer-motion";
import Regstr from "../../assets/Commonimg/Reg.png";
import { Link } from "react-router-dom";

function Registration() {
    const [role, setRole] = useState("user");

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center w-full min-h-screen px-4 bg-no-repeat bg-cover sm:px-6"
            style={{ backgroundImage: `url(${Regstr})` }}
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full max-w-md bg-[#0000003c] rounded-lg p-6 flex flex-col justify-center items-center overflow-auto"
            >
                <div className="w-full">
                    <motion.h2
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-xl font-bold text-center text-white"
                    >
                        Create an Account
                    </motion.h2>

                    <motion.p
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mb-4 text-center text-gray-200"
                    >
                        Join us today!
                    </motion.p>

                    <form>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="mb-3"
                        >
                            <label className="block text-base font-medium text-white">Select Role</label>
                            <select
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                className="w-full px-3 py-2 mt-1 text-sm bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            >
                                <option value="user">User</option>
                                <option value="agency">Travel Agency</option>
                            </select>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="mb-3"
                        >
                            <label className="block text-base font-medium text-white">Full Name</label>
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                className="w-full px-3 py-2 mt-1 text-sm bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            className="mb-3"
                        >
                            <label className="block text-base font-medium text-white">Email Address</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-3 py-2 mt-1 text-sm bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="mb-3"
                        >
                            <label className="block text-base font-medium text-white">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full px-3 py-2 mt-1 text-sm bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </motion.div>

                        <Link to='/home'>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="w-full py-2 mt-2 font-medium text-white bg-green-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            >
                                Register
                            </motion.button>
                        </Link>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1 }}
                            className="mt-6 text-sm text-center"
                        >
                            <span className="text-white">Already have an account? </span>
                            <Link to='/login' className="font-medium text-green-600 hover:underline">Log in</Link>
                        </motion.div>
                    </form>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default Registration;
