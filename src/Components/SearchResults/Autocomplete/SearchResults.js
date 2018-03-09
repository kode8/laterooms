import React from 'react'

import './SearchResults.scss'

const SearchResults = (props) => {
    
    const searchResults = [
        {
            "Name": "The Hilton - Manchester",
            "StarRating": 5,
            "Price": "200",
            "Facilities": [
                "car park",
                "pool"
            ]
        },
        {
            "Name": "The Rosell - Leeds",
            "StarRating": 3,
            "Price": "245",
            "Facilities": [
                "car park",
                "gym"
            ]
        },
        {
            "Name": "Ibis - London",
            "StarRating": 3,
            "Price": "140",
            "Facilities": []
        }
    ];


    return (
        
        <ul className="search-results">
        { 
            searchResults.map( (item, index) => {
                let { Name } = item;
                return (
                    <li className="search-results__item" key="index" > { Name } </li>
                )
            })
        }
        </ul>

    );
}

export default SearchResults;