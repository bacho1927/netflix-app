import HelpArticle from "./HelpArticle"
import HelpFooter from "./HelpFooter"
import HelpMain from "./HelpMain"
import Nav from './HelpNavbar'


function Help() {
    return (
        <div>
            <Nav />
            <HelpMain />
            <HelpArticle />
            <HelpFooter />
        </div>
    )
}

export default Help
