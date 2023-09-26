import InputAnimated from "../../main-page/InputAnimated"

function SignupMain2() {
    return (
        <div className="max-w-[440px] mx-auto">

            <div className=' py-6 text-left'>
                <span className='text-sm'>STEP 1 OF 3</span>
                <h1 className='text-3xl font-bold'>Create a password to start your membership</h1>
                <h2 className="text-xl font-semibold text-[#535353] mt-6">Just a few more steps and you're done!
                    We hate paperwork, too.</h2>
                <InputAnimated inputId='mailInput' labelFor='mailInput' labelText='Email ' duration='duration-100' background='bg-white' width='w-[440px]' normalStyles='top-5 text-base text-[#000000B3] font-semibold' focusedStyles='text-sm top-1 text-[#000000B3]'>

                </InputAnimated>
                <InputAnimated inputId='passwordInput' labelFor='passwordInput' labelText='Add a Password' duration='duration-100' background='bg-white' width='w-[440px]' normalStyles='top-5 text-base text-[#000000B3] font-semibold' focusedStyles='text-sm top-1 text-[#000000B3]'>

                </InputAnimated>
                <button className="bg-[#E50914] hover:bg-[#a7131a] w-full p-4 mt-4 transition duration-500  text-white font-semibold text-md sm:text-2xl rounded-md" type='button' >Next
                </button>
            </div>
        </div>
    )
}

export default SignupMain2
