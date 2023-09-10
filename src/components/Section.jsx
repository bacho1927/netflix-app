import { firstSection } from "./Data"

function Section() {

    const sectionData = firstSection.map(section => {
        return (
            <div key={section.id} className="py-20  bg-black border-b-2 border-gray min-w-[500px]">
                <div className="flex flex-col items-center px-2 lg:flex lg:flex-row lg:px-32 bg-red" >
                    <div className="flex flex-col justify-center px-10" >
                        <h1 className="text-5xl font-bold text-white text-center lg:text-left">{section.sectionHeader}</h1>
                        <p className="text-white text-xl  my-4 text-center lg:text-left">{section.sectionParagraph}</p>
                    </div>
                    <div className="relative z-[1]">
                        <img src={section.sectionPhoto} className="w-[80%] mx-auto  lg:w-full " />
                        <div className="w-[72%] absolute top-[21%] right-[14.5%]  z-[-1] ">
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
