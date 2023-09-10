import { firstSection } from "./Data"

function Section() {

    const sectionData = firstSection.map(section => {
        return (
            <div key={section.id} className="py-20  bg-black border-b-[10px] border-gray-700 min-w-[500px]">
                <div className="flex flex-col items-center  lg:flex lg:flex-row lg:max-w-[1100px] bg-red mx-auto" >
                    <div className="flex flex-col justify-center " >
                        <h1 className="text-5xl font-bold text-white text-center lg:text-left">{section.sectionHeader}</h1>
                        <p className="text-white text-2xl  my-4 text-center lg:text-left">{section.sectionParagraph}</p>
                    </div>
                    <div className="relative z-[1] ">
                        <img src={section.sectionPhoto} className="w-[90%] mx-auto  lg:w-full " />
                        <div className={` absolute    z-[-1] ${section.id === 3 ? 'top-[30px] w-[295px] left-[90px]' : 'top-[70px] right-[65px] w-[72%]'
                            } `}>
                            <video autoPlay muted loop >
                                <source src={section.sectionVideo} type='video/mp4' />
                            </video>

                        </div>

                    </div>
                </div>
            </div>
        )
    })


    return (
        <>

            {sectionData}


        </>
    )
}

export default Section
