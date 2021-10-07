import React from 'react'


const styles = {
    input: {
        background: "rgba(47, 225, 215, 0.03)",
        border: "1px solid rgba(47, 215, 174, 0.11)",
        boxSizing: "border-box",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "6px",
    }
}

export default function Input({type, value, onChange, placeholder, width, height, props}) {
    return (
            <input 
                style={{
                    ...styles.input, 
                    boxShadow: type === "radio" ? "none" : "0px 4px 4px rgba(0, 0, 0, 0.25)", 
                    width: width, 
                    height: height
                }}
                type={type} 
                value={value} 
                onChange={onChange} 
                placeholder={placeholder}
                {...props}
            />
    )
}


Input.defaultProps = {
    type: "text",
    value: null,
    onChange: (e) => e.preventDefault(),
    width: 250,
    height: 30
}