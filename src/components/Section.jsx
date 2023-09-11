import { firstSection } from "./Data"

function Section() {

    const sectionData = firstSection.map((section, index) => {
        return (
            <div key={index} className="py-20  px-4 bg-black border-b-[10px] border-[#2D2D2D] min-w-[500px]">
                <div className={`flex flex-col items-center  ${index % 2 === 0 ? 'lg:flex lg:flex-row' : 'lg:flex lg:flex-row-reverse'} lg:max-w-[1100px] bg-red mx-auto`}>
                    <div className="flex flex-col justify-center " >
                        <h1 className="text-5xl font-bold text-white text-center lg:text-left">{section.sectionHeader}</h1>
                        <p className="text-white text-2xl  my-4 text-center lg:text-left">{section.sectionParagraph}</p>
                    </div>
                    <div className=" z-[1] w-[70%] relative  ">

                        <img alt='section img' src={section.sectionPhoto} className=" lg:w-full mx-auto " />
                        {section.id === 2 ? <div className="text-white absolute flex justify-around items-center bottom-[5%] left-[20%] bg-black w-[60%] h-[25%] border-2 border-[#2D2D2D] rounded-md">
                            <img alt='section img' src={section.sectionBanner} className="h-[80%] " />
                            <div>
                                <p className="text-white text-sm lg:text-lg  font-bold">Stranger Things</p>
                                <p className="text-blue-600 text-sm font-bold ">Downloading...</p>

                            </div>
                            <div className="bg-center bg-no-repeat bg-cover w-[15%] h-[35%] 
                                " style={{ backgroundImage: 'url(https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif)' }}>

                            </div>
                        </div> : ''}
                        {section.sectionVideo ?
                            <div className={` absolute top-0 left-0  z-[-1] ${section.id === 3 ? 'top-[10%] left-[20%] w-[60%] ' : 'top-[20%] left-[13%] w-[73%] '
                                } `}>
                                <video autoPlay muted loop >
                                    <source src={section.sectionVideo} type='video/mp4' />
                                </video>

                            </div>
                            : ''}
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
