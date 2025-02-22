import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false); // Dropdown State
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full bg-white shadow-md ">
        <div className="flex items-center justify-between w-full h-16 px-4 md:px-8">

          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center">
              <img
                src="/src/assets/Commonimg/Logo.png"
                alt="Logo"
                className="h-12 w-auto max-w-[140px] md:max-w-[120px] object-contain"
              />
            </Link>
            <span className="text-lg font-bold text-teal-600 md:text-xl">GLOBE TREK</span>
          </div>

          {/* Desktop Menu */}
          <div className="items-center hidden space-x-10 font-semibold md:flex">
            <Link to='/home' className="text-black hover:text-[#2a9e8b]">Home</Link>

            {/* Service Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsServiceOpen(true)}
              onMouseLeave={() => setIsServiceOpen(false)}
            >
              <button
                onClick={() => navigate('/service')}
                className="text-black hover:text-[#2a9e8b] flex items-center"
              >
                Service
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isServiceOpen && (
                <div className="absolute left-0 w-48 mt-2 bg-white border rounded-lg shadow-lg">
                  <Link to='/planning' className="block px-4 py-2 text-black hover:bg-gray-200">Trip Planning</Link>
                  <Link to='/package' className="block px-4 py-2 text-black hover:bg-gray-200">Tour Packages</Link>
                  <Link to='/vehicle' className="block px-4 py-2 text-black hover:bg-gray-200">Vehicle Rentals</Link>
                  <Link to='/guid' className="block px-4 py-2 text-black hover:bg-gray-200">Local Guides</Link>
                  <Link to='/resort' className="block px-4 py-2 text-black hover:bg-gray-200">Resort Bookings</Link>
                  <Link to='/advanture' className="block px-4 py-2 text-black hover:bg-gray-200">Adventure Activities</Link>
                </div>
              )}
            </div>

            <Link to='/about' className="text-black hover:text-[#2a9e8b]">About</Link>
            <Link to='/bookings' className="text-black hover:text-[#2a9e8b]">Bookings</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute left-0 z-10 w-full bg-[#052023] bg-opacity-[95%] shadow-md md:hidden top-16">
            <ul className="flex flex-col items-center py-5 space-y-6 font-semibold">
              <Link to='/home' className="text-[#ffffff] hover:text-[#2a9e8b]">Home</Link>

              {/* Mobile Service Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => {
                    setIsServiceOpen(!isServiceOpen);
                    navigate('/service');
                  }}
                  className="text-[#ffffff] hover:text-[#2a9e8b] flex items-center"
                >
                  Services
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                {isServiceOpen && (
                  <div className="w-48 mt-2 bg-white border rounded-lg shadow-lg">
                    <Link to='/trip-planning' className="block px-4 py-2 text-black hover:bg-gray-200">Trip Planning</Link>
                    <Link to='/tour-packages' className="block px-4 py-2 text-black hover:bg-gray-200">Tour Packages</Link>
                    <Link to='/vehicle-rentals' className="block px-4 py-2 text-black hover:bg-gray-200">Vehicle Rentals</Link>
                    <Link to='/local-guides' className="block px-4 py-2 text-black hover:bg-gray-200">Local Guides</Link>
                    <Link to='/resort-bookings' className="block px-4 py-2 text-black hover:bg-gray-200">Resort Bookings</Link>
                    <Link to='/adventure-activities' className="block px-4 py-2 text-black hover:bg-gray-200">Adventure Activities</Link>
                  </div>
                )}
              </div>

              <Link to='/about' className="text-[#ffffff] hover:text-[#2a9e8b]">About</Link>
              <Link to='/bookings' className="text-[#ffffff] hover:text-[#2a9e8b]">Bookings</Link>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
