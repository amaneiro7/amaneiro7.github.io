import React from 'react';
import {useForm, ValidationError} from '@formspree/react'
import './Contact.css'

export function Contact() {
    const [ state, handleSubmit] = useForm("mwkjvdyb")
    if (state.succeeded) {
        return <p>
            Thanks for contact me!
        </p>
    }
    return (
        <section id='contact'>
            <h3>CONTACT</h3>
            <hr />
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">
                        Email Address:
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
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
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <button 
                        type="submit" 
                        disabled={state.submitting}
                        onClick={()=> onHandleclik}
                    >
                            Send
                    </button>
                </form>
            </div>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/amaneiro7/">
                        <img src="../../assets/images/linkedin.svg" alt="linkdIn" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/amaneiro7">
                        <img src="../../assets/images/github.svg" alt="GitHub" />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/Andruelectronic">
                        <img src="../../assets/images/twitter.svg" alt="Twitter" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/amaneiro7/">
                        <img src="../../assets/images/instagram.svg" alt="Instagram" />
                    </a>
                </li>
            </ul>
        </section>
    )
}
