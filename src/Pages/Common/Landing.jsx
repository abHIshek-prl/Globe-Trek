import React from 'react';
import { motion } from 'framer-motion';
import Land from '/src/assets/Commonimg/land-img.png';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
      className="w-full h-screen overflow-hidden bg-no-repeat bg-cover" 
      style={{ backgroundImage: `url(${Land})` }}
    >
      <div className="flex flex-col w-full h-full bg-black bg-opacity-70">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="h-[25%] md:h-[16%] w-[13%] md:w-[8%]"
        >
          <img src="/src/assets/Commonimg/Logo.png" alt="GlobeTrek Logo" />
        </motion.div>

        <div className="flex items-center justify-center w-full h-full">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="w-[90%] md:w-[60%] flex flex-col justify-center text-left md:text-left"
          >
            <span>
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="text-lg md:text-4xl font-semibold text-[#77f0f0]"
              >
                It's Time To
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="font-bold text-[#24ba8d] text-4xl md:text-8xl"
              >
                EXPLORE
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="text-xl md:text-6xl font-semibold text-[#f7f579]"
              >
                The World
              </motion.p>
            </span>

            <br />
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <p className="text-lg font-medium text-white">The world is yours to explore.</p>
              <p className="text-lg font-medium text-white">Plan with ease, travel with joy, and make every moment count.</p>
              <p className="text-lg font-medium text-white">Welcome to GlobeTrek, your ultimate travel partner.</p>
            </motion.span>

            <br />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="h-[45px] w-full gap-6 flex justify-center md:justify-start items-center"
            >
              <motion.button 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.9 }}
                className="bg-[#616161] h-[36px] md:h-[45px] w-[130px] md:w-[100px] rounded-2xl text-white text-sm md:text-base font-medium"
              >
                <Link to='/register'>Sign up</Link>
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.9 }}
                className="bg-[#616161] h-[36px] md:h-[45px] w-[130px] md:w-[100px] rounded-2xl text-white text-sm md:text-base font-medium"
              >
                <Link to='/login'>Log in</Link>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Landing;
