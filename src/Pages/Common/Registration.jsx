import React, { useState } from "react";
import Regstr from "../../assets/Commonimg/Reg.png";
import { Link } from "react-router-dom";

function Registration() {
    const [role, setRole] = useState("user");

    return (
        <div
            className="flex items-center justify-center w-full min-h-screen px-4 bg-no-repeat bg-cover sm:px-6"
            style={{ backgroundImage: `url(${Regstr})` }}
        >
            <div className="w-full max-w-md bg-[#0000003c] rounded-lg p-6 flex flex-col justify-center items-center overflow-auto">
                <div className="w-full">
                    <h2 className="text-xl font-bold text-center text-white">Create an Account</h2>
                    <p className="mb-4 text-center text-gray-200">Join us today!</p>

                    <form>
                        <div className="mb-3">
                            <label className="block text-base font-medium text-white">Select Role</label>
                            <select
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                className="w-full px-3 py-2 mt-1 text-sm bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            >
                                <option value="user">User</option>
                                <option value="agency">Travel Agency</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="block text-base font-medium text-white">Full Name</label>
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                className="w-full px-3 py-2 mt-1 text-sm bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        <div className="mb-3">
                            <label className="block text-base font-medium text-white">Email Address</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-3 py-2 mt-1 text-sm bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        <div className="mb-3">
                            <label className="block text-base font-medium text-white">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full px-3 py-2 mt-1 text-sm bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>
                        

                        <Link to='/home'>
                        <button
                            type="submit"
                            className="w-full py-2 mt-2 font-medium text-white bg-green-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                           Register
                        </button>
                        </Link>

                        <div className="mt-6 text-sm text-center">
                            <span className="text-white">Already have an account? </span>
                            <a href="/login" className="font-medium text-green-600 hover:underline">
                               <Link to='/login'>Log in</Link>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Registration;
