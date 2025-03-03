import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../Components/User-Components/Navbar";
import Footer from "../../Components/User-Components/Footer";
import { Link } from "react-router-dom";

function Advanture() {
    const [selectedAdventure, setSelectedAdventure] = useState(null);
    const [filter, setFilter] = useState("All");

   const adventures = [
        
        {
            id: 1,
            name: "Trekking",
            location: "Himalayas, India",
            difficulty: "Hard",
            price: 150,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThOsXmspeQNXxnYrRCgJjrrRwqzBjRqBVx2g&s",
        },
        {
            id: 2,
            name: "Scuba Diving",
            location: "Goa, India",
            difficulty: "Medium",
            price: 120,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbV0Sw4NyZ3bwfn4qI_LWDuwP58BIxg_ZMQw&s",
        },
        {
            id: 3,
            name: "Paragliding",
            location: "Manali, India",
            difficulty: "Easy",
            price: 90,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfR-hGA3IW9twVUH_xkvh0RbMvLOafbpYVuQ&s",
        },
        {
            id: 4,
            name: "River Rafting",
            location: "Rishikesh, India",
            difficulty: "Medium",
            price: 100,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdEkkSWjA8g8rEuzlHLaDDzV_vpAsU-ooT2Q&s",
        },
        {
            id: 5,
            name: "Bungee Jumping",
            location: "Rishikesh, India",
            difficulty: "Hard",
            price: 180,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_puCW_y2o-50feT16OxrZdMxBPsOmRj2kFw&s",
        },
        {
            id: 6,
            name: "Hot Air Ballooning",
            location: "Jaipur, India",
            difficulty: "Easy",
            price: 80,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQklnewlNMCDhMBvvxvnfkxL28_31O2WlM24A&s",
        },

        
        {
            id: 7,
            name: "Skydiving",
            location: "Dubai, UAE",
            difficulty: "Hard",
            price: 300,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJuKq-_pcoZdmgubeAfgLXFXnuh2BbJn4yGw&s",
        },
        {
            id: 8,
            name: "Skiing",
            location: "Swiss Alps, Switzerland",
            difficulty: "Medium",
            price: 250,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpspRK_FCeFSkG8IeNYoQ9NGyzScRX2Uj6cA&s",
        },
        {
            id: 9,
            name: "Jungle Safari",
            location: "Serengeti, Tanzania",
            difficulty: "Easy",
            price: 200,
            image: "https://cdn.shopify.com/s/files/1/0629/0997/2700/files/image003_69742ce3-bb5d-4359-961a-f9b48ac0b40d_1024x1024.png?v=1677304799",
        },
        {
            id: 10,
            name: "White Water Rafting",
            location: "Grand Canyon, USA",
            difficulty: "Medium",
            price: 180,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJi-cx67ER8FJhJ5HXn_vcVqe33ALbEbglSA&s",
        },
        {
            id: 11,
            name: "Shark Cage Diving",
            location: "South Africa",
            difficulty: "Hard",
            price: 350,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvWnTkZwVZ7dOJUAIdz9OMBmn0uDibVaXdog&s",
        },
    ];

    const filteredAdventures = filter === "All" ? adventures : adventures.filter((adventure) => adventure.difficulty === filter);

    return (
        <div>
            <Navbar />
            <section className="relative px-6 py-16 text-center text-white bg-no-repeat bg-cover" style={{ backgroundImage: "url('https://himalayaguidenepal.com/wp-content/uploads/2023/12/Tourism-activities-in-nepal.jpg')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-70"></div>
                <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative z-10">
                    <h1 className="text-4xl font-bold md:text-5xl">Thrilling Adventures Await You!</h1>
                    <p className="mt-4 text-lg md:text-xl">Choose your adventure and create unforgettable memories.</p>
                </motion.div>
            </section>

            <div className="flex justify-center gap-4 my-6">
                {["All", "Easy", "Medium", "Hard"].map((level) => (
                    <button key={level} className={`px-4 py-2 text-white rounded ${filter === level ? "bg-blue-600" : "bg-gray-500 hover:bg-gray-700"}`} onClick={() => setFilter(level)}>
                        {level}
                    </button>
                ))}
            </div>

            <motion.div className="min-h-screen p-6 bg-gray-100" initial="hidden" animate="visible" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}>
                <div className="grid max-w-5xl grid-cols-1 gap-6 mx-auto sm:grid-cols-2 md:grid-cols-3">
                    {filteredAdventures.map((adventure) => (
                        <motion.div key={adventure.id} className="overflow-hidden bg-white rounded-lg shadow-lg" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                            <img src={adventure.image} alt={adventure.name} className="object-cover w-full h-48" />
                            <div className="p-4">
                                <h3 className="text-xl font-bold">{adventure.name}</h3>
                                <p className="text-gray-600">{adventure.location} | {adventure.difficulty} Level</p>
                                <p className="font-semibold text-blue-600">${adventure.price}/person</p>
                                <button className="w-full px-4 py-2 mt-3 text-white bg-blue-500 rounded hover:bg-blue-600" onClick={() => setSelectedAdventure(adventure)}>View Details</button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {selectedAdventure && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.3 }} className="max-w-md p-6 text-center bg-white rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold">{selectedAdventure.name}</h2>
                        <img src={selectedAdventure.image} alt={selectedAdventure.name} className="object-cover w-full h-48 mt-4 rounded" />
                        <p className="mt-2 text-gray-600">Location: {selectedAdventure.location}</p>
                        <p className="mt-1 text-gray-600">Difficulty: {selectedAdventure.difficulty}</p>
                        <p className="mt-1 font-semibold text-blue-600">Price: ${selectedAdventure.price}/person</p>
                        <div className="flex justify-around mt-4">
                            <button className="px-4 py-2 text-white bg-gray-600 rounded hover:bg-gray-700" onClick={() => setSelectedAdventure(null)}>Close</button>
                            <button className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"><Link to='/pay'>Book Now</Link></button>
                            <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"><Link to='/chat'>Chat</Link></button>
                        </div>
                    </motion.div>
                </div>
            )}

            <Footer />
        </div>
    );
}

export default Advanture;
