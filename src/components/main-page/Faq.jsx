import { faqData } from "./Data"
import Question from "./Question"
import InputAnimated from "./InputAnimated"
import { useRef } from "react"
function Faq() {

    const questions = faqData.map((data, index) => {

        return (

            <Question key={index} data={data} />

        )
    })
    const inputRef = useRef(null)

    const focusInput = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };


    return (
        <>
            <div className="bg-black flex justify-center items-center flex-col gap-3 min-w-[500px] py-8 px-22 ">
                <h1 className="text-white font-bold text-5xl text-center py-6">Frequently asked questions</h1>
                {questions}
            </div>
            <div className="bg-black text-center  min-w-[500px] px-2 pb-8 ">
                <h1 className="text-white text-md md:text-xl">Ready to watch? Enter your email to create or restart your membership.</h1>
                <InputAnimated inputId='faqInput' labelFor='faqInput' labelText='Email address' duration='duration-300' width='sm:w-96' inputRef={inputRef} focusedStyles='text-sm top-1 text-gray-300' normalStyles='top-5 text-base text-[#969696] font-semibold ' borderColor='border-white' textColor='text-white'>
                    <button className="bg-[#E50914] hover:bg-[#a7131a] transition duration-500  text-white font-semibold text-md sm:text-xl p-3 px-6 rounded-md" onClick={focusInput} type='button'>Get started {'>'}
                    </button>
                </InputAnimated>
            </div>


        </>
    )
}

export default Faq
