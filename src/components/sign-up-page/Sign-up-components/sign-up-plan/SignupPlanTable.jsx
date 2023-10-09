import { AiOutlineCheck } from 'react-icons/ai'
function SignupPlanTable({ selectedOption }) {
    return (
        <div>
            <table className='w-full'>
                <tbody className='text-xl '>
                    <tr className="border-b border-gray-400 ">
                        <td className="w-[40%] py-4">Video Quality</td>
                        <td className={`${selectedOption === 'Basic' ? 'text-[#e50914]' : 'text-[#737373]'} w-[20%] text-center font-semibold`}>Good</td>
                        <td className={`${selectedOption === 'Standart' ? 'text-[#e50914]' : 'text-[#737373]'} w-[20%] text-center font-semibold`}>Better</td>
                        <td className={`${selectedOption === 'Premium' ? 'text-[#e50914]' : 'text-[#737373]'} w-[20%] text-center font-semibold`}>Best</td>
                    </tr>
                    <tr className="border-b border-gray-400">
                        <td className="w-[40%] py-4">Resolution</td>
                        <td className={`${selectedOption === 'Basic' ? 'text-[#e50914]' : 'text-[#737373]'} w-[20%] text-center font-semibold`}>720p</td>
                        <td className={`${selectedOption === 'Standart' ? 'text-[#e50914]' : 'text-[#737373]'} w-[20%] text-center font-semibold`}>1080p</td>
                        <td className={`${selectedOption === 'Premium' ? 'text-[#e50914]' : 'text-[#737373]'} w-[20%] text-center font-semibold`}>4K+HDR</td>
                    </tr>
                    <tr className="border-b border-gray-400">
                        <td className="w-[40%] py-4">Watch on your TV, computer, mobile phone and tablet</td>
                        <td className="w-[20%]  text-center"><AiOutlineCheck className={`${selectedOption === 'Basic' ? 'text-[#e50914]' : 'text-[#737373]'}  text-center inline-block text-3xl`} /></td>
                        <td className="w-[20%] text-center"><AiOutlineCheck className={`${selectedOption === 'Standart' ? 'text-[#e50914]' : 'text-[#737373]'}  text-center inline-block text-3xl`} /></td>
                        <td className="w-[20%] text-center"><AiOutlineCheck className={`${selectedOption === 'Premium' ? 'text-[#e50914]' : 'text-[#737373]'}  text-center inline-block text-3xl`} /></td>
                    </tr>
                    <tr>
                        <td className="w-[40%] py-4">Monthly price</td>
                        <td className={`${selectedOption === 'Basic' ? 'text-[#e50914]' : 'text-[#737373]'} w-[20%] text-center font-semibold`}>EUR9.39</td>
                        <td className={`${selectedOption === 'Standart' ? 'text-[#e50914]' : 'text-[#737373]'} w-[20%] text-center font-semibold`}>EUR11.79</td>
                        <td className={`${selectedOption === 'Premium' ? 'text-[#e50914]' : 'text-[#737373]'} w-[20%] text-center font-semibold`}>EUR13.99</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default SignupPlanTable
