import Footer from "../FAQ-page/Footer"
import { Link } from "react-router-dom"
function HelpFooter() {
    return (
        <Footer >
            <div className="flex flex-col sm:flex-row items-center border-b py-6">
                <h1 className="text-white font-semibold text-lg md:text-2xl pb-4">Need more help? </h1>
                <button className="text-black mx-8 p-2 px-10 bg-white rounded font-bold"><Link to="/Contact">Contuct Us </Link></button>
            </div>
        </Footer>
    )
}

export default HelpFooter
