import React from 'react';
import Land from '/src/assets/Commonimg/land-img.png'

function Landing() {
  return (
    
      <>

        <div className='w-screen h-screen bg-no-repeat bg-cover' style={{ backgroundImage: `url(${Land})` }}>
            
            <div className='h-[100%] w-[100%] bg-black bg-opacity-70 flex justify-center'>

                <div className='h-[25%] md:h-[16%] w-[13%] md:w-[8%]'>
                    <img src="/src/assets/Commonimg/Logo.png" alt="error" />
                </div>
                
                <div className='h-[90%] w-[90%] flex items-end justify-center'>
                    <div className='h-[90%] w-[60%] flex flex-col justify-center text-center'>
                        <span className=''>
                            <p className='text-lg md:text-4xl font-semibold text-[#77f0f0]'>Its Time To</p>
                            <p className='font-bold text-[#24ba8d] text-4xl md:text-8xl'>EXPLORE</p>
                            <p className='text-xl md:text-6xl font-semibold text-[#f7f579]'>The World</p>
                        </span>
                        <p></p><br />
                        <span>
                            <p className='text-lg font-medium text-white'>The world is yours to explore.</p>
                            <p className='text-lg font-medium text-white'>Plan with ease, travel with joy, and make every moment count.</p>
                            <p className='text-lg font-medium text-white'>Welcome to GlobeTrek, your ultimate travel partner.</p>
                        </span>
                        <p></p><br />
                        <div className='h-[45px] w-full gap-12 flex justify-center items-center'>
                            <button className='bg-[#616161] h-[36px] md:h-[45px] w-[130px] md:w-[100px] rounded-2xl text-white text-sm md:text-base font-medium'>Sign Up</button>
                            <button className='bg-[#616161] h-[36px] md:h-[45px] w-[130px] md:w-[100px] rounded-2xl text-white text-sm md:text-base font-medium'>Login</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        
      </>
    
  )
}

export default Landing
