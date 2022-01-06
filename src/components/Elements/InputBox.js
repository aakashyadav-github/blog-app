import React from 'react'

function InputBox(props) {
    return (
        <div>
            <span class="block font-medium text-gray-700 mt-2">{props.lableText}</span>
            {props.lableText=="Description" ?  <textarea type="text" class="resize mt-1 w-1/3 px-3 py-2 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder={props.placeHolder} />:  <input type="text" class="mt-1 w-1/3 px-3 py-2 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder={props.placeHolder} /> }
            
        </div>
    )
}

export default InputBox
