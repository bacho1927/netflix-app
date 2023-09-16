import Nav from "../FAQ-page/Navbar"
import { RxMagnifyingGlass } from "react-icons/rx"
function HelpNavbar() {
    return (
        <div className="bg-black pb-6 min-w-[500px]">
            <Nav >
                <h1 className="text-white text-xl md:text-3xl font-bold text-center pb-6">Help Center</h1>

            </Nav>
            <div className="relative ">
                <input className="w-1/2 mx-auto block  p-3 px-10 outline-none rounded " placeholder="What do you need help with?"></input>
                <RxMagnifyingGlass className="absolute text-black top-3 left-[26%] text-2xl" />
            </div>

        </div>
    )
}

export default HelpNavbar
