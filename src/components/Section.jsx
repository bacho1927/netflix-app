import { firstSection } from "./Data"

function Section() {

    const sectionData = firstSection.map((section, index) => {
        return (
            <div key={index} className="py-20  bg-black border-b-[10px] border-gray-700 min-w-[500px]">
                <div className={`flex flex-col items-center  ${index % 2 === 0 ? 'lg:flex lg:flex-row' : 'lg:flex lg:flex-row-reverse'} lg:max-w-[1100px] bg-red mx-auto`}>
                    <div className="flex flex-col justify-center " >
                        <h1 className="text-5xl font-bold text-white text-center lg:text-left">{section.sectionHeader}</h1>
                        <p className="text-white text-2xl  my-4 text-center lg:text-left">{section.sectionParagraph}</p>
                    </div>
                    <div className="relative z-[1] w-[80%] ">
                        <img src={section.sectionPhoto} className="mx-auto  lg:w-full " />
                        <div className={` absolute  z-[-1] ${section.id === 3 ? 'top-[40px] w-[350px] left-[105px]' : 'top-[80px] right-[75px] w-[73%]'
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
