import React from 'react';
import Land from '/src/assets/Commonimg/land-img.png';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <>
      <div 
        className="w-full h-screen overflow-hidden bg-no-repeat bg-cover" 
        style={{ backgroundImage: `url(${Land})` }}
      >
        <div className="flex h-full bg-black flex-colw-full bg-opacity-70">
          <div className="h-[25%] md:h-[16%] w-[13%] md:w-[8%]">
            <img src="/src/assets/Commonimg/Logo.png" alt="GlobeTrek Logo" />
          </div>

          <div className="flex items-center justify-center w-full h-full">
            <div className="w-[90%] md:w-[60%] flex flex-col justify-center text-center md:text-left">
              <span>
                <p className="text-lg md:text-4xl font-semibold text-[#77f0f0]">It's Time To</p>
                <p className="font-bold text-[#24ba8d] text-4xl md:text-8xl">EXPLORE</p>
                <p className="text-xl md:text-6xl font-semibold text-[#f7f579]">The World</p>
              </span>

              <br />
              <span>
                <p className="text-lg font-medium text-white">The world is yours to explore.</p>
                <p className="text-lg font-medium text-white">Plan with ease, travel with joy, and make every moment count.</p>
                <p className="text-lg font-medium text-white">Welcome to GlobeTrek, your ultimate travel partner.</p>
              </span>

              <br />
              <div className="h-[45px] w-full gap-6 flex justify-center md:justify-start items-center">
                <button className="bg-[#616161] h-[36px] md:h-[45px] w-[130px] md:w-[100px] rounded-2xl text-white text-sm md:text-base font-medium">
                  <Link to='/register'>Sign up</Link>
                </button>
                <button className="bg-[#616161] h-[36px] md:h-[45px] w-[130px] md:w-[100px] rounded-2xl text-white text-sm md:text-base font-medium">
                <Link to='/login'>Log in</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
