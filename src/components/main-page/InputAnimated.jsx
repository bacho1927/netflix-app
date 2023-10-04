import React, { useState } from "react"
import { useRef } from "react";
import { UserAuth } from "../../context/AuthContext";
//This is input component (including animation) , which has been used for several pages

function InputAnimated({ children, inputId, labelFor, labelText, duration, background, width, focusedStyles, normalStyles, borderColor, textColor, onSubmit, type, value, onChange }) {




    const inputRef = useRef(null);

    const { inputValue } = UserAuth();

    const [placeholderFocused, setPlaceholderFocused] = useState(inputValue !== '');



    const handleInputFocus = () => {

        setPlaceholderFocused(true);

    };


    const handleInputBlur = () => {
        if (inputRef.current.value === '') {
            setPlaceholderFocused(false);
        }
    };

    return (
        <form className="flex flex-col items-center   justify-center" onSubmit={onSubmit}>
            <div className={`gap-2 my-2 relative flex   ${background}`}>
                <label
                    htmlFor={labelFor}
                    className={`absolute overflow-hidden mx-3  transition-all cursor-text    ${duration} ${placeholderFocused ? focusedStyles : normalStyles
                        }`}
                >
                    {labelText}
                </label>
                <div className={` ${textColor}  ${background ? background : 'bg-[#1E1E1E]'} bg-opacity-60 rounded-md border flex items-end border-gray-600 px-3  ${width} ${placeholderFocused ? borderColor : ''}`}>
                    <input
                        ref={inputRef}
                        id={inputId}
                        type={type}
                        className={`w-full bg-transparent   outline-none  py-4 mt-1  `}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        onChange={onChange}
                        value={value}


                    />
                </div>

                {children}

            </div>
        </form>
    )
}

export default InputAnimated


// import React, { useState } from "react"
// import { useRef } from "react";
// import { UserAuth } from "../../context/AuthContext";
// //This is input component (including animation) , which has been used for several pages

// function InputAnimated({ children, inputId, labelFor, labelText, duration, background, width, focusedStyles, normalStyles, borderColor, textColor, onSubmit, type, value, onChange }) {




//     const inputRef = useRef(null);

//     const { inputValue, updateInputValue } = UserAuth();

//     const [placeholderFocused, setPlaceholderFocused] = useState(inputValue !== '');




//     const handleInputFocus = () => {

//         setPlaceholderFocused(true);

//     };


//     const handleInputBlur = () => {
//         if (inputRef.current.value === '') {
//             setPlaceholderFocused(false);
//         }
//     };

//     return (
//         <form className="flex flex-col items-center   justify-center" onSubmit={onSubmit}>
//             <div className={`gap-2 my-2 relative flex   ${background}`}>
//                 <label
//                     htmlFor={labelFor}
//                     className={`absolute overflow-hidden mx-3  transition-all cursor-text    ${duration} ${placeholderFocused ? focusedStyles : normalStyles
//                         }`}
//                 >
//                     {labelText}
//                 </label>
//                 <div className={` ${textColor}  ${background ? background : 'bg-[#1E1E1E]'} bg-opacity-60 rounded-md border flex items-end border-gray-600 px-3  ${width} ${placeholderFocused ? borderColor : ''}`}>
//                     <input
//                         ref={inputRef}
//                         id={inputId}
//                         type={type}
//                         className={`w-full bg-transparent   outline-none  py-4 mt-1  `}
//                         onFocus={handleInputFocus}
//                         onBlur={handleInputBlur}
//                         onChange={onChange}
//                         value={value}


//                     />
//                 </div>

//                 {children}

//             </div>
//         </form>
//     )
// }

// export default InputAnimated
