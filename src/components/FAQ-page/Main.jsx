import { Link } from "react-router-dom"
import { AiOutlineArrowLeft } from 'react-icons/ai'
import faqBanner from '../../img/faq-banner.png'
import { MdOutlineArticle } from 'react-icons/md'
function Main() {
    return (
        <div className=" min-w-[500px]" >
            <div className="py-12 max-w-[70%]  mx-auto min-w-[500px] px-4  ">
                < div  >
                    <Link to='/' className="flex items-center text-[#e50914] font-semibold">
                        <AiOutlineArrowLeft />
                        Back to Help Home
                    </Link>
                </div >
                <h1 className="text-md md:text-2xl lg:text-4xl font-bold py-4">What is Netflix?</h1>
                <div className="flex flex-col xl:flex-row ">
                    <div className="max-w-[100%] xl:max-w-[70%]">
                        <img src={faqBanner} alt='banner' />
                        <div className="font-semibold">
                            <p className="mt-4 ">Netflix is a subscription-based <a href="/" className="text-red-600 hover:underline ">streaming service </a>that allows our members to watch TV shows and movies on an internet-connected device.  </p>

                            <p className="mt-4"><a href="/" className="text-red-600 hover:underline ">Depending on your plan</a>, you can also download TV shows and movies to your iOS, Android, or Windows 10 device and watch without an internet connection.</p>

                            <p className="mt-4">If you're already a member and would like to learn more about using Netflix, visit Getting started with Netflix.</p>
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
