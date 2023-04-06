import React, { lazy } from 'react';
import {ValidationError} from '@formspree/react'

const Button = lazy(() => import('@Components/Button'));

export default function Form({handleSubmit, state, inputEmail, inputMessage, setInputEmail, setInputMessage}) {
    const onChangeInputEmail = ({target: {value}}) => {
        setInputEmail(value)
    }
    const onChangeInputMessage = ({target: {value}}) => {
        setInputMessage(value)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">
                    Email Address:
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Introduce your email"
                    required
                    value={inputEmail}
                    onChange={onChangeInputEmail}                  
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <label htmlFor="">
                    Your message:
                </label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Leave a message"
                    value={inputMessage}
                    onChange={onChangeInputMessage}                 
                    required 
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <Button 
                    name={"Send"}
                    type={"submit"}
                    disabled={state.disabled}
                />  
            </form>
        </>
    )
}
