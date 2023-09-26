import QuickLinks from "./QuickLinks";
import { quickLinksData } from "./ArticleLinksData";
import { FaAngleRight } from "react-icons/fa";

function HelpArticle() {

    return (
        <div className="border-t border-gray-200 min-w-[500px] flex flex-col lg:flex-row max-w-[1300px] mx-auto px-4 pt-4 pb-24">
            <div className="bg-red     flex flex-col md:grid md:grid-cols-3 lg:flex lg:flex-row">

                {quickLinksData.map((data, index) => (
                    <QuickLinks key={index} title={data.title} links={data.links} icon={data.icon} />
                ))}

                <div className="w-[100%] lg:w-[50%] xl:w-[45%] pr-6">
                    <h1 className='text-md md:text-2xl py-6 font-semibold'>Quick Links</h1>
                    <ul className='text-[#4c4948] '>
                        <li className="py-2">
                            <a className="flex justify-between items-center">Reset password <span><FaAngleRight className='text-red-500 font-bold ' />
                            </span>
                            </a>
                        </li>
                        <li className="py-2">
                            <a className="flex justify-between items-center">Update email               <span><FaAngleRight className='text-red-500 font-bold ' />
                            </span>
                            </a>
                        </li>
                        <li className="py-2">
                            <a className="flex justify-between items-center">Get help signin in <span><FaAngleRight className='text-red-500 font-bold ' /></span>
                            </a>
                        </li>
                        <li className="py-2">
                            <a className="flex justify-between items-center">Update payment method <span><FaAngleRight className='text-red-500 font-bold ' /></span>
                            </a>
                        </li>
                        <li className="py-2">
                            <a className="flex justify-between items-center">Request TV shows or movies <span><FaAngleRight className='text-red-500 font-bold ' /></span>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default HelpArticle
