import React, { useState, useEffect } from "react";


import Navbar from "../../Components/User-Components/Navbar";
import Footer from "../../Components/User-Components/Footer";

function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch bookings from API or local storage (Replace with actual API call)
    const fetchedBookings = [
      { id: 1, type: "Destination", name: "Paris", date: "2025-03-15", status: "Confirmed" },
      { id: 2, type: "Vehicle", name: "SUV Rental", date: "2025-04-10", status: "Pending" },
      { id: 3, type: "Resort", name: "Beachside Villa", date: "2025-05-22", status: "Cancelled" },
      { id: 4, type: "Guide", name: "City Tour Guide", date: "2025-06-18", status: "Confirmed" },
      { id: 5, type: "Package", name: "Adventure Package", date: "2025-07-05", status: "Pending" },
    ];
    setBookings(fetchedBookings);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      
<Navbar/>
      <div className="container p-6 mx-auto">
        <h2 className="mb-6 text-3xl font-bold text-center text-blue-600">My Bookings</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full overflow-hidden bg-white rounded-lg shadow-md">
            <thead className="text-white bg-blue-600">
              <tr>
                <th className="px-6 py-3 text-left">Booking ID</th>
                <th className="px-6 py-3 text-left">Type</th>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Date</th>
                <th className="px-6 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.length > 0 ? (
                bookings.map((booking) => (
                  <tr key={booking.id} className="border-b hover:bg-gray-100">
                    <td className="px-6 py-3">{booking.id}</td>
                    <td className="px-6 py-3">{booking.type}</td>
                    <td className="px-6 py-3">{booking.name}</td>
                    <td className="px-6 py-3">{booking.date}</td>
                    <td className={`py-3 px-6 font-semibold ${
                      booking.status === "Confirmed" ? "text-green-600" :
                      booking.status === "Pending" ? "text-yellow-600" :
                      "text-red-600"
                    }`}>{booking.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="py-4 text-center text-gray-600">No bookings found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default Bookings;
