import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/User-Components/Navbar";
import Footer from "../../Components/User-Components/Footer";
import Servc from "../../assets/UserImg/service-bg.png"

function Service() {
  return (
    <div>
      <div className="h-screen max-w-screen ">
        <Navbar />

        
        <div className="h-[89%] w-full  bg-cover bg-no-repeat" style={{ backgroundImage: `url(${Servc})` }}>
          <div className="h-full w-full bg-[#000000af] text-center flex flex-col justify-center items-center">
            <p className="text-2xl font-semibold text-white">
              Discover tailored travel solutions that fit your needs.
            </p>
            <p className="text-2xl font-semibold text-white">
              Plan and book effortlessly!
            </p>
          </div>
        </div>

        
        <div className="w-full min-h-screen p-8 bg-gray-100">
          <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">
            Our Travel Solutions
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            
         
            <div className="p-6 text-center transition-all duration-300 bg-white shadow-lg rounded-2xl hover:shadow-black">
              <button>
              <Link to='/plan'>
              <div className="mb-3 text-5xl">🗺️</div>
              <h3 className="text-xl font-semibold text-gray-700">
                Trip Planning
              </h3>
              <p className="mt-2 text-gray-600">
                Plan customized trips with ease.
              </p>
              </Link>
              </button>
            </div>
           

            <div className="p-6 text-center transition-all duration-300 bg-white shadow-lg rounded-2xl hover:shadow-black">
              <button>
                <Link to='/package'>
              <div className="mb-3 text-5xl">🏝️</div>
              <h3 className="text-xl font-semibold text-gray-700">
                Tour Packages
              </h3>
              <p className="mt-2 text-gray-600">
                Explore curated tours for every destination.
              </p>
              </Link>
              </button>
            </div>

            <div className="p-6 text-center transition-all duration-300 bg-white shadow-lg rounded-2xl hover:shadow-black">
              <button>
                <Link to='vehicle'>
                <div className="mb-3 text-5xl">🚗</div>
              <h3 className="text-xl font-semibold text-gray-700">
                Vehicle Rentals
              </h3>
              <p className="mt-2 text-gray-600">
                Rent vehicles with or without drivers.
              </p>
              </Link>
              </button>
            </div>

            <div className="p-6 text-center transition-all duration-300 bg-white shadow-lg rounded-2xl hover:shadow-black">
              <button>
                <Link to='/guid'>
              <div className="mb-3 text-5xl">👨‍💼</div>
              <h3 className="text-xl font-semibold text-gray-700">
                Local Guides
              </h3>
              <p className="mt-2 text-gray-600">
                Connect with expert local guides.
              </p>
              </Link>
              </button>
            </div>

            <div className="p-6 text-center transition-all duration-300 bg-white shadow-lg rounded-2xl hover:shadow-black">
              <button>
                <Link to='/resort'>
              <div className="mb-3 text-5xl">🏨</div>
              <h3 className="text-xl font-semibold text-gray-700">
                Resort Bookings
              </h3>
              <p className="mt-2 text-gray-600">
                Find and book the best accommodations.
              </p>
              </Link>
              </button>
            </div>

            <div className="p-6 text-center transition-all duration-300 bg-white shadow-lg rounded-2xl hover:shadow-black">
             <button>
             <div className="mb-3 text-5xl">⛰️</div>
              <h3 className="text-xl font-semibold text-gray-700">
                Adventure Activities
              </h3>
              <p className="mt-2 text-gray-600">
                Discover thrilling adventures worldwide.
              </p>
             </button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Service;
