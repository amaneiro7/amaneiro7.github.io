import React, { Suspense, lazy } from "react";

const Hero = lazy(() => import('@Components/Hero'));
const Navbar = lazy(() => import('@Components/Navbar'));
const AboutMe = lazy(() => import('@Components/AboutMe'));
const Portfolio = lazy(() => import('@Components/Portfolio'));
const Skillset = lazy(() => import('@Components/Skillset'));
const Achievements = lazy(() => import('@Components/Achievements'));
const Contact = lazy(() => import('@Components/Contact'));
const Footer = lazy(() => import('@Components/Footer'));

export default function App() {       
    return (
        <>  
        <Suspense>
            <Hero/>
            <Navbar/>
            <main>
                <AboutMe/>
                <Portfolio/>
                <Skillset/>
                <Achievements/>
                <Contact/>
            </main>
            <Footer />
        </Suspense>
        </>
    )
}