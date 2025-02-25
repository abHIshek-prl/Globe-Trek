import React from 'react';
import { motion } from 'framer-motion';
import Log from '../../assets/Commonimg/Log.png';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }} 
        className='flex items-center justify-center w-screen h-screen bg-no-repeat bg-cover'
        style={{ backgroundImage: `url(${Log})` }}
      >
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          transition={{ duration: 0.8, ease: "easeOut" }} 
          className='h-[70%] w-[45%] bg-[#00000053] flex justify-center'
        >
          <div className='h-90% w-[90%]'>
            <motion.h2 
              initial={{ y: -20, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.8 }} 
              className='text-2xl font-bold text-center text-white'
            >
              Welcome Back!!
            </motion.h2>

            <br />

            <motion.p 
              initial={{ y: -20, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.8, delay: 0.3 }} 
              className='text-base font-semibold text-center text-white'
            >
              Start a New <span className='text-[#22dfbd]'>Adventure</span>
            </motion.p>

            <br />

            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-3"
            >
              <label className="block text-base font-medium text-white">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 mt-1 text-sm bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mb-3"
            >
              <label className="block text-base font-medium text-white">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 mt-1 text-sm bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-2 mt-2 font-medium text-white bg-green-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <Link to='/aghome'>Login</Link>
            </motion.button>

            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.8, delay: 1 }} 
              className="mt-6 text-sm text-center"
            >
              <span className="text-white">Don't have an account? </span>
              <Link to='/register' className="font-medium text-green-600 hover:underline">Register Here</Link>
            </motion.div>

          </div>
        </motion.div>
      </motion.div>
    </>
  )
}

export default Login;
