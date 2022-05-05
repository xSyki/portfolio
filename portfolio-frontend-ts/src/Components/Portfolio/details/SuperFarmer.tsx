import React from 'react';


function SuperFarmer(props) {

    return (
        <div className="portfolio-details">
            <h2 className="portfolio-details__title">SuperFarmer</h2>
            <div className="portfolio-details__photos">
                <img className="portfolio-details__photo" src="/Photos/superFarmer/superFarmer-iphone.png" alt="" />
                <img className="portfolio-details__photo" src="/Photos/superFarmer/superFarmer-pc.png" alt="" />
            </div>
            <div className="portfolio-details__description">
                <p className="portfolio-details__text">
                    Super Farmer is a game based on the board game of the same name, but in English it is more recognizable under the name Animal Husbandry. This is the first online implementation and can be played by 2 to 6 players.
                </p>
                <div className="portfolio-details__list">
                    <h3>Technologies used:</h3>
                    <ul>
                        <li>
                            React
                        </li>
                        <li>
                            Scss
                        </li>
                        <li>
                            NodeJS
                        </li>
                        <li>
                            Express
                        </li>
                        <li>
                            Socket.io
                        </li>
                    </ul>
                </div>
            </div>
            <div className="portfolio-details__links">
                <a className="portfolio-details__link" href="https://www.superfarmer.io" target="_blank" rel="noopener noreferrer">Link</a>
            </div>


        </div>
    );
}

export default SuperFarmer;