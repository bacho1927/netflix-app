import React, { useRef, useState } from "react"


function Mail({ inputId, labelFor }) {

    const [placeholderFocused, setPlaceholderFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleInputFocus = () => {
        setPlaceholderFocused(true);
    };

    const handleInputBlur = () => {
        if (inputValue === '') {
            setPlaceholderFocused(false);
        }
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const inputRef = useRef(null)

    const buttonFocusesInput = () => {
        inputRef.current.focus()
    }

    return (
        <form className="flex flex-col items-center  justify-center">
            <div className="gap-2 my-6 relative flex">
                <label
                    for={labelFor}
                    className={`absolute overflow-hidden mx-3  transition-all cursor-text  duration-300 ${placeholderFocused ? 'text-sm top-1 text-gray-300' : 'top-4 text-base text-[#969696] font-semibold'
                        }`}
                >
                    Email Address
                </label>
                <div className={`w-80 text-white bg-[#1E1E1E] bg-opacity-60 rounded-md border flex items-end border-gray-600 px-2 sm:w-96 ${placeholderFocused ? 'border-white' : ''}`}>
                    <input
                        ref={inputRef}
                        id={inputId}
                        type="text"
                        className={`w-full bg-transparent   outline-none  p-1 text-md  `}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        onChange={handleInputChange}

                    />
                </div>
                <button className="bg-[#E50914] hover:bg-[#a7131a] transition duration-500  text-white font-semibold text-md sm:text-xl p-3 px-6 rounded-md" onClick={buttonFocusesInput} type='button'>Get started {'>'}</button>
            </div>
        </form>
    )
}

export default Mail
