import React, {useState} from 'react';
import './Navbar.css'

export function Navbar() {
    const [state, setState] = useState(false)
    return (
        <>
            <nav id='navbar'>
                <div className='navbar__container'>
                    <a href="/">
                        <img className='navbar__logo' src="./../../assets/images/profile-pic.png" alt="profile pic"/>
                        <p>
                            Andres Maneiro
                            <small>
                                IT Sopport | Frontend Developer
                            </small>
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
                            <li><a href="#aboutMe">About Me</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#skillset">Skillset</a></li>
                            <li><a href="#achievements">Achievements</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    }
            </nav>
        </>
    )
}