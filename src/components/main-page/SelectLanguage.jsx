import { BsGlobe2 } from 'react-icons/bs'
import { AiFillCaretDown } from 'react-icons/ai'

//This is select component

function SelectLanguage() {
    return (
        <div>
            <div className="relative flex items-center">
                <BsGlobe2 className="text-white absolute m-3" />

                <select className="h-10 px-10 bg-transparent text-white font-semibold border border-gray-400 rounded-md appearance-none ">

                    <option value='eng' label="English" className="text-black ">English</option>
                    <option value='rus' label="Русский" className="text-black">Русский</option>
                </select>
                <AiFillCaretDown className="text-white absolute right-2" />
            </div>
        </div>
    )
}

export default SelectLanguage
