import { faqData } from "./Data"
import Question from "./Question"

const questions = faqData.map((data, index) => {


    return (<Question key={index} data={data} />

    )
})

function Faq() {


    return (
        <div>{questions}</div>
    )
}

export default Faq
