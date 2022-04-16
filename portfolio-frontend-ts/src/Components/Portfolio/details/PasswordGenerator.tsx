import React from 'react';

function PasswordGenerator(props) {

    return (
        <div className="portfolio-details">
            <h2 className="portfolio-details__title">Password Generator</h2>
            <div className="portfolio-details__photos">
                <img className="portfolio-details__photo" src="/Photos/password/passwordGenerator.png" alt="" />
            </div>
            <div className="portfolio-details__description">
                <p className="portfolio-details__text">
                    With the Password Generator app you can generate a secure password.
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
                    onClick={() => window.location.href = "http://pass.syki.pl"}>Link</button>
                {/* <button className="portfolio-details__button">More</button> */}
            </div>

        </div>
    );
}

export default PasswordGenerator;