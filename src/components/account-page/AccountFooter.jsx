import { Link } from "react-router-dom"

import { FaGlobe } from 'react-icons/fa'

//This Footer has been used for several signin/signup pages.

function AccountFooter({ inputBackground, background }) {
    return (
        < >
            <div className={`${background ? background : `bg-black`} md:bg-opacity-90  min-w-[450px]  md:max-w-[100%] pb-24 px-8`}>
                <div className="mx-auto  text-[#626262] max-w-[1000px]">
                    <p className="py-8 hover:underline"><Link to="/Contact">Questions? Contact us </Link></p>

                    <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  ">
                        <li className="hover:underline mb-4">
                            <Link to="/FAQ">FAQ</Link>
                        </li>
                        <li className="hover:underline"> <Link to="/Help">Help Center</Link></li>
                        <li className="hover:underline"> <Link>Terms of use</Link></li>
                        <li className="hover:underline"> <Link>Privacy</Link></li>
                        <li className="hover:underline"> <Link>Cookie Preferences</Link></li>
                        <li className="hover:underline"> <Link>Corporate Information</Link></li>
                    </ul>

                    <div className="relative">
                        <FaGlobe className=" absolute m-2 top-10" />
                        <select className={`text-[#626262] mt-8 p-3 px-8 ${inputBackground ? inputBackground : 'bg-black'} border border-[#626262]`}>
                            <option value="Eng" label="English">English</option>
                            <option value="Rus" label="Русский">Русский</option>
                        </select>
                    </div>

                </div>

            </div >
        </>
    )
}

export default AccountFooter
