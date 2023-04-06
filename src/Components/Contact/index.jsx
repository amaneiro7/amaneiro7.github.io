import React, { lazy, useState } from 'react';
import {useForm, ValidationError} from '@formspree/react'
import './Contact.css'

const SentMessage = lazy(() => import('./SentMessage'));
const Form = lazy(() => import('./Form'));

export default function Contact() {
    const [ state, handleSubmit] = useForm("mwkjvdyb");
    const [ inputEmail, setInputEmail ] = useState("");
    const [ inputMessage, setInputMessage ] = useState("");   


    return (
        <section id='contact'>
            <h3>CONTACT</h3>
            <hr />
            <div>
                {!state.succeeded && 
                    <Form 
                        handleSubmit={handleSubmit}
                        state={state}
                        inputEmail={inputEmail}
                        inputMessage={inputMessage}
                        setInputEmail={setInputEmail}
                        setInputMessage={setInputMessage}
                    />
                }
                {state.succeeded &&
                    <SentMessage 
                        state={state}
                        setInputEmail={setInputEmail}
                        setInputMessage={setInputMessage}
                        handleSubmit={handleSubmit}
                    />
                }

            </div>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/amaneiro7/" target={'_blank'}>
                        <img src="../../assets/images/linkedin.svg" alt="linkdIn" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/amaneiro7" target={'_blank'}>
                        <img src="../../assets/images/github.svg" alt="GitHub" />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/Andruelectronic" target={'_blank'}>
                        <img src="../../assets/images/twitter.svg" alt="Twitter" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/amaneiro7/" target={'_blank'}>
                        <img src="../../assets/images/instagram.svg" alt="Instagram" />
                    </a>
                </li>
            </ul>
        </section>
    )
}
