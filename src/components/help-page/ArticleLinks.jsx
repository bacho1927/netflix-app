import { FaAngleRight } from "react-icons/fa";

function QuickLinks({ links, title }) {
    return (
        <div className="w-[100%] lg:w-[50%]  pr-6 pb-8">

            <h1 className="text-2xl py-6 font-semibold">{title}</h1>

            {links.map((link, index) => (
                <ul className=" text-[#4c4948]">
                    <li key={index} className="py-2 hover:underline"><a href='/' className='flex justify-between items-center'>{link} <FaAngleRight className="text-red-600 lg:hidden" /></a></li>
                </ul>
            ))}

        </div>
    );
}

export default QuickLinks
