import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../Components/User-Components/Navbar';
import Footer from '../../Components/User-Components/Footer';

function About() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  // FAQ Data
  const faqs = [
    { question: "What services do you offer?", answer: "We offer a variety of travel services, including trip planning, customizable tour packages, vehicle rentals (with or without drivers), guided tours, and secure online bookings." },
    { question: "How can I book a trip?", answer: "Booking is simple! Just browse our available destinations, choose your preferred package, select additional services like vehicle rentals or guided tours, and complete your payment securely through our platform." },
    { question: "Can I customize my travel itinerary?", answer: "Absolutely! We provide flexible trip planning options where you can customize destinations, duration, accommodations, and activities based on your preferences." },
    { question: "What types of vehicles are available for rent?", answer: "We offer a wide range of vehicles, including cars, SUVs, bikes, and travel vans. You can also choose between self-drive and chauffeur-driven options." },
    { question: "Do you provide international travel packages?", answer: "Yes! We offer both domestic and international travel packages. You can explore destinations worldwide and plan your dream trip hassle-free." },
    { question: "Is my payment secure on your platform?", answer: "Yes, we use Razorpay for secure transactions, ensuring a safe and seamless payment experience." },
    { question: "Can travel agencies collaborate with your platform?", answer: "Yes! We offer role-based access, allowing travel agencies to list their packages, manage bookings, and collaborate with travelers." },
    { question: "Do you provide customer support during the trip?", answer: "Yes! We have a dedicated support team available 24/7 to assist you with any travel-related concerns." },
    { question: "What are the cancellation and refund policies?", answer: "Our cancellation and refund policies vary depending on the travel package. You can check the specific terms in the booking details before confirming your trip." },
    { question: "How do I stay updated on new travel deals?", answer: "Subscribe to our newsletter or follow us on social media to stay informed about the latest travel offers and exclusive discounts!" }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 300); // Show FAQ section when scrolled down
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gray-100">
      <Navbar />

      {/* About Section */}
      <div className="flex items-center justify-center min-h-screen p-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }} 
          className="flex flex-col items-center w-full max-w-5xl gap-8 p-6 bg-white shadow-lg sm:p-8 rounded-xl md:flex-row"
        >
          {/* Text Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1, delay: 0.3 }} 
            className="text-center md:w-1/2 md:text-left"
          >
            <h2 className="mb-4 text-3xl font-bold text-black">
              <span className="text-black">ABOUT </span>
              <span className="text-blue-600">US</span>
            </h2>
            <p className="leading-relaxed text-gray-700">
              <strong>Welcome to our ultimate travel planning platform</strong>, where adventure meets convenience! Whether you're looking for a quick weekend getaway, a long vacation, or a customized tour package, we’ve got you covered.
              <br /><br />
              Our platform allows you to seamlessly plan trips, explore destinations, rent vehicles <span className="font-semibold">(with or without drivers)</span>, and book guided tours tailored to your preferences.
              <br /><br />
              With an easy-to-use interface, <span className="font-semibold">secure payment options</span>, and personalized recommendations, we ensure that your travel experience is hassle-free and unforgettable.
              <br /><br />
              Whether you're a solo traveler, a family, or a travel agency, our <span className="font-semibold text-blue-600">role-based features</span> provide the perfect tools to make every journey smooth and memorable. <span className="font-semibold">Let’s make your dream trip a reality! 🌍✨🚀</span>
            </p>
          </motion.div>

          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1, delay: 0.6 }} 
            className="flex justify-center md:w-1/2"
          >
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtrnw39Iq7Jw4oIEXhw9BFU_cVHbbLSVOh4wQhUB5MYccChubSA_k5F5kqEDmzwa-EKj8&usqp=CAU" 
              alt="Travel Adventure" 
              className="w-full max-w-xs shadow-lg sm:max-w-sm rounded-xl"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* FAQs Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} 
        transition={{ duration: 1 }} 
        className="max-w-5xl p-6 mx-auto mb-10 bg-white shadow-lg rounded-xl"
      >
        <h2 className="mb-6 text-3xl font-bold text-center text-blue-600">Frequently Asked Questions</h2>

        {/* Loop through FAQs */}
        {faqs.map((faq, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 30 }} 
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} 
            transition={{ duration: 0.5, delay: index * 0.1 }} 
            className="border-b border-gray-300"
          >
            <button 
              onClick={() => toggleFAQ(index)}
              className="flex items-center justify-between w-full py-4 text-lg font-semibold text-left text-gray-900 hover:text-blue-600 focus:outline-none"
            >
              {faq.question}
              <span className="text-blue-500">{openIndex === index ? '▲' : '▼'}</span>
            </button>
            {openIndex === index && (
              <p className="px-4 pb-4 text-gray-700">{faq.answer}</p>
            )}
          </motion.div>
        ))}
      </motion.div>

      <Footer />
    </div>
  );
}

export default About;
