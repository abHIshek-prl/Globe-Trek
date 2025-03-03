import React, { useState } from "react";
import AgNavbar from "../../Components/Agncy-Components/AgNavbar";
import { motion } from "framer-motion";
import AgFooter from "../../Components/Agncy-Components/AgFooter";

function AgAbout() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What services does this platform offer for travel agencies?",
            answer: "Our platform allows agencies to list packages, vehicles, resorts, and activities, helping them reach more customers and manage bookings efficiently.",
        },
        {
            question: "How can a travel agency register?",
            answer: "Agencies can sign up through our registration page, provide their business details, and start adding services immediately.",
        },
        {
            question: "Is there a fee to list our services?",
            answer: "Basic listings are free! However, we offer premium features for better visibility and promotion.",
        },
        {
            question: "Can agencies manage their listings?",
            answer: "Yes, agencies can update, modify, or remove their listings anytime through the dashboard.",
        },
        {
            question: "How does the booking system work?",
            answer: "Customers browse services, make bookings, and complete payments. Agencies receive notifications and manage bookings via their dashboard.",
        },
        {
            question: "Can we set our own pricing for services?",
            answer: "Yes! Travel agencies have full control over pricing for their packages, vehicles, and other services.",
        },
        {
            question: "What kind of travel packages can we list?",
            answer: "You can list one-day tours, multi-day trips, adventure packages, guided tours, and customized itineraries.",
        },
        {
            question: "Is there a way to promote our listings?",
            answer: "Yes! We offer featured listings and promotional tools to enhance your visibility and attract more customers.",
        },
        {
            question: "Do you provide analytics for agency performance?",
            answer: "Yes, agencies can track bookings, customer preferences, and engagement metrics to optimize their offerings.",
        },
        {
            question: "What payment methods are available for customers?",
            answer: "Customers can pay via Razorpay, credit/debit cards, UPI, and other secure payment methods.",
        },
        {
            question: "Is customer support available for agencies?",
            answer: "Absolutely! We offer dedicated support to assist agencies with any technical or operational queries.",
        },
        {
            question: "Can we add seasonal discounts or offers?",
            answer: "Yes! Agencies can create special offers, discounts, and promotional deals to attract more customers.",
        },
    ];

    return (
        <>
            <div className="bg-gray-100">
               
                <AgNavbar />

               
                <section className="container px-6 py-12 mx-auto">
                    <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg md:flex-row">
                        
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="p-6 md:w-1/2"
                        >
                            <h1 className="mb-4 text-3xl font-bold text-gray-800">Empower Your Travel Business</h1>
                            <p className="text-gray-600">
                                Our platform connects travel agencies with travelers looking for the best experiences.
                                Easily list your travel packages, rental vehicles, adventure activities, and premium
                                resorts. Expand your reach and grow your business with seamless booking management.
                            </p>
                            <p className="mt-4 text-gray-600">Join today and showcase your services to a wider audience!</p>
                        </motion.div>

                        
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex justify-center p-6 md:w-1/2"
                        >
                            <img
                                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
                                alt="Travel Agency"
                                className="w-full max-w-md rounded-lg shadow-lg"
                            />
                        </motion.div>
                    </div>
                </section>

                
                <section className="container px-6 py-12 mx-auto">
                    <h2 className="mb-6 text-3xl font-bold text-center text-blue-600">Frequently Asked Questions</h2>

                    <div className="max-w-3xl p-6 mx-auto bg-white rounded-lg shadow-lg">
                        {faqs.map((faq, index) => (
                            <div key={index} className="py-4 border-b">
                                <button
                                    className="flex justify-between w-full font-semibold text-left text-gray-800"
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                >
                                    {faq.question}
                                    <span className="text-blue-600">{openIndex === index ? "▲" : "▼"}</span>
                                </button>
                                {openIndex === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <AgFooter />
        </>
    );
}

export default AgAbout;
