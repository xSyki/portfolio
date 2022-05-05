import React from 'react';

interface PortfolioDetailsInterface {
    title: String,
    images: Array<String>,
    description: String,
    techStack: Array<String>,
    url?: String
}

function PortfolioDetails(props: PortfolioDetailsInterface) {

    const { title, images, description, techStack, url } = props

    return (
        <div className="portfolio-details">
            <h2 className="portfolio-details__title">{title}</h2>
            <div className="portfolio-details__photos">
                {
                    images.map(image => {
                        return (
                            <img className="portfolio-details__photo" src={image} alt="" />
                        )
                    })
                }
            </div>
            <div className="portfolio-details__description">
                <p className="portfolio-details__text">
                    {description}
                </p>
                <div className="portfolio-details__list">
                    <h3>Tech stack:</h3>
                    <ul>
                        {techStack.map(tech => {
                            return (
                                <li>
                                    {tech}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className="portfolio-details__links">
                {url && <a className="portfolio-details__link" href={url} target="_blank" rel="noopener noreferrer">Link</a>}
            </div>


        </div>
    );
}

export default PortfolioDetails;