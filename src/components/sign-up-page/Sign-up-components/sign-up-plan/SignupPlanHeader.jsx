import { AiOutlineCheck } from 'react-icons/ai'
function SignupPlanHeader() {
    return (

        <div className="p-4 mx-auto max-w-[1024px] text-[#333] ">
            <div>
                <h3>STEP
                    <span className="font-bold"> 2</span> OF <span className="font-bold"> 3</span>
                </h3>
                <h1 className="text-3xl font-bold">Choose the plan that's right for you</h1>
                <div className='pt-4 '>
                    <ul>
                        <li className='flex gap-2 mt-2'>
                            <AiOutlineCheck className='text-3xl text-red-600' />
                            <p className='text-xl'>Watch all you want. Ad-free.
                            </p>
                        </li>
                        <li className='flex gap-2 mt-2'>
                            <AiOutlineCheck className='text-3xl text-red-600' />
                            <p className='text-xl'>Recommendations just for you.
                            </p>
                        </li>
                        <li className='flex gap-2 mt-2'>
                            <AiOutlineCheck className='text-3xl text-red-600' />
                            <p className='text-xl'>Change or cancel your plan anytime.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SignupPlanHeader
