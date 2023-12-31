import React from "react"
import logo from "../../img/netflix-logo.png"
import { Link } from "react-router-dom"

//This is navbar component used for several pages

function Navbar({ children, width }) {
    return (
        <div className="bg-black">
            <nav className={`bg-black flex justify-between mx-auto items-center p-2 ${width ? width : 'max-w-[1200px]'}  min-w-[500px]`}>
                <div className="flex items-center relative ">
                    <a href="/" className="">
                        <img src={logo} alt="netflix-logo" className='w-28 ' />

                    </a>
                    <div className="bg-gray-300 absolute h-6 w-[1px] left-[122px] top-5 "></div>
                    <Link to="/Help" className="text-white  font-semibold mx-8 text-sm md:text-lg">Help Center</Link>
                </div>
                <div className="text-white flex relative px-4 text-[12px] md:text-[15px]">
                    <button className="border border-[#696969] font-semibold p-1 px-4 mx-4 rounded-md" >Join Netflix</button>
                    <Link to="/Signin" className='bg-[#E50914] hover:bg-[#a7131a] transition duration-500 text-white font-semibold p-2 px-4 rounded-md  md:text-md '>Sign In</Link>
                </div>

            </nav>
            {children}
        </div>
    )
}

export default Navbar
