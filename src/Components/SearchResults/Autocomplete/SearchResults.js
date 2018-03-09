import React from 'react'

import './SearchResults.scss'

const SearchResults = (props) => {

    return (
        <ul className="search-results">
        { 
            props.searchData.map( (item, index) => {
                let { Name } = item;
                // return (
                //    { <li className="search-results__item" key={ index } > { Name } </li> */ }
                // )
            })
        }
        </ul>

    );
}

export default SearchResults;