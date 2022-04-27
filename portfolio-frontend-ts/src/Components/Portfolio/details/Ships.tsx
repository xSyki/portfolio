import React from 'react';

function Ships(props) {

    return (
        <div className="portfolio-details">
            <h2 className="portfolio-details__title">Ships</h2>
            <div className="portfolio-details__photos">
                <img className="portfolio-details__photo" src="/Photos/ships/ships-pc.png" alt="" />
            </div>
            <div className="portfolio-details__description">
                <p className="portfolio-details__text">
                    SykiShip is an implementation of a well-known game
                    Battleship in which we can play with an intelligent bot traditionally and in blind mode.
                </p>
                <div className="portfolio-details__list">
                    <h3>Technologies used:</h3>
                    <ul>
                        <li>
                            React
                        </li>
                        <li>
                            Css
                        </li>
                    </ul>
                </div>
            </div>
            <div className="portfolio-details__links">
                <button className="portfolio-details__button"
                    onClick={() => window.location.href = "http://ships.syki.pl"}>Link</button>
                {/* <button className="portfolio-details__button">More</button> */}
            </div>
        </div>
    );
}

export default Ships;