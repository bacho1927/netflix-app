import { useState } from "react"
import './openAnswer.css'

function Question({ data }) {

    const [questionOpened, setQuestionOpened] = useState(false)


    const toggle = () => {
        setQuestionOpened(!questionOpened)
    }




    return (
        <>

            <div className="bg-[#2D2D2D] w-[90%] xl:w-[60%]    cursor-pointer  " onClick={toggle}>
                <div className="flex justify-between items-center ">
                    <h1 className="text-white p-6  text-2xl">{data.question}</h1>
                    <button className={`text-5xl  text-white select-none p-4   `}>{questionOpened ? '-' : '+'}</button>

                </div>


                <div className={`accordion ${questionOpened ? 'accordion-open' : ''}`}>
                    <div>
                        <div className="border-2  border-black "></div>
                        <p className={`text-white text-xl p-6  `} >{data.answer}</p>
                    </div>
                </div>



            </div >

        </>
    )
}

export default Question
