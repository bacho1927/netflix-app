
import { AiFillCaretDown } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className=" bg-black min-w-[500px] bg-gradient-to-24 from-transparent  via-red-600 to-black">

            <div className="max-w-[70%] min-w-[500px] mx-auto px-4    border-gray-500">
                <div className="flex flex-col sm:flex-row items-center border-b py-6">
                    <h1 className="text-white font-semibold text-lg xl:text-2xl pb-4">Need more help? </h1>
                    <button className="text-black mx-8 p-2 px-10 bg-white rounded font-bold"><Link to="/Contact">Contuct Us </Link></button>
                </div>
                <div className="py-12 ">


                    <div className="relative flex items-center ">


                        <select className="h-10 px-4 pr-24 bg-transparent text-[#696969] font-bold border border-gray-400  appearance-none ">

                            <option value='eng' label="English" >English</option>
                            <option value='rus' label="Русский" >Русский</option>
                        </select>
                        <AiFillCaretDown className="text-[#696969] left-36 absolute" />
                    </div>
                    <div className='py-6'>
                        <ul className=' flex flex-col gap-4 text-[#a1a0a0] font-semibold '>
                            <li className='hover:underline  hover:cursor-pointer'> Terms of Use</li>
                            <li className='hover:underline  hover:cursor-pointer'>Privacy</li>
                            <li className='hover:underline  hover:cursor-pointer'>Cookie Preferences</li>
                            <li className='hover:underline  hover:cursor-pointer'>Corporate Information</li>
                        </ul>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Footer
