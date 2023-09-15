import Footer from "../FAQ-page/Footer"
import Nav from "../FAQ-page/Navbar"
import { RxMagnifyingGlass } from 'react-icons/rx'
import { MdOutlineArticle } from 'react-icons/md'
import { Link } from "react-router-dom"
function Help() {
    return (
        <div>
            <div className="bg-black pb-6 min-w-[500px]">
                <Nav >
                    <h1 className="text-white text-xl md:text-3xl font-bold text-center pb-10">Help Center</h1>

                </Nav>
                <div className="relative ">
                    <input className="w-1/2 mx-auto block  p-3 px-10 outline-none rounded" placeholder="What do you need help with?"></input>
                    <RxMagnifyingGlass className="absolute text-black top-3 left-[26%] text-2xl" />
                </div>

            </div>
            <div className="mx-auto max-w-[1200px] min-w-[500px] px-4 font-semibold">
                <h1 className=" text-xl md:text-2xl pt-4">Sign in for personalized help</h1>
                <div className="flex py-6">
                    <Link className="bg-red-600 text-white p-3 px-6 rounded  hover:bg-red-700">SIGN IN</Link>
                    <Link className="border border-red-600 text-red-600 p-3 px-6 rounded  ml-4 hover:bg-red-600 hover:text-white">JOIN NETFLIX</Link>
                </div>
                <h3>Popular Topics</h3>
                <div className="flex flex-col lg:flex-row  bg-white my-4 justify-between xl:justify-start ">
                    <div className="border  shadow-md p-4 flex items-center flex-grow xl:flex-grow-0">
                        <MdOutlineArticle className="mr-2" /><a>How to Sign up for Netflix</a>
                    </div >

                    <div className="border  shadow-md  p-4 my-4 lg:mx-4 lg:my-0  flex  items-center flex-grow xl:flex-grow-0">
                        <MdOutlineArticle className="mr-2" /><a>Plans and Pricing</a>
                    </div>

                    <div className="border  shadow-md p-4 flex items-center flex-grow xl:flex-grow-0">
                        <MdOutlineArticle className="mr-2" /> <a>Can't sign in to Netflix</a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Help
