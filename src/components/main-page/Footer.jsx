import { Link } from "react-router-dom";
import SelectLanguage from "./SelectLanguage";

function Footer() {
    return (

        <footer className="min-w-[500px]   bg-black py-14 border-t-8 border-[#2D2D2D] ">
            <div className="flex flex-col w-[90%] xl:w-[60%] mx-auto ">
                <Link to="/Contact" className="text-[#BEBEBE] text-lg underline ">Questions? Contact us.</Link>
                <div className="text-white ">
                    <ul className="grid  grid-cols-3 py-12 gap-2 underline  text-[#BEBEBE]">
                        <li><Link to="FAQ">FAQ</Link></li>
                        <li><a href='/'>Media Center</a></li>
                        <li><a href='/'>Ways to Watch</a></li>
                        <li><a href='/'>Cookie Preferences</a></li>
                        <li><a href='https://fast.com/'>Speed Test</a></li>
                        <li><a href='/'>Help Center</a></li>
                        <li><a href='/'>Investor Relations</a></li>
                        <li><a href='/'>Terms of Use</a></li>
                        <li><a href='/'>Corporate Information</a></li>
                        <li><a href='/'>Legal Notices</a></li>
                        <li><a href='/'>Account</a></li>
                        <li><a href='/'>Jobs</a></li>
                        <li><a href='/'>Privacy</a></li>
                        <li><a href='/'>Contact Us</a></li>
                        <li><a href='/'>Only on Netflix</a></li>
                    </ul>
                </div>
                <div className=" flex">
                    <SelectLanguage />
                </div>
                <p className="text-white py-4 text-lg">Netflix</p>
            </div>
        </footer>

    )
}

export default Footer
