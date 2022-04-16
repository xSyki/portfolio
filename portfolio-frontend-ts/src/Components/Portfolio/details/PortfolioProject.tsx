import React from 'react';

function PortfolioProject(props) {

    return (
        <div className="portfolio-details">
            <h2 className="portfolio-details__title">Portfolio Project</h2>
            <div className="portfolio-details__photos">
                <img className="portfolio-details__photo" src="/Photos/portfolio/portfolio-splash-pc.png" alt="" />
            </div>
            <div className="portfolio-details__description">
                <p className="portfolio-details__text">
                    Page showing my works and skills. The 3d models were made in a blender and are displayed thanks to the three.js library.
                </p>
                <div className="portfolio-details__list">
                    <h3>Technologies used:</h3>
                    <ul>
                        <li>
                            React
                        </li>
                        <li>
                            Three.js
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
                    </ul>
                </div>
            </div>
            {/* <div className="portfolio-details__links">
                <button className="portfolio-details__button"
                    onClick={() => window.location.href = "http://www.superfarmer.io"}>Link</button>
                <button className="portfolio-details__button">More</button>
            </div> */}

        </div>
    );
}

export default PortfolioProject;