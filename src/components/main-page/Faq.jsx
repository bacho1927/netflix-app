import { faqData } from "./Data"
import Question from "./Question"
import Mail from "./Mail"
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
                <Mail inputId='faqInput' labelFor='faqInput' labelText='Email address' duration='duration-300' inputRef={inputRef} width='sm:w-96 '>
                    <button className="bg-[#E50914] hover:bg-[#a7131a] transition duration-500  text-white font-semibold text-md sm:text-xl p-3 px-6 rounded-md" onClick={focusInput} type='button'>Get started {'>'}
                    </button>
                </Mail>
            </div>


        </>
    )
}

export default Faq
