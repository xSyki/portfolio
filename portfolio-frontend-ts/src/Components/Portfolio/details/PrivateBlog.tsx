import React from 'react';

function PrivateBlog(props) {

    return (
        <div className="portfolio-details">
            <h2 className="portfolio-details__title">Private Blog</h2>
            <div className="portfolio-details__photos">
                <img className="portfolio-details__photo" src="/Photos/privateBlog/makePost.png" alt="" />
                <img className="portfolio-details__photo" src="/Photos/privateBlog/posts-iphone.png" alt="" />
            </div>
            <div className="portfolio-details__description">
                <p className="portfolio-details__text">
                    Private Blog is your private journal where you can write down your thoughts. Only you can access them. You can register or use a test account. Login: 1234, Password: 1234.                </p>
                <div className="portfolio-details__list">
                    <h3>Technologies used:</h3>
                    <ul>
                        <li>
                            React
                        </li>
                        <li>
                            Redux
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
                            Mogoose
                        </li>
                        <li>
                            MongoDB
                        </li>
                    </ul>
                </div>
            </div>
            <div className="portfolio-details__links">
                <a className="portfolio-details__link" href="https://blog.syki.pl" target="_blank" rel="noopener noreferrer">Link</a>
            </div>
        </div>
    );
}

export default PrivateBlog;