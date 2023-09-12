import SelectLanguage from "./SelectLanguage";

function Footer() {
    return (

        <footer className="min-w-[500px]   bg-black py-14 ">
            <div className="flex flex-col w-[90%] xl:w-[60%] mx-auto ">
                <a href="/" className="text-[#BEBEBE] text-lg underline ">Questions? Contact us.</a>
                <div className="text-white ">
                    <ul className="grid  grid-cols-3 py-12 gap-2 underline  text-[#BEBEBE]">
                        <li>FAQ</li>
                        <li>Media Center</li>
                        <li>Ways to Watch</li>
                        <li>Cookie Preferences</li>
                        <li>Speed Test</li>
                        <li>Help Center</li>
                        <li>Investor Relations</li>
                        <li>Terms of Use</li>
                        <li>Corporate Information</li>
                        <li>Legal Notices</li>
                        <li>Account</li>
                        <li>Jobs</li>
                        <li>Privacy</li>
                        <li>Contact Us</li>
                        <li>Only on Netflix</li>
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
