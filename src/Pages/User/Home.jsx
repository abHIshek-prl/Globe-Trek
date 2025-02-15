import React from 'react'

import Footer from '../../Components/User-Components/Footer'
import Navbar from '../../Components/User-Components/Navbar'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      
        <Navbar/>
      <div className="w-full">
        
        <section className="bg-[#0b4f49] text-white text-center py-16 px-6">
          <h1 className="text-3xl font-bold md:text-5xl">
            Discover Your Next Adventure
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Find the perfect travel plan, tour packages, and vehicles tailored just for you.
          </p>
          <button className="px-6 py-3 mt-6 font-semibold text-black transition bg-yellow-400 rounded-lg shadow-lg hover:bg-yellow-500">
            Start Planning
          </button>
        </section>

        
        <section className="bg-[#f5fbea] py-10 px-4">
          <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto sm:grid-cols-2 md:grid-cols-3">
            
            <button className="p-6 transition bg-white shadow-xl rounded-xl hover:shadow-[#373737]">
              <h3 className="text-xl font-bold">Resorts</h3>
              <p className="mt-2 text-gray-600">
                Book your resorts based on your preferences, duration, and budget.
              </p>
            </button>

            
            <button className="p-6 transition bg-white shadow-xl rounded-xl hover:shadow-[#373737]">
              <h3 className="text-xl font-bold">Book Tour Packages</h3>
              <p className="mt-2 text-gray-600">
                Explore curated tours and packages from local experts.
              </p>
            </button>

            
            <button className="p-6 transition bg-white shadow-xl rounded-xl hover:shadow-[#373737]">
              <h3 className="text-xl font-bold">Vehicle Rentals</h3>
              <p className="mt-2 text-gray-600">
                Rent a vehicle with or without a driver for your trip.
              </p>
            </button>
          </div>

            <div className='flex items-center justify-center w-full h-[150px]'>
              <button className="px-6 py-3 mt-6 font-semibold text-black transition bg-yellow-400 rounded-lg shadow-lg hover:bg-yellow-500">
              <Link to='/service'>More</Link>
              </button>
            </div>
          
        </section>
      </div>

      <Footer/>
    </div>
  )
}

export default Home
