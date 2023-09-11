import { useState } from "react"


function Question({ data }) {

    const [questionOpened, setQuestionOpened] = useState(false)

    const toggle = () => {
        setQuestionOpened(!questionOpened)
    }

    console.log(data)


    return (
        <>
            <div className="bg-black flex justify-center items-center flex-col gap-3 min-w-[500px] py-8 px-22">
                <h1 className="text-white font-bold text-5xl text-center py-6">Frequently asked questions</h1>
                <div className="bg-[#2D2D2D] w-[90%] xl:w-[60%]    cursor-pointer" onClick={toggle}>
                    <div className="flex justify-between items-center ">
                        <h1 className="text-white p-6  text-2xl">{data.header}</h1>
                        <button className="text-5xl text-white select-none p-6 " >{`${questionOpened ? '-' : '+'}`}</button>

                    </div>
                    {questionOpened && (
                        <>
                            <div className="border-2 w-full border-black "></div>
                            <p className="text-white text-xl p-6 ">{data.paragraph}</p>

                        </>)}
                </div>
            </div>
        </>
    )
}

export default Question
