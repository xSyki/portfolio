import React, { useState } from 'react';
import PortfolioDetails from './details/PortfolioDetails';


function Portfolio() {

    const [valueCheckBoxes, setValueCheckBoxes] = useState({
        superFarmer: true,
        privateBlog: false,
        portfolio: false,
        pomodoro: false,
        passwordGenerator: false,
        ships: false,
    });

    const showDetails = (changed) => {
        const obj = JSON.parse(JSON.stringify(valueCheckBoxes));
        Object.keys(obj).forEach(key => {
            obj[key] = false;
        });
        obj[changed] = true;
        setValueCheckBoxes(obj);
        console.log(valueCheckBoxes);
    }

    return (
        <section className="portfolio">
            <div className="portfolio__generally">
                <h1 className="portfolio__title">
                    Portfolio
                </h1>
                <ul className="portfolio__list">
                    <li className="portfolio__list-item">
                        <button className="portfolio__button-change" value={valueCheckBoxes} onClick={() => showDetails("superFarmer")} >
                            Super Farmer
                        </button>
                    </li>
                    <li>
                        <button className="portfolio__button-change" value={valueCheckBoxes} onClick={() => showDetails("privateBlog")} >
                            Private Blog
                        </button>
                    </li>
                    <li>
                        <button className="portfolio__button-change" value={valueCheckBoxes} onClick={() => showDetails("portfolio")} >
                            Portfolio
                        </button>
                    </li>
                    <li>
                        <button className="portfolio__button-change" value={valueCheckBoxes} onClick={() => showDetails("pomodoro")} >
                            Pomodoro
                        </button>
                    </li>
                    <li>
                        <button className="portfolio__button-change" value={valueCheckBoxes} onClick={() => showDetails("passwordGenerator")} >
                            Password Generator
                        </button>
                    </li>
                    <li>
                        <button className="portfolio__button-change" value={valueCheckBoxes} onClick={() => showDetails("ships")} >
                            Ships
                        </button>
                    </li>
                </ul>
            </div>
            {/* <div className="portfolio__details">
                {valueCheckBoxes.superFarmer && <SuperFarmer />}
                {valueCheckBoxes.privateBlog && <PrivateBlog />}
                {valueCheckBoxes.portfolio && <PortfolioProject />}
                {valueCheckBoxes.pomodoro && <Pomodoro />}
                {valueCheckBoxes.passwordGenerator && <PasswordGenerator />}
                {valueCheckBoxes.ships && <Ships />}
            </div> */}
            <div className="portfolio__details">
                {valueCheckBoxes.superFarmer &&
                    <PortfolioDetails
                        title="SuperFarmer"
                        images={["/Photos/superFarmer/superFarmer-iphone.png", "/Photos/superFarmer/superFarmer-pc.png"]}
                        description="Super Farmer is a game based on the board game of the same name, but in English it is more recognizable under the name Animal Husbandry. This is the first online implementation and can be played by 2 to 6 players."
                        techStack={["React", "Scss", "NodeJS", "Express", "Socket.io"]}
                        url="https://www.superfarmer.io"
                    />}
                {valueCheckBoxes.privateBlog &&
                    <PortfolioDetails
                        title="Private Blog"
                        images={["/Photos/privateBlog/makePost.png", "/Photos/privateBlog/posts-iphone.png"]}
                        description="Private Blog is your private journal where you can write down your thoughts. Only you can access them. You can register or use a test account. Login: 1234, Password: 1234."
                        techStack={["React", "Redux", "Scss", "NodeJS", "Express", "Mogoose", "MongoDB"]}
                        url="https://blog.syki.pl"
                    />}
                {valueCheckBoxes.portfolio &&
                    <PortfolioDetails
                        title="Portfolio Project"
                        images={["/Photos/portfolio/portfolio-splash-pc.png"]}
                        description="Page showing my works and skills. The 3d models were made in a blender and are displayed thanks to the three.js library."
                        techStack={["React", "Three.js", "Scss"]}
                    />}
                {valueCheckBoxes.pomodoro &&
                    <PortfolioDetails
                        title="Pomodoro"
                        images={["/Photos/pomodoro/pomodoro-iphone.png", "/Photos/pomodoro/pomodoro-settings-iphone.png"]}
                        description="With this application you can adapt the pomodoro method to your needs and set goals for each time frame."
                        techStack={["TypeScript", "React", "Scss"]}
                        url="http://pomodoro.syki.pl"
                    />}
                {valueCheckBoxes.passwordGenerator &&
                    <PortfolioDetails
                        title="Password Generator"
                        images={["/Photos/password/passwordGenerator.png"]}
                        description="With the Password Generator app you can generate a secure password."
                        techStack={["React", "Css"]}
                        url="http://pass.syki.pl"
                    />}
                {valueCheckBoxes.ships &&
                    <PortfolioDetails
                        title="Ships"
                        images={["/Photos/ships/ships-pc.png"]}
                        description="SykiShip is an implementation of a well-known game Battleship in which we can play with an intelligent bot traditionally and in blind mode."
                        techStack={["React", "Css"]}
                        url="http://ships.syki.pl"
                    />}
            </div>

        </section>
    );
}

export default Portfolio;