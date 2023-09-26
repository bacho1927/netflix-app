import SignupNavbar from "./Sign-up-components/SignupNavbar"
import SignupFooter from "./Sign-up-components/SignupFooter"

import { Outlet } from "react-router-dom"

function SignUp() {



    return (

        <div className="min-w-[500px]">
            <SignupNavbar />
            <Outlet />
            <SignupFooter />
        </div>


    )
}

export default SignUp
