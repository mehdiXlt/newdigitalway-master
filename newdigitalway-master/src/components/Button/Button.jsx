import React from 'react'
import './Button.scss'
const Button = () => {
    return (
        <button className="learn-more">
            <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
            </span>
            <span className="button-text">Learn More</span>
        </button>
    )
}

export default Button