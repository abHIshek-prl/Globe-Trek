import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../../Components/User-Components/Navbar";
import Footer from "../../Components/User-Components/Footer";

function Guide() {
    const [selectedGuide, setSelectedGuide] = useState(null);
    const [showAnimation, setShowAnimation] = useState(false);

    useEffect(() => {
        if (!localStorage.getItem("guideAnimationShown")) {
            setShowAnimation(true);
            localStorage.setItem("guideAnimationShown", "true");
        }
    }, []);

    const guides = [
        
        {
            id: 1,
            name: "John Doe",
            location: "Paris, France",
            experience: "5 Years",
            languages: "English, French",
            price: 100,
            description: "Expert in Parisian history and architecture.",
            image: "https://img.freepik.com/premium-vector/male-avatar-icon-unknown-anonymous-person-default-avatar-profile-icon-social-media-user-business-man-man-profile-silhouette-isolated-white-background-vector-illustration_735449-122.jpg",
        },
        {
            id: 2,
            name: "Aisha Khan",
            location: "Bali, Indonesia",
            experience: "8 Years",
            languages: "English, Indonesian",
            price: 80,
            description: "Specializes in cultural and adventure tours.",
            image: "https://img.freepik.com/premium-vector/male-avatar-icon-unknown-anonymous-person-default-avatar-profile-icon-social-media-user-business-man-man-profile-silhouette-isolated-white-background-vector-illustration_735449-122.jpg",
        },
        {
            id: 3,
            name: "Carlos Fernandez",
            location: "Madrid, Spain",
            experience: "6 Years",
            languages: "English, Spanish",
            price: 90,
            description: "Great for historical and gastronomic tours.",
            image: "https://img.freepik.com/premium-vector/male-avatar-icon-unknown-anonymous-person-default-avatar-profile-icon-social-media-user-business-man-man-profile-silhouette-isolated-white-background-vector-illustration_735449-122.jpg",
        },
        {
            id: 4,
            name: "Hiroshi Tanaka",
            location: "Tokyo, Japan",
            experience: "10 Years",
            languages: "Japanese, English",
            price: 120,
            description: "Specialist in Tokyo’s modern and traditional culture.",
            image: "https://img.freepik.com/premium-vector/male-avatar-icon-unknown-anonymous-person-default-avatar-profile-icon-social-media-user-business-man-man-profile-silhouette-isolated-white-background-vector-illustration_735449-122.jpg",
        },
        {
            id: 5,
            name: "Luca Romano",
            location: "Rome, Italy",
            experience: "15 Years",
            languages: "Italian, English",
            price: 110,
            description: "Expert in Rome’s ancient history and architecture.",
            image: "https://img.freepik.com/premium-vector/male-avatar-icon-unknown-anonymous-person-default-avatar-profile-icon-social-media-user-business-man-man-profile-silhouette-isolated-white-background-vector-illustration_735449-122.jpg",
        },
    
        
        {
            id: 6,
            name: "Ravi Sharma",
            location: "Jaipur, India",
            experience: "10 Years",
            languages: "Hindi, English",
            price: 70,
            description: "Expert in Rajasthan’s rich history, forts, and culture.",
            image: "https://img.freepik.com/premium-vector/male-avatar-icon-unknown-anonymous-person-default-avatar-profile-icon-social-media-user-business-man-man-profile-silhouette-isolated-white-background-vector-illustration_735449-122.jpg",
        },
        {
            id: 7,
            name: "Meera Nair",
            location: "Kerala, India",
            experience: "7 Years",
            languages: "Malayalam, English",
            price: 85,
            description: "Specialist in Kerala’s backwaters, wildlife, and culture.",
            image: "https://img.freepik.com/premium-vector/male-avatar-icon-unknown-anonymous-person-default-avatar-profile-icon-social-media-user-business-man-man-profile-silhouette-isolated-white-background-vector-illustration_735449-122.jpg",
        },
        {
            id: 8,
            name: "Vikram Singh",
            location: "Varanasi, India",
            experience: "12 Years",
            languages: "Hindi, Sanskrit, English",
            price: 90,
            description: "Spiritual and historical guide for Varanasi’s temples and ghats.",
            image: "https://img.freepik.com/premium-vector/male-avatar-icon-unknown-anonymous-person-default-avatar-profile-icon-social-media-user-business-man-man-profile-silhouette-isolated-white-background-vector-illustration_735449-122.jpg",
        },
        {
            id: 9,
            name: "Ananya Iyer",
            location: "Mumbai, India",
            experience: "6 Years",
            languages: "Marathi, Hindi, English",
            price: 75,
            description: "Expert in Bollywood tours and hidden gems.",
            image: "https://img.freepik.com/premium-vector/male-avatar-icon-unknown-anonymous-person-default-avatar-profile-icon-social-media-user-business-man-man-profile-silhouette-isolated-white-background-vector-illustration_735449-122.jpg",
        },
        {
            id: 10,
            name: "Amit Patel",
            location: "Goa, India",
            experience: "9 Years",
            languages: "Konkani, English, Hindi",
            price: 80,
            description: "Specialist in beach and nightlife tours.",
            image: "https://img.freepik.com/premium-vector/male-avatar-icon-unknown-anonymous-person-default-avatar-profile-icon-social-media-user-business-man-man-profile-silhouette-isolated-white-background-vector-illustration_735449-122.jpg",
        },
        {
            id: 11,
            name: "Niharika Das",
            location: "Delhi, India",
            experience: "8 Years",
            languages: "Hindi, English",
            price: 85,
            description: "Expert in Mughal architecture and heritage walks.",
            image: "https://img.freepik.com/premium-vector/male-avatar-icon-unknown-anonymous-person-default-avatar-profile-icon-social-media-user-business-man-man-profile-silhouette-isolated-white-background-vector-illustration_735449-122.jpg",
        },
        {
            id: 12,
            name: "Tenzing Dorjee",
            location: "Ladakh, India",
            experience: "10 Years",
            languages: "Ladakhi, Hindi, English",
            price: 100,
            description: "Adventure guide for Ladakh’s trekking and monasteries.",
            image: "https://img.freepik.com/premium-vector/male-avatar-icon-unknown-anonymous-person-default-avatar-profile-icon-social-media-user-business-man-man-profile-silhouette-isolated-white-background-vector-illustration_735449-122.jpg ",
        },
        {
            id: 13,
            name: "Rohan Thakur",
            location: "Manali, India",
            experience: "7 Years",
            languages: "Hindi, English",
            price: 90,
            description: "Specialist in Himalayan trekking and adventure sports.",
            image: "https://img.freepik.com/premium-vector/male-avatar-icon-unknown-anonymous-person-default-avatar-profile-icon-social-media-user-business-man-man-profile-silhouette-isolated-white-background-vector-illustration_735449-122.jpg ",
        },
        {
            id: 14,
            name: "Aryan Verma",
            location: "Rishikesh, India",
            experience: "5 Years",
            languages: "Hindi, English",
            price: 75,
            description: "Spiritual and yoga tour guide in Rishikesh.",
            image: "https://img.freepik.com/premium-vector/male-avatar-icon-unknown-anonymous-person-default-avatar-profile-icon-social-media-user-business-man-man-profile-silhouette-isolated-white-background-vector-illustration_735449-122.jpg",
        },]

    return (
        <>
            <Navbar />

            
            <motion.section
                className="relative px-6 py-16 text-center text-white bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJgiv8vHgbbH3jamqV3sxm20kvpR-4IATDMA&s)`, backgroundPosition: "center" }}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative z-10">
                    <motion.h1
                        className="text-3xl font-bold md:text-5xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.3 }}
                    >
                        Meet Expert Travel Guides for Your Next Adventure
                    </motion.h1>
                    <motion.p
                        className="mt-4 text-lg md:text-xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.5 }}
                    >
                        Find the perfect travel plan, tour packages, and vehicles tailored just for you.
                    </motion.p>
                </div>
            </motion.section>

            
            <div className="min-h-screen p-6 bg-gray-100">
                <motion.h2
                    className="mb-6 text-3xl font-bold text-center text-blue-600"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    Travel Guides
                </motion.h2>
                <motion.div
                    className="grid max-w-6xl grid-cols-1 gap-6 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {guides.map((guide, index) => (
                        <motion.div
                            key={guide.id}
                            className="overflow-hidden bg-white rounded-lg shadow-lg"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}
                        >
                            <img src={guide.image} alt={guide.name} className="object-cover w-full h-48" />
                            <div className="p-4">
                                <h3 className="text-xl font-bold">{guide.name}</h3>
                                <p className="text-gray-600">{guide.location} | {guide.experience}</p>
                                <p className="text-gray-600">Languages: {guide.languages}</p>
                                <p className="font-semibold text-blue-600">${guide.price}/day</p>
                                <button className="w-full px-4 py-2 mt-3 text-white bg-blue-500 rounded hover:bg-blue-600" onClick={() => setSelectedGuide(guide)}>View Details</button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

           
            {selectedGuide && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedGuide(null)}
                >
                    <motion.div
                        className="relative w-full max-w-lg p-6 bg-white rounded-lg shadow-lg"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="absolute text-gray-600 top-2 right-2 hover:text-red-500" onClick={() => setSelectedGuide(null)}>✖</button>
                        <img src={selectedGuide.image} alt={selectedGuide.name} className="w-24 h-24 mx-auto rounded-full" />
                        <h3 className="mt-4 text-2xl font-bold text-center">{selectedGuide.name}</h3>
                        <p className="text-center text-gray-600">{selectedGuide.location}</p>
                        <p className="mt-2 text-gray-700">{selectedGuide.description}</p>
                        <p className="mt-2 text-gray-600"><strong>Experience:</strong> {selectedGuide.experience}</p>
                        <p className="text-gray-600"><strong>Languages:</strong> {selectedGuide.languages}</p>
                        <p className="mt-2 text-lg font-semibold text-blue-600">Price: ${selectedGuide.price}/day</p>

                        <div className="flex justify-center mt-4 space-x-4">
                            <button className="px-4 py-2 text-white bg-gray-500 rounded hover:bg-gray-600" onClick={() => setSelectedGuide(null)}>Close</button>
                            <Link to='/pay' className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600">Book Now</Link>
                            <Link to='/chat' className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Chat</Link>
                        </div>
                    </motion.div>
                </motion.div>
            )}

            <Footer />
        </>
    );
}

export default Guide;
