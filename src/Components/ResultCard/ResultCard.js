import React from 'react';

import './ResultCard.scss'

const ResultCard = (props) => {
    const { Name, StarRating, Facilities } = props.results
    return (
        <div class="result-card">
            <figure className="result-card__figure">
                <img src="http://via.placeholder.com/350x150" alt={ Name } class="result-card__figure-img">
                <figcaption  className="result-card__figure-caption">
                    <h2 className="result-card__figure-title">{ Name }</h2>
                    <ul className="result-card__figure-desc">
                        <li className="result-card__figure-desc-rating" data-stars={ StarRating }><span>5 Star Rating</span></li>
                        <li className="result-card__figure-desc-reviews"><span>105 guest reviews</span></li>
                    </ul>
                </figcaption>
            </figure>
            <div className="result-card-cta">
                <span className="result-card-cta__nights">1 night</span>
                <span className="result-card-cta__price">&pound;265</span>
                <a href="" className="result-card-cta__btn">view</a>
            </div>
        </div>
    );
}

export default ResultCard;