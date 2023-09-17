import { useRef } from "react";
import React from "react";
import mainImg from '../../img/main-img.jpg'
import logo from '../../img/netflix-logo.png'
import Mail from "./Mail";
import SelectLanguage from "./SelectLanguage";

function Header() {

    const mainImgStyle = {
        backgroundImage: `url(${mainImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        minWidth: '500px',

    }

    const inputRef = useRef(null)

    const focusInput = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };


    return (

        <div className="min-w-[500px] border-b-[10px] border-[#2D2D2D] bg-black bg-opacity-40">
            <div style={mainImgStyle} >

                <nav className=" flex justify-between  items-center px-8  sm:px-[100px] md:px-42 xl:px-72  mx-auto bg-gradient-to-b from-black via-opacity-40 to-transparent " >
                    <a href="/">
                        <img src={logo} alt="netflix-logo" className='w-44 ' />
                    </a>
                    <span className="flex  gap-6">
                        <SelectLanguage />
                        <button className='bg-[#E50914] hover:bg-[#a7131a] transition duration-500 text-white font-semibold p-2 px-4 rounded-md  md:text-md '>Sign In</button>
                    </span>

                </nav>
                <section className="bg-gradient-to-t from-black  via-opacity-70 to-transparent ">
                    <main className="text-white  py-32 px-2 text-center ">
                        <h1 className="text-3xl md:text-4xl  lg:text-5xl font-bold">Unlimited movies, TV shows, and more</h1>
                        <p className="text-2xl md:text-3xl sm:text-2xl my-10 ">Watch anywhere. Cancel anytime.</p>
                        <h3 className="text-2 md:text-xl sm:text-lg ">Ready to watch? Enter your email to create or restart your membership.</h3>
                        <Mail inputId='headerInput' labelFor='headerInput' labelText='Email address' duration='duration-300' width='sm:w-96' inputRef={inputRef}>
                            <button onClick={focusInput} className="bg-[#E50914] hover:bg-[#a7131a] transition duration-500  text-white font-semibold text-md sm:text-xl p-3 px-6 rounded-md" type='button'>Get started {'>'}
                            </button>
                        </Mail>
                    </main>
                </section>
            </div>
        </div >
    )
}

export default Header
