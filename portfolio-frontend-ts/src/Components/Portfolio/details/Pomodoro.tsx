import React from 'react';

function Pomodoro(props) {

    return (
        <div className="portfolio-details">
            <h2 className="portfolio-details__title">Pomodoro</h2>
            <div className="portfolio-details__photos">
                <img className="portfolio-details__photo" src="/Photos/pomodoro/pomodoro-iphone.png" alt="" />
                <img className="portfolio-details__photo" src="/Photos/pomodoro/pomodoro-settings-iphone.png" alt="" />
            </div>
            <div className="portfolio-details__description">
                <p className="portfolio-details__text">
                    With this application you can adapt the pomodoro method to your needs and set goals for each time frame.                    </p>
                <div className="portfolio-details__list">
                    <h3>Technologies used:</h3>
                    <ul>
                        <li>
                            TypeScript
                        </li>
                        <li>
                            React
                        </li>
                        <li>
                            Scss
                        </li>
                    </ul>
                </div>
            </div>
            <div className="portfolio-details__links">
                <button className="portfolio-details__button"
                    onClick={() => window.location.href = "http://pomodoro.syki.pl"}>Link</button>
                {/* <button className="portfolio-details__button">More</button> */}
            </div>
        </div>
    );
}

export default Pomodoro;