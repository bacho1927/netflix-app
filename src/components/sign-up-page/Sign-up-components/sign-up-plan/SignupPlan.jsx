import { useState } from 'react';
import SignupPlanHeader from './SignupPlanHeader'
import SignupPlanOptions from './SignupPlanOptions'
import SignupPlanTable from './SignupPlanTable'
function SignupPlan() {

    const [selectedOption, setSelectedOption] = useState('Premium');

    const handleRadioChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className=" p-4 mx-auto max-w-[1024px] text-[#333] ">
            <SignupPlanHeader />
            <SignupPlanOptions selectedOption={selectedOption} handleRadioChange={handleRadioChange} />
            <SignupPlanTable selectedOption={selectedOption} />
        </div>

    )
}

export default SignupPlan
