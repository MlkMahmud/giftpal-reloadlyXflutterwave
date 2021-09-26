import React from 'react'


export default function Button({
    title, 
    handleClick, 
    width, 
    height, 
    br,
    primary,
    secondary
    }) {

    return (
        <button 
        onClick={handleClick} 
        style={{
            width: width, 
            height: height, 
            borderRadius: br,
            background: primary ? "#DF932F" : secondary ? "#9F19F1" : "gray",
            color: "#FFFFFF",
            border: "none"
        }}
        >
            {title}
        </button>
    )
}

Button.defaultProps = {
    width: 100,
    height: 30,
    br: 5,
    title: "Submit",
    handleClick: (e) => e.preventDefault()
}