import React, { useState } from "react";
import mainImg from '../img/main-img.jpg'
import logo from '../img/netflix-logo.png'
import { BsGlobe2 } from 'react-icons/bs'
import { AiFillCaretDown } from 'react-icons/ai'

function Header() {

    const [placeholderFocused, setPlaceholderFocused] = useState(false)
    const [inputValue, setInputValue] = useState('');


    const handleFocus = () => {
        setPlaceholderFocused(true);
    };

    const handleBlur = () => {
        if (inputValue == '') {
            setPlaceholderFocused(false);
        }
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const mainImgStyle = {
        backgroundImage: `url(${mainImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        minWidth: '500px',

    }


    return (

        <div className="min-w-[500px] border-b-[10px] border-gray-700 bg-black bg-opacity-40">
            <div style={mainImgStyle} >

                <nav className=" flex justify-between  items-center px-8  sm:px-[100px] md:px-42 xl:px-72  mx-auto bg-gradient-to-b from-black via-opacity-40 to-transparent " >
                    <img src={logo} className='w-44 min-w' />
                    <span className="flex  gap-6">
                        <div className="relative flex items-center">
                            <BsGlobe2 className="text-white absolute m-3" />

                            <select className="h-10 px-10 bg-transparent text-white font-bold border border-gray-400 rounded-md appearance-none ">

                                <option value='eng' label="English" className="text-black ">English</option>
                                <option value='rus' label="Русский" className="text-black">Русский</option>
                            </select>
                            <AiFillCaretDown className="text-white absolute right-2" />
                        </div>
                        <button className='bg-[#E50914] hover:bg-[#a7131a] transition duration-500 text-white font-bold p-2 px-4 rounded-md  md:text-md '>Sign In</button>
                    </span>

                </nav>
                <section className="bg-gradient-to-t from-black via-opacity-40 to-transparent">
                    <main className="text-white  py-32 px-2 text-center ">
                        <h1 className="text-3xl md:text-4xl  lg:text-5xl font-bold">Unlimited movies, TV shows, and more</h1>
                        <p className="text-2xl md:text-3xl sm:text-2xl my-10 ">Watch anywhere. Cancel anytime.</p>
                        <h3 className="text-2 md:text-xl sm:text-lg ">Ready to watch? Enter your email to create or restart your membership.</h3>
                        <form className="flex flex-col items-center  justify-center">
                            <div className="gap-2  my-6 relative flex">
                                <label
                                    for='mainInput'
                                    className={`absolute overflow-hidden mx-3  transition-all cursor-text duration-300 ${placeholderFocused ? 'text-sm top-1 text-gray-300' : 'top-4 text-base text-gray-500'
                                        }`}
                                >
                                    Email Address
                                </label>
                                <div className={`w-80 text-white bg-slate-950 bg-opacity-30 rounded-md border flex items-end border-gray-600 px-2 ${placeholderFocused ? 'border-white' : ''}`}>
                                    <input
                                        id='mainInput'
                                        type="text"
                                        className={`w-full bg-transparent   outline-none p-1 `}
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                    />
                                </div>
                                <button className="bg-[#E50914] hover:bg-[#a7131a] transition duration-500  text-white font-bold text-md sm:text-xl p-3 px-6 rounded-md">Get started {'>'}</button>
                            </div>
                        </form>
                    </main>
                </section>
            </div>
        </div >
    )
}

export default Header
