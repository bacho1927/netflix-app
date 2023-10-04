import InputAnimated from '../main-page/InputAnimated'
import mainImg from '../../img/main-img.jpg'
import logo from '../../img/netflix-logo.png'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AccountFooter from './AccountFooter'
import { UserAuth } from '../../context/AuthContext'

function AccountMain() {

    const [learnMore, setLearnMore] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { user, logIn } = UserAuth();
    const [error, setError] = useState('')
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            await logIn(email, password)
            navigate('/')
        } catch (error) {
            setError(error.message)
        }
    }
    const mainImgStyle = {
        backgroundImage: `url(${mainImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',

    }

    return (
        <>
            <div style={mainImgStyle} >
                <div className='bg-black md:bg-opacity-60 h-[100vh] min-w-[450px]' >
                    <nav className='px-4 md:px-14 '>
                        <a href='/'>
                            <img src={logo} alt='netflix-logo' className='w-36 sm:w-56' />
                        </a>
                    </nav>
                    <div className='bg-black md:bg-opacity-70  min-w-[450px]  md:max-w-[450px] mx-auto'>
                        <div className='p-16  '>

                            <h1 className='text-white text-3xl pb-6 font-bold '>Sign In</h1>
                            {error ? <p className='text-red-700'>{error}</p> : null}
                            <InputAnimated type="email" inputId='headerInput' labelFor='headerInput' labelText='Email or phone number' duration='duration-100' background='bg-[#333] ' width='w-80' focusedStyles='text-sm top-1 text-gray-300' normalStyles='top-5 text-base text-[#969696] font-semibold  ' textColor='text-white' onChange={(e) => setEmail(e.target.value)} onSubmit={handleSubmit}>

                            </InputAnimated>
                            <InputAnimated type="password" inputId='headerInput2' labelFor='headerInput2' labelText='Password' duration='duration-100' background='bg-[#333] ' width='w-80' focusedStyles='text-sm top-1 text-gray-300' normalStyles='top-5 text-base text-[#969696] font-semibold  ' textColor='text-white' onChange={(e) => setPassword(e.target.value)} onSubmit={handleSubmit}>

                            </InputAnimated>
                            <button className='w-[100%] mx-auto bg-[#E50914] hover:bg-[#a7131a] transition duration-500 text-white font-semibold p-4 mt-6 rounded-md  md:text-md  ' onClick={handleSubmit}>Sign In</button>
                            <div className='mt-4 flex justify-between  '>
                                <div className='flex items-center gap-2'>
                                    <input type='checkbox' className='bg-[#737373] border-none h-4 w-4'></input>
                                    <label className=' text-[#969696]'>Remember me</label>
                                </div>
                                <h1 className=' text-[#969696]'>Need help?</h1>
                            </div>
                            <div className='mt-10'>
                                <div className='flex font-semibold pb-2'>
                                    <h1 className='text-[#969696]'>New to Netflix? </h1>
                                    <Link className='text-white ml-2 hover:underline' to="/Signup">Sign up now</Link>
                                </div>

                                <span className='text-[#969696] text-sm '>This page is protected by Google reCAPTCHA to ensure you're not a bot.</span>
                                <button className={`text-blue-600 ml-2 hover:underline ${learnMore ? 'hidden' : ''}`} onClick={() => setLearnMore(!learnMore)}> Learn more.</button>
                                <p className={`text-[#969696] text-sm mt-4 ${learnMore ? 'opacity-1' : 'opacity-0 '
                                    } transition-opacity duration-500 ease-in-out`}>The information collected by Google reCAPTCHA is subject to the Google Privacy Policy and Terms of Service, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).</p>
                            </div>
                        </div>
                    </div>
                </div>
                <AccountFooter />
            </div >
        </>
    )
}

export default AccountMain
