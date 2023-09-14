

function FaqContent({ data }) {
    const { image, title, paragraph } = data;

    return (
        <>
            <h1 className="text-2xl font-semibold py-6">{title}</h1>
            <img src={image} alt='banner' />
            <div className="font-semibold border-b border-[#B2B2B2] py-4 ">
                <h1 className="mt-4 pb-8 ">{paragraph} </h1>
            </div>
        </>
    )
}

export default FaqContent
