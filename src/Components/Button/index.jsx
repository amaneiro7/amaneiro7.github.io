import React from 'react';
import './Button.css'

export default function Button(props) {
    const {name, type, disabled, onHandleButton} = props
    return (
        <button id='button'
            type={type}
            disabled={disabled}
            onClick={onHandleButton}
        >
            {name}
        </button>
    )
}
