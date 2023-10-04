import InputAnimated from "../../main-page/InputAnimated"
import { UserAuth } from "../../../context/AuthContext"
import { useState } from "react";

function SignupMain2() {

    const [password, setPassword] = useState('')
    const { signUp } = UserAuth();
    const [error, setError] = useState('')
    const { inputValue, setInputValue } = UserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            await signUp(inputValue, password)
        } catch (error) {
            setError(error.message)

        }
    }





    return (
        <div className="max-w-[440px] mx-auto">

            <div className=' py-6 text-left'>
                <span className='text-sm'>STEP 2 OF 3</span>
                <h1 className='text-3xl font-bold'>Create a password to start your membership</h1>
                <h2 className="text-xl font-semibold text-[#535353] mt-6 py-2">Just a few more steps and you're done!
                    We hate paperwork, too.</h2>
                {error ? <p className="text-red-500 ">{error}</p> : null}
                <InputAnimated type="text" inputId='mailInput' labelFor='mailInput' labelText='Email ' duration='duration-100' background='bg-white' width='w-[440px]' normalStyles='top-5 text-base text-[#000000B3] font-semibold' focusedStyles='text-sm top-1 text-[#000000B3]' onChange={(e) => setInputValue(e.target.value)} onSubmit={handleSubmit} value={inputValue}>

                </InputAnimated>
                <InputAnimated type="password" inputId='passwordInput' labelFor='passwordInput' labelText='Add a Password' duration='duration-100' background='bg-white' width='w-[440px]' normalStyles='top-5 text-base text-[#000000B3] font-semibold' focusedStyles='text-sm top-1 text-[#000000B3]' onChange={(e) => setPassword(e.target.value)} onSubmit={handleSubmit} value={password}>

                </InputAnimated>
                <button className="bg-[#E50914] hover:bg-[#a7131a] w-full p-4 mt-4 transition duration-500  text-white font-semibold text-md sm:text-2xl rounded-md" type='button' onClick={handleSubmit}>Next
                </button>
            </div>
        </div >
    )
}

export default SignupMain2