import { faqData } from "./Data"
import Question from "./Question"
import Mail from "./Mail"
function Faq() {

    const questions = faqData.map((data, index) => {

        return (

            <Question key={index} data={data} />

        )
    })

    return (
        <>
            <div className="bg-black flex justify-center items-center flex-col gap-3 min-w-[500px] py-8 px-22">
                <h1 className="text-white font-bold text-5xl text-center py-6">Frequently asked questions</h1>
                {questions}
            </div>
            <div className="bg-black text-center  min-w-[500px] px-2  md:text-xl">
                <h1 className="text-white text-md">Ready to watch? Enter your email to create or restart your membership.</h1>
                <Mail inputId='faqInput' labelFor='faqInput' />
            </div>


        </>
    )
}

export default Faq
