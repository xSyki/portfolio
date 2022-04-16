import React, { useState } from 'react';
import PasswordGenerator from './details/PasswordGenerator';
import Pomodoro from './details/Pomodoro';
import PortfolioProject from './details/PortfolioProject';
import PrivateBlog from './details/PrivateBlog';
import Ships from './details/Ships';
import SuperFarmer from './details/SuperFarmer';

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
                            Syki Ships
                        </button>
                    </li>
                </ul>
            </div>
            <div className="portfolio__details">
                {valueCheckBoxes.superFarmer && <SuperFarmer />}
                {valueCheckBoxes.privateBlog && <PrivateBlog />}
                {valueCheckBoxes.portfolio && <PortfolioProject />}
                {valueCheckBoxes.pomodoro && <Pomodoro />}
                {valueCheckBoxes.passwordGenerator && <PasswordGenerator />}
                {valueCheckBoxes.ships && <Ships />}
            </div>
        </section>
    );
}

export default Portfolio;