import React from 'react';
import { Button } from '../Button';

export function SentMessage({state, handleSubmit, setInputEmail, setInputMessage}) {
    const onHandleButton = () => {
        setInputEmail("");
        setInputMessage("");
        handleSubmit(!state.succeeded)
    }

    
    return (
        <>
            <div className='SentMessage'>
                <h2>Thanks!</h2>
                <p>The form has been sent succesfully</p>
                <Button
                    type={"buttton"}
                    name={"Sent a new message"}
                    onHandleButton={onHandleButton}
                />
            </div>
        </>
    )
}
