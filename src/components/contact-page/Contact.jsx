
import Nav from '../FAQ-page/Navbar'
import Footer from '../FAQ-page/Footer'
import { AiOutlineLock, AiOutlineMail, AiOutlineQuestionCircle, AiOutlineCreditCard } from 'react-icons/ai'
import { LuMegaphone } from 'react-icons/lu'
function Contact() {

    const links = [
        { icon: AiOutlineLock, text: 'Reset password' },
        { icon: AiOutlineMail, text: 'Update email' },
        { icon: AiOutlineQuestionCircle, text: 'Get help signing in' },
        { icon: AiOutlineCreditCard, text: 'Update payment method' },
        { icon: LuMegaphone, text: 'Request TV shows or movies' },
    ];


    return (
        <div >
            <Nav />
            <div className='max-w-[70%]  min-w-[500px] mx-auto p-4'>
                <h1 className='text-4xl font-bold'>Contact Us</h1>
                <div>
                    <h2 className='pt-6 pb-2 font-semibold md:text-lg'>Tell us more and we'll find the best solution for you</h2>
                    <input placeholder='Describe your issue' className='w-full outline-none border border-[#B2B2B2] p-3 rounded'></input>
                </div>
                <div>
                    <h2 className='font-semibold pt-6'>Quick Links</h2>

                    <ul className='p-4 flex flex-col gap-4 font-semibold text-[#323232]'>
                        {links.map((link, index) => (
                            <li key={index} className={`border-b py-2`}>
                                <a href="/" className='flex items-center hover:underline hover:cursor-pointer'>
                                    <link.icon />
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                    {/* <ul className='p-6 flex flex-col gap-4 font-semibold text-[#323232]'>
                        <li className='border-b'>
                            <a href="/" className='flex items-center hover:underline hover:cursor-pointer pb-4 '>
                                <AiOutlineLock /> Reset password
                            </a>
                        </li>
                        <li className='border-b'>
                            <a href="/" className='flex items-center hover:underline hover:cursor-pointer border-b pb-4 '>
                                < AiOutlineMail /> Update email
                            </a>
                        </li>
                        <li className='border-b'>
                            <a href="/" className='flex items-center hover:underline hover:cursor-pointer border-b pb-4 '>
                                <AiOutlineQuestionCircle />Get help signing in
                            </a>
                        </li>
                        <li className='border-b'>
                            <a href="/" className='flex items-center hover:underline hover:cursor-pointer border-b pb-4 '>
                                <AiOutlineCreditCard /> update payment method
                            </a>
                        </li>
                        <li className='border-b'>
                            <a href="/" className='flex items-center hover:underline hover:cursor-pointer border-b pb-4 '> <LuMegaphone />Request TV shows or movies
                            </a>
                        </li>
                    </ul> */}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact
