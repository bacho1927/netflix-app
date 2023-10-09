import devicesLogo from '../../../img/Devices.png'
import { Link } from 'react-router-dom'
function SignupMain() {
    return (
        <main className='flex  justify-center min-w-[400px] py-24'>
            <div className='flex flex-col items-center max-w-[340px]'>
                <img src={devicesLogo} alt='devices-logo' className='w-[300px]' />
                <div className='text-center py-6'>
                    <span className='text-sm'>STEP 1 OF 3</span>
                    <h1 className='text-3xl font-bold'>Finish setting up your account</h1>
                    <h2 className='font-semibold pt-4 text-lg text-[#232323]'>Netflix is personalized for you. Create a password to watch on any device at any time.
                    </h2>
                    <button className="bg-[#E50914] hover:bg-[#a7131a] w-full p-4 mt-4 transition duration-500  text-white font-semibold text-md sm:text-2xl rounded-md" type='button' ><Link to='Form'>Next</Link>
                    </button>
                </div>
            </div>
        </main>
    )
}

export default SignupMain
