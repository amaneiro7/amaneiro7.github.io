import React from 'react';
import './ALinkButton.css'

export default function ALinkButton(props) {
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
