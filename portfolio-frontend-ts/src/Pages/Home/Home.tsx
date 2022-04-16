import React from 'react';
import SplashScreen from 'Components/SplashScreen/SplashScreen';
import Skills from 'Components/Skills/Skills';
import Contact from 'Components/Contact/Contact';
import Portfolio from 'Components/Portfolio/Portfolio';
import History from 'Components/History/History';
import AboutMe from 'Components/AboutMe/AboutMe';

function Home() {

    return (
        <div className="home">
            <SplashScreen />
            <AboutMe />
            <Portfolio />
            <Skills />
            {/* <History /> */}
            <Contact />
        </div>
    );
}

export default Home;