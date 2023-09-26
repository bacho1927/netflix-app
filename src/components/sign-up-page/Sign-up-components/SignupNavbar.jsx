import logo from '../../../img/netflix-logo.png'
import { Link } from 'react-router-dom'



function SignupNavbar() {
    return (
        <>
            <nav className='flex items-center justify-between px-16 min-w-[400px]'>
                <a href="/">
                    <img src={logo} alt='Netflix-logo' className='w-36 sm:w-48' />
                </a>
                <Link to="/Signin" className='font-bold text-lg sm:text-xl'>Sign In</Link>

            </nav>


        </>
    )
}

export default SignupNavbar
