import React from 'react';
import './ALinkButton.css'

export function ALinkButton(props) {
    const {name, link} = props
    return (
        <a 
            id='alinkbutton' 
            href={link} 
            target={'_blank'}
        >
            {name}
        </a>
    )
}
