import Footer from "../FAQ-page/Footer"
import Nav from "../FAQ-page/Navbar"
import { RxMagnifyingGlass } from 'react-icons/rx'

function Help() {

    const showHelpCenterLink = false;

    return (
        <div className="bg-black pb-6">
            <div className="max-w-[80%] mx-auto">
                <Nav showHelpCenterLink={showHelpCenterLink}>
                    <h1 className="text-white text-xl md:text-3xl font-bold text-center pb-8">Help Center</h1>

                </Nav>
                <div className="relative ">
                    <input className="w-1/2 mx-auto block  p-3 px-10 outline-none rounded" placeholder="What do you need help with?"></input>
                    <RxMagnifyingGlass className="absolute text-black top-3 left-[26%] text-2xl" />
                </div>
            </div>
            <h2>hh</h2>
            <Footer />
        </div>
    )
}

export default Help
