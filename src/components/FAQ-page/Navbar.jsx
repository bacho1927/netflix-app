import React from "react"
import logo from "../../img/netflix-logo.png"
import { Link } from "react-router-dom"
function Navbar() {
    return (
        <div className="bg-black">
            <nav className="bg-black flex justify-between mx-auto items-center max-w-[70%]  min-w-[500px]">
                <div className="flex items-center relative ">
                    <a href="/" className="">
                        <img src={logo} alt="netflix-logo" className='w-28 ' />

                    </a>
                    <div className="bg-gray-300 absolute h-6 w-[1px] left-[122px] top-5 "></div>
                    <Link to="/" className="text-white  font-semibold mx-8 text-md">Help Center</Link>
                </div>
                <div className="text-white flex relative px-4">
                    <button className="border border-[#696969] font-semibold p-1 px-4 mx-4 rounded-md text-[13px] md:text-md" >Join Netflix</button>
                    <button className='bg-[#E50914] hover:bg-[#a7131a] transition duration-500 text-white font-semibold p-1 px-4 rounded-md text-[13px]   md:text-md '>Sign In</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
