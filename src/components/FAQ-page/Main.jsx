import { Link } from "react-router-dom"
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { MdOutlineArticle } from 'react-icons/md'
import FaqContent from "./FaqContent"
import FaqData from "./FaqData"


function Main() {

    return (
        <div className=" min-w-[500px]" >
            <div className="py-8 max-w-[70%]  mx-auto min-w-[500px] px-4  ">
                < div  >
                    <Link to='/' className="flex items-center text-[#e50914] font-semibold">
                        <AiOutlineArrowLeft />
                        Back to Help Home
                    </Link>
                </div >
                <h1 className="text-md md:text-2xl lg:text-4xl font-bold pt-8">What is Netflix?</h1>
                <div className="flex flex-col xl:flex-row ">
                    <div className="max-w-[100%] xl:max-w-[70%]">
                        {FaqData.map((item, index) => (

                            <FaqContent data={item} key={index} />

                        ))}
                        <div className="pt-6 flex xl:text-lg">
                            <p className=" font-bold  gap-8">Was this article helpful?</p>
                            <button className="px-4 underline ">Yes</button>
                            <button className=" underline ">No</button>
                        </div>
                    </div>

                    <aside className="border-t-8 border-red-600 rounded mt-6 xl:ml-14" >

                        <div className="border border-[#B2B2B2] p-2 rounded ">
                            <h1 className="text-xl font-semibold">Related Articles</h1>
                            <ul className="space-y-2 underline font-semibold py-4 flex flex-col gap-2">

                                <li className="flex items-center gap-2 ">
                                    <MdOutlineArticle className="text-xl" />
                                    <a href="/">Getting started with Netflix</a>
                                </li>
                                <li className="flex items-center gap-2 ">
                                    <MdOutlineArticle className="text-xl" />
                                    <a href="/">Billing and Payments</a>
                                </li>
                                <li className="flex items-center gap-2">
                                    <MdOutlineArticle className="text-xl" />
                                    <a href="/" >Netflix Gift Cards</a>
                                </li>
                                <li className="flex items-center gap-2">
                                    <MdOutlineArticle className="text-xl" />
                                    <a href="/">Can't sign in to Netflix</a>
                                </li>
                                <li className="flex items-center gap-2">
                                    <MdOutlineArticle className="text-xl" />
                                    <a href="/">How to create, change, delete profiles </a>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>

            </div >
        </div >
    )
}

export default Main
