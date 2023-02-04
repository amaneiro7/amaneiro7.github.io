import React from 'react';
import './Contact.css'

export function Contact() {
    return (
        <section>
            <h3>CONTACT</h3>
            <hr />
            <div>
                <p></p>
                <input type="email" />
                <p></p>
                <input type="text" />
                <button type='button'>
                    Send
                </button>
            </div>
            <ul>
                <li><a href="/"></a>LinkedIn</li>
                <li><a href="/"></a>GitHub</li>
                <li><a href="/"></a>Twitter</li>
                <li><a href="/"></a>Instagram</li>
            </ul>
        </section>
    )
}
