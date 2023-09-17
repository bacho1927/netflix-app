import { Link } from "react-router-dom"
import { MdOutlineArticle } from 'react-icons/md'

function HelpMain() {
    return (
        <div className="mx-auto max-w-[1300px] min-w-[500px]  font-semibold px-4">
            <h1 className=" text-xl md:text-2xl pt-4">Sign in for personalized help</h1>
            <div className="flex py-6">
                <Link className="bg-red-600 text-white p-3 px-6 rounded  hover:bg-red-700">SIGN IN</Link>
                <Link className="border border-red-600 text-red-600 p-3 px-6 rounded  ml-4 hover:bg-red-600 hover:text-white">JOIN NETFLIX</Link>
            </div>
            <h3>Popular Topics</h3>
            <div className="flex flex-col md:flex-row  bg-white my-4 justify-between xl:justify-start ">
                <div className="border  shadow-md p-4 flex items-center flex-grow xl:flex-grow-0">
                    <MdOutlineArticle className="mr-2" /><a className="hover:text-red-600 hover:underline cursor-pointer">How to Sign up for Netflix</a>
                </div >

                <div className="border  shadow-md  p-4 my-4 md:mx-4 md:my-0  flex  items-center flex-grow xl:flex-grow-0">
                    <MdOutlineArticle className="mr-2" /><a className="hover:text-red-600 hover:underline cursor-pointer">Plans and Pricing</a>
                </div>

                <div className="border  shadow-md p-4 flex items-center flex-grow xl:flex-grow-0">
                    <MdOutlineArticle className="mr-2" /> <a className="hover:text-red-600 hover:underline cursor-pointer">Can't sign in to Netflix</a>
                </div>
            </div>

        </div>
    )
}

export default HelpMain
