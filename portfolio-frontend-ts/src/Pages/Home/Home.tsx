import React from 'react';
import SplashScreen from 'Components/SplashScreen/SplashScreen';
import Skills from 'Components/Skills/Skills';
import Contact from 'Components/Contact/Contact';
import Portfolio from 'Components/Portfolio/Portfolio';
// import History from 'Components/History/History';
import AboutMe from 'Components/AboutMe/AboutMe';

import Socials from 'Components/Socials/Socials';

function Home() {

    return (
        <div className="home">
            <SplashScreen />
            <AboutMe />
            <Portfolio />
            <Skills />
            {/* <History /> */}
            <Contact />
            <Socials />
        </div>
    );
}

export default Home;