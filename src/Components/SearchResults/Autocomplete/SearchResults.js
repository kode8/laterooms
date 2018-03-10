import React from 'react'

import './SearchResults.scss'

const SearchResults = (props) => {

    const isHidden = (props.searchData.length > 0) ? false : true

    return (
        <ul className="search-results" aria-hidden={ isHidden }>
        { 
            props.searchData.map( (item, index) => {
                let { Name } = item;
                return (
                    <li className="search-results__item" key={ index } >
                        <a href="#" className="search-results__item-link">{ Name }</a>
                    </li>
                )
            })
        }
        </ul>

    );
}

export default SearchResults