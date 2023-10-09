
function SignupPlanOptions({ selectedOption, handleRadioChange }) {

    return (

        <div className='flex  md:justify-end '>
            <div className='flex gap-12 p-8'>
                <label className='relative'>
                    <input value='Basic' type="radio" name="Basic plan" className=' absolute z-[-1]' checked={selectedOption === 'Basic'}
                        onChange={handleRadioChange} />

                    <span className={`p-10 ${selectedOption === 'Basic' ? 'bg-[#e50914]  ' : 'bg-red-500'} text-white font-semibold mr-2 z-1`}>Basic</span>
                </label>
                <label className=' relative'>
                    <input value='Standart' type="radio" className=' absolute z-[-1]' name="Standart plan" checked={selectedOption === 'Standart'}
                        onChange={handleRadioChange} />

                    <span className={`p-10 ${selectedOption === 'Standart' ? 'bg-[#e50914]' : 'bg-red-500'} text-white font-semibold mr-2 z-1`}>Standart</span>
                </label>
                <label className=' relative '>
                    <input value='Premium' type="radio" className=' absolute z-[-1]' name="Premium plan" checked={selectedOption === 'Premium'}
                        onChange={handleRadioChange} />

                    <span className={`p-10 ${selectedOption === 'Premium' ? 'bg-[#e50914]' : 'bg-red-500'} text-white font-semibold mr-2 z-1`}>Premium</span>
                </label>
            </div>
        </div>


    )
}

export default SignupPlanOptions
