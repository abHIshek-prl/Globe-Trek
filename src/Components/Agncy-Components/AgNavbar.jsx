import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function AgNavbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <nav className="relative z-50 bg-white shadow-md">
            <div className="container flex items-center justify-between px-6 py-4 mx-auto font-semibold">
                <Link to="/aghome" className="text-xl font-bold text-blue-600">
                    <img src="/src/assets/Commonimg/Logo.png" alt="Logo" className="h-10" />
                </Link>

                <div className="items-center hidden space-x-8 md:flex">
                    <Link to="/aghome" className="text-gray-700 hover:text-blue-600">
                        Home
                    </Link>

                    <div
                        className="relative z-50 group"
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                    >
                        <button
                            onClick={() => navigate("/provide")}
                            className="flex items-center text-gray-700 hover:text-blue-600"
                        >
                            Provide <ChevronDownIcon className="w-4 h-4 ml-1" />
                        </button>

                        {dropdownOpen && (
                            <div className="absolute left-0 z-50 w-48 mt-2 overflow-hidden bg-white border border-gray-200 rounded-md shadow-lg">
                                <Link to="/agresort" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">
                                    Add Resort
                                </Link>
                                <Link to="/agpackage" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">
                                    Add Packages
                                </Link>
                                <Link to="/agvehicle" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">
                                    Add Vehicles
                                </Link>
                                <Link to="/agguid" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">
                                    Add Guides
                                </Link>
                                <Link to="/agactivity" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">
                                    Add Adventure
                                </Link>
                            </div>
                        )}
                    </div>

                    <Link to="/agabout" className="text-gray-700 hover:text-blue-600">
                        About
                    </Link>

                    <Link to="/chat" className="text-gray-700 hover:text-blue-600">
                        Messages
                    </Link>
                </div>

                <button className="text-gray-700 md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
                </button>
            </div>

            {menuOpen && (
                <div className="px-6 py-4 space-y-4 bg-white shadow-md md:hidden">
                    <Link to="/aghome" className="block text-gray-700 hover:text-blue-600">
                        Home
                    </Link>

                    <button
                        onClick={() => navigate("/provide")}
                        className="block w-full text-left text-gray-700 hover:text-blue-600"
                    >
                        Provide
                    </button>

                    <Link to="/agabout" className="block text-gray-700 hover:text-blue-600">
                        About
                    </Link>
                    <Link to="/chat" className="block text-gray-700 hover:text-blue-600">
                        Messages
                    </Link>
                </div>
            )}
        </nav>
    );
}

export default AgNavbar;
