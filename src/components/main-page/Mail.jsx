import React, { useState } from "react"


//This is input component (including animation) , which has been used on several pages

function Mail({ inputId, labelFor, labelText, children, duration, background, inputRef, width }) {

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



    return (
        <form className="flex flex-col items-center   justify-center">
            <div className={`gap-2 my-2 relative flex  ${background}`}>
                <label
                    htmlFor={labelFor}
                    className={`absolute overflow-hidden mx-3  transition-all cursor-text  ${duration} ${placeholderFocused ? 'text-sm top-1 text-gray-300' : 'top-5 text-base text-[#969696] font-semibold'
                        }`}
                >
                    {labelText}
                </label>
                <div className={` text-white bg-[#1E1E1E] bg-opacity-60 rounded-md border flex items-end border-gray-600 px-3  ${width} ${placeholderFocused ? 'border-white' : ''}`}>
                    <input
                        ref={inputRef}
                        id={inputId}
                        type="text"
                        className={`w-full bg-transparent   outline-none  py-4 mt-1  `}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        onChange={handleInputChange}
                    />
                </div>

                {children}

            </div>
        </form>
    )
}

export default Mail
