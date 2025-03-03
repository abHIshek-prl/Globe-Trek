import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function AgFooter() {
    return (
        <footer className="py-8 text-white bg-[#0e4e49]">
            <div className="container px-6 mx-auto">
                <div className="flex flex-wrap items-center justify-between">
                    <div className="w-full mb-6 text-center md:w-1/3 md:text-left md:mb-0">
                        <img
                            src="/src/assets/Commonimg/Logo.png"
                            alt="Travel Agency Logo"
                            className="w-32 mx-auto md:mx-0"
                        />
                        <p className="mt-2 text-gray-400">Explore the world with us</p>
                    </div>

                    <div className="w-full mb-6 text-center md:w-1/3 md:mb-0">
                        <h3 className="text-lg font-semibold">Quick Links</h3>
                        <ul className="mt-2 space-y-2 text-gray-400">
                            <li>
                                <a href="/packages" className="hover:text-white">
                                    <Link to="/aghome">Home</Link>{" "}
                                </a>
                            </li>
                            <li>
                                <a href="/resorts" className="hover:text-white">
                                    {" "}
                                    <Link to="/provide">Provide</Link>{" "}
                                </a>
                            </li>
                            <li>
                                <a href="/guides" className="hover:text-white">
                                    {" "}
                                    <Link to="/agabout">About</Link>{" "}
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="hover:text-white">
                                    {" "}
                                    <Link to="/chat">Message</Link>{" "}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full text-center md:w-1/3 md:text-right">
                        <h3 className="text-lg font-semibold">Contact Us</h3>
                        <p className="mt-2 text-gray-400">info@travelagency.com</p>
                        <p className="text-gray-400">+123 456 7890</p>

                        <div className="flex justify-center gap-4 mt-4 md:justify-end">
                            <a href="#" className="text-xl text-gray-400 hover:text-white">
                                <FaFacebook />
                            </a>
                            <a href="#" className="text-xl text-gray-400 hover:text-white">
                                <FaInstagram />
                            </a>
                            <a href="#" className="text-xl text-gray-400 hover:text-white">
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-4 mt-6 text-sm text-center text-gray-500 border-t border-gray-700">
                    © {new Date().getFullYear()} Travel Agency. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default AgFooter;
