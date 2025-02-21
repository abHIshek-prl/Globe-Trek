import React from 'react'
import Log from '../../assets/Commonimg/Log.png'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
        <div className='flex items-center justify-center w-screen h-screen bg-no-repeat bg-cover' style={{ backgroundImage: `url(${Log})` }}>
            <div className='h-[70%] w-[45%] bg-[#00000053] flex justify-center'>
                <div className='h-90% w-[90%]'>

                    <h2 className='text-2xl font-bold text-center text-white'>Welcome Back!!</h2>
                    <p></p><br />
                    <p className='text-base font-semibold text-center text-white'>Start a New <span className='text-[#22dfbd]'>Advanture</span></p>
                    <p></p><br />
                        <div className="mb-3">
                            <label className="block text-base font-medium text-white">Email Address</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-3 py-2 mt-1 text-sm bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        <div className="mb-3">
                            <label className="block text-base font-medium text-white">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full px-3 py-2 mt-1 text-sm bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>
                        
                        <button
                        
                            type="submit"
                            className="w-full py-2 mt-2 font-medium text-white bg-green-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                            <Link to='/chat'>
                                Login
                            </Link>
                        </button>

                        <div className="mt-6 text-sm text-center">
                            <span className="text-white">Don't have an account? </span>
                            <a href="/login" className="font-medium text-green-600 hover:underline">
                                <Link to='/register'>Register Here</Link>
                            </a>
                        </div>
                
                </div>
            </div>
        </div>
    </>
  )
}

export default Login

