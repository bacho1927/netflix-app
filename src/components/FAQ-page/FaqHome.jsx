import Main from "./Main"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { Link } from "react-router-dom"

function FaqHome() {
    return (
        <div>
            <Navbar />
            <Main />
            <Footer >
                <div className="flex flex-col sm:flex-row items-center border-b py-6">
                    <h1 className="text-white font-semibold text-lg xl:text-2xl pb-4">Need more help? </h1>
                    <button className="text-black mx-8 p-2 px-10 bg-white rounded font-bold"><Link to="/Contact">Contuct Us </Link></button>
                </div>
            </Footer>
        </div>
    )
}

export default FaqHome
