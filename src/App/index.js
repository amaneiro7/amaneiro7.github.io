import React from "react";
import { Hero } from '@Components/Hero';
import { Navbar } from '@Components/Navbar';
import { AboutMe } from '@Components/AboutMe';
import { Portfolio } from '@Components/Portfolio';
import { Skillset } from '@Components/Skillset';
import { Achievements } from '@Components/Achievements';
import { Contact } from '@Components/Contact';
import { Footer } from '@Components/Footer';
import { skillsetDB, portfolioDB, achievementsDB } from './useDatabaseInfo';

function App() {       
    return (
        <>   
            <header>
                <Hero/>
                <Navbar/>
            </header>
            <main>
                <AboutMe/>
                <Portfolio
                    portfolioDB={portfolioDB}
                />
                <Skillset
                    skillsetDB={skillsetDB}
                />
                <Achievements
                    achievementsDB={achievementsDB}
                />
                <Contact/>
            </main>
            <Footer />
        </>
    )
}

export default App