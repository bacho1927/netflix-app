import { faqData } from "./Data"
import Question from "./Question"

function Faq() {

    const questions = faqData.map((data, index) => {
        console.log(data)
        return (


            <Question key={index} data={data} />





        )
    })

    return (
        <div className="bg-black flex justify-center items-center flex-col gap-3 min-w-[500px] py-8 px-22">
            <h1 className="text-white font-bold text-5xl text-center py-6">Frequently asked questions</h1>
            {questions}
        </div>
    )
}

export default Faq
