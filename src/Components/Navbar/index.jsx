import React, {useState} from 'react';
import './Navbar.css'

export default function Navbar() {
    const [state, setState] = useState(false)
    return (

            <nav id='navbar'>
                <div className='navbar__container'>
                    <a href="/">
                        <img className='navbar__logo' src="./../../assets/images/profile-pic.png" alt="profile pic"/>
                        <p>Andres Maneiro
                            <br />
                            <small>IT Support | Frontend Developer</small>
                        </p>
                    </a>
                    <button className={`navbar__btn ${state && "active"}`}
                        onClick={() => setState(!state)}
                    >
                        ☰
                    </button>
                </div>
                    {state && 
                    <div className={`navbar__menu ${state && "active"}`}>
                        <ul>
                            <li>
                                <a href="#aboutme"
                                    onClick={() => setState(false)}
                                >
                                    About Me
                                </a>
                            </li>
                            <li>
                                <a href="#portfolio"
                                    onClick={() => setState(false)}
                                >
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a href="#skillset"
                                    onClick={() => setState(false)}
                                >
                                    Skillset
                                </a>
                            </li>
                            <li>
                                <a href="#achievements"
                                    onClick={() => setState(false)}
                                >
                                    Achievements
                                </a>
                            </li>
                            <li>
                                <a href="#contact"
                                    onClick={() => setState(false)}
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    }
            </nav> 
    )
}