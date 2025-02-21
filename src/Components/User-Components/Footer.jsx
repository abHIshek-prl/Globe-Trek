import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='max-w-full'>
       <footer className="bg-[#0b4f49] text-white py-10 px-5">
      <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto text-center sm:grid-cols-2 md:grid-cols-3 md:text-left">
        
        {/* About Section */}
        <div className='flex flex-col items-center justify-center'>
          <h3 className="mb-2 text-xl font-bold">About Globe-Trek</h3>
          <p className="text-gray-300">
            Your one-stop travel platform for planning trips, booking tours, and renting vehicles.
          </p>
          <div className='h-[50%] w-[40%]'><img src="/src/assets/Commonimg/Logo.png" alt="" /></div>
          
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-2 text-xl font-bold">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="transition hover:text-yellow-400"><Link to='/home'>Home</Link></a></li>
            <li><a href="#" className="transition hover:text-yellow-400"><Link to='/service'>Service</Link></a></li>
            <li><a href="#" className="transition hover:text-yellow-400"><Link to='/about'>About</Link></a></li>
            <li><a href="#" className="transition hover:text-yellow-400"><Link to='/bookings'>Bookings</Link></a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="mb-2 text-xl font-bold">Contact Us</h3>
          <p>Email: support@globe-trek.com</p>
          <p>Phone: +123 456 7890</p>
          <div className="flex justify-center mt-3 space-x-4 md:justify-start">
            <a href="#" className="transition hover:text-yellow-400">
              <i className="text-2xl fab fa-facebook"></i>
            </a>
            <a href="#" className="transition hover:text-yellow-400">
              <i className="text-2xl fab fa-twitter"></i>
            </a>
            <a href="#" className="transition hover:text-yellow-400">
              <i className="text-2xl fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="pt-4 mt-8 text-sm text-center text-gray-400 border-t border-gray-500">
        © {new Date().getFullYear()} Globe-Trek. All rights reserved.
      </div>
    </footer>
    </div>
  )
}

export default Footer

