import React, { useState } from "react";
import { Link } from "react-router-dom";
import Resrt from "../../assets/UserImg/resrt.png";
import Navbar from "../../Components/User-Components/Navbar";
import Footer from "../../Components/User-Components/Footer";

function Resort() {
    const [selectedResort, setSelectedResort] = useState(null);

    const resorts = [
        {
            id: 1,
            name: "Ocean View Resort",
            location: "Maldives",
            price: 250,
            description: "A luxurious beachside resort with stunning ocean views and world-class amenities.",
            activities: ["Infinity Pool", "Campfire", "Private Beach", "Water Sports"],
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNEZTBye7B_2VVTStY1lmP3zLifKD9ppJu_w&s",
        },
        {
            id: 2,
            name: "Mountain Escape",
            location: "Switzerland",
            price: 300,
            description: "Escape to the mountains and enjoy breathtaking views with cozy accommodations.",
            activities: ["Skiing", "Campfire", "Spa & Wellness", "Playground"],
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrTxwNuZqkFQQfuXKGUXxKl9e8KXW5zigH0g&s",
        },
        {
            id: 3,
            name: "Forest Retreat",
            location: "Bali",
            price: 200,
            description: "A peaceful resort surrounded by lush greenery, perfect for relaxation and adventure.",
            activities: ["Yoga Retreat", "Hiking", "Campfire", "Swimming Pool"],
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaCUeiNaQbxhyTl3tStnfMyhE0vh_f9VZeDQ&s",
        },
        {
            id: 4,
            name: "Leela Kovalam Resort",
            location: "Kovalam, Kerala",
            price: 180,
            description: "A luxurious cliff-top resort offering breathtaking views of the Arabian Sea.",
            activities: ["Ayurvedic Spa", "Private Beach", "Infinity Pool"],
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo0Y_ptTFpDuQyZkpDPbYg0wqJ-dWR9gG92w&s",
        },
        {
            id: 5,
            name: "The Zuri Kumarakom",
            location: "Kumarakom, Kerala",
            price: 220,
            description: "A five-star resort offering a serene lakeside retreat with a blend of nature and luxury.",
            activities: ["Houseboat Rides", "Spa", "Backwater Cruise"],
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTveF_o2f4h0xh750lx6U7ZLGMmakDbxeLvgw&s",
        },
        {
            id: 6,
            name: "Taj Lake Palace",
            location: "Udaipur, Rajasthan",
            price: 450,
            description: "A stunning heritage palace floating on Lake Pichola, offering a royal experience.",
            activities: ["Luxury Dining", "Boat Rides", "Spa & Wellness"],
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqRP6lMqTtlNWBT0LqhMFoT5em7RzNnFpS6Q&s",
        },
        {
            id: 7,
            name: "Marari Beach Resort",
            location: "Mararikulam, Kerala",
            price: 160,
            description: "An eco-friendly beach resort offering an authentic Kerala coastal experience.",
            activities: ["Village Walks", "Yoga & Meditation", "Seafood Delicacies"],
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3enuget3qv_SuT1FTq3si859nojhUq2BoKA&s",
        },
        {
            id: 8,
            name: "The Oberoi Amarvilas",
            location: "Agra, Uttar Pradesh",
            price: 400,
            description: "A luxurious resort offering uninterrupted views of the Taj Mahal.",
            activities: ["Luxury Dining", "Heritage Tours", "Spa & Wellness"],
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9VelxyGwQnAHaC60QESSa4Mxsu-nWL_mOyw&s",
        },
        {
            id: 9,
            name: "Poovar Island Resort",
            location: "Poovar, Kerala",
            price: 190,
            description: "A stunning island resort offering floating cottages and a serene beach escape.",
            activities: ["Backwater Cruise", "Floating Cottages", "Nature Walks"],
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDDufcDOynIGEFAZCj2i9c8U21e-OUT1JUUQ&s",
        },
        {
            id: 10,
            name: "The Raviz Kovalam",
            location: "Trivandrum, Kerala",
            price: 210,
            description: "A five-star beach resort offering a mix of traditional Kerala charm and modern luxury.",
            activities: ["Ayurvedic Spa", "Infinity Pool", "Sunset Views"],
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSvm3poOBHpIhMIiczo02r8tlNC0XMQKZiFw&s",
        },
    ];

    return (
      <>
          <Navbar />

          <section
              className="relative px-6 py-16 text-center text-white bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${Resrt})` }}
          >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="relative z-10">
                  <h1 className="text-3xl font-bold md:text-5xl">Luxury Resorts & Unforgettable Stays!</h1>
                  <p className="mt-4 text-lg md:text-xl">
                      Find the perfect travel plan, tour packages, and vehicles tailored just for you.
                  </p>
              </div>
          </section>

          <div className="min-h-screen p-6 bg-gray-100">
              <h2 className="mb-6 text-3xl font-bold text-center text-blue-600">Discover Your Perfect Getaway –</h2>

              <div className="grid max-w-5xl grid-cols-1 gap-6 mx-auto md:grid-cols-3 sm:grid-cols-2">
                  {resorts.map((resort) => (
                      <div key={resort.id} className="overflow-hidden bg-white rounded-lg shadow-lg">
                          <img src={resort.image} alt={resort.name} className="object-cover w-full h-48" />
                          <div className="p-4">
                              <h3 className="text-xl font-bold">{resort.name}</h3>
                              <p className="text-gray-600">{resort.location}</p>
                              <p className="font-semibold text-blue-600">${resort.price}/night</p>
                              <button
                                  className="w-full px-4 py-2 mt-3 text-white bg-blue-500 rounded"
                                  onClick={() => setSelectedResort(resort)}
                              >
                                  View Details
                              </button>
                          </div>
                      </div>
                  ))}
              </div>
          </div>

          {/* Resort Details Modal */}
          {selectedResort && (
              <div className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
                  <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                      <button
                          className="absolute text-xl text-red-500 top-2 right-2"
                          onClick={() => setSelectedResort(null)}
                      >
                          ✕
                      </button>
                      <img
                          src={selectedResort.image}
                          alt={selectedResort.name}
                          className="object-cover w-full h-40 rounded"
                      />
                      <h3 className="mt-4 text-2xl font-bold">{selectedResort.name}</h3>
                      <p className="text-gray-600">{selectedResort.location}</p>
                      <p className="mt-2">{selectedResort.description}</p>
                      <p className="mt-2 font-bold text-blue-600">${selectedResort.price}/night</p>

                      <h4 className="mt-3 font-semibold">Activities:</h4>
                      <ul className="ml-4 list-disc">
                          {selectedResort.activities.map((activity, index) => (
                              <li key={index} className="text-gray-700">
                                  {activity}
                              </li>
                          ))}
                      </ul>

                      <div className="flex justify-between gap-2 mt-4">
                      <button
                            className="w-full px-4 py-2 text-white bg-gray-600 rounded hover:bg-gray-700"
                            onClick={() => setSelectedResort(null)}
                        >
                            Close
                        </button>
                        <button className="w-full px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700">
                            <Link to='/pay'>Book Now</Link>
                        </button>
                        <button
                            className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                            
                        >
                            <Link to='/chat'>Chat</Link>
                        </button>
                        
</div>
                  </div>
              </div>
          )}

          <Footer />
      </>
  );
}

export default Resort;