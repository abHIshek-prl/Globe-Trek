import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AgNavbar from '../../Components/Agncy-Components/AgNavbar';
import AgFooter from '../../Components/Agncy-Components/AgFooter';

function AgencyHome() {
  const [bookings] = useState([
    { id: 1, date: '2025-03-05', item: 'Luxury Resort', customer: 'John Doe', details: '5-star resort with all amenities'},
    { id: 2, date: '2025-03-06', item: 'Guided Tour', customer: 'Jane Smith', details: 'City tour with a professional guide'},
    { id: 3, date: '2025-03-07', item: 'Vehicle Rental', customer: 'David Brown', details: 'SUV rental with driver included' },
  ]);
  const [showBookings, setShowBookings] = useState(false);
  const [showMoreDetails, setShowMoreDetails] = useState(false);

  return (
    <>
      <div>
        <AgNavbar />

        
        <motion.section
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative flex flex-col items-center justify-center h-[60vh] text-white bg-no-repeat bg-cover"
          style={{
            backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhhxHonUG6rIwSRTZf8h5ee1-mXI4v-ATTaH6fKA1ePqdrg28UJBaG7LFGqpJJwr9DlXw&usqp=CAU')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="relative text-center">
            <h1 className="text-4xl font-bold md:text-5xl">Welcome to Your Agency</h1>
            <p className="mt-4 text-lg md:text-xl">Manage your travel offerings seamlessly.</p>
          </motion.div>
        </motion.section>

        
        <div className="container px-6 mx-auto my-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-2"
          >
            {[
  { title: "Add Package", description: "Create new travel packages", link: "/agpackage" },
  { title: "Add Guide", description: "Register professional tour guides", link: "/agguid" },
  { title: "Add Resort", description: "List new resorts for travelers", link: "/agresort" },
  { title: "View All Bookings", description: "Manage customer bookings", action: () => setShowBookings(!showBookings) }
].map((item, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 * index, duration: 0.6 }}
    className="p-6 text-center transition-transform transform bg-white rounded-lg shadow-lg cursor-pointer hover:scale-105 hover:shadow-2xl"
    onClick={item.action ? item.action : null}
  >
    {item.link ? (
      <Link to={item.link} className="block">
        <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
        <p className="mt-2 text-gray-600">{item.description}</p>
      </Link>
    ) : (
      <>
        <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
        <p className="mt-2 text-gray-600">{item.description}</p>
      </>
    )}
  </motion.div>
))}

          </motion.div>
          <p></p><br />
          <section className='flex items-center justify-center w-full h-16'>
              <button className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"><Link to='/provide'>More</Link></button>
          </section>
          
          {showBookings && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="flex justify-center mt-12">
              <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-lg">
                <h2 className="mb-4 text-2xl font-semibold text-center text-gray-800">All Bookings</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="px-4 py-2">Date</th>
                        <th className="px-4 py-2">Booking Item</th>
                        <th className="px-4 py-2">Customer</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookings.map((booking) => (
                        <tr key={booking.id} className="border-t">
                          <td className="px-4 py-2">{booking.date}</td>
                          <td className="px-4 py-2">{booking.item}</td>
                          <td className="px-4 py-2">{booking.customer}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-center mt-4">
                  <button onClick={() => setShowMoreDetails(!showMoreDetails)} className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
                    {showMoreDetails ? 'Hide Details' : 'More'}
                  </button>
                </div>
                {showMoreDetails && (
                  <div className="p-4 mt-6 bg-gray-100 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-800">Detailed Booking Information</h3>
                    {bookings.map((booking) => (
                      <div key={booking.id} className="p-3 mt-2 bg-white rounded shadow">
                        <p><strong>Date:</strong> {booking.date}</p>
                        <p><strong>Item:</strong> {booking.item}</p>
                        <p><strong>Customer:</strong> {booking.customer}</p>
                        <p><strong>Details:</strong> {booking.details}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </div>

        
        <AgFooter />
      </div>
    </>
  );
}

export default AgencyHome;
