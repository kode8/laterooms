import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Assets
import './SearchFilter.scss'


const SearchFilter = (props) => {

    return (
        <ul className="search-filter">
             <li className="search-filter__item">Filter: </li>
             { 
                props.filtersList.map((name, index) => {
                   return(
                       
                        <li className="search-filter__item" key={ index }>
                            <a className= { (props.filterSelected == name) ? "search-filter__link search-filter__link--active" : "search-filter__link" } onClick={ () => { props.onFilterChange(name) } } >
                                { name }
                            </a>
                        </li>
                   )
                })
             } 
            <li className="search-filter__item">
                <a className="search-filter__link search-filter__link--dimmed" href="#all" onClick={ () => { props.onFilterChange('all') } } >
                    Clear
                </a>
            </li>
            <li className="search-filter__item">&nbsp;&nbsp;&nbsp;</li>
            <li className="search-filter__item">Order Star Rating: 
                <select className="search-filter__order" onChange={ props.onOrderChange } > 
                    <option value="" disabled default>Choose</option>
                    <option value="desc">High Rating</option>
                    <option value="asc">Low Rating</option>
                </select>
            </li>
        </ul>
    );
}

SearchFilter.propTypes = {
    onFilterChange: PropTypes.func,
    onOrderChange: PropTypes.func,
    filtersList: PropTypes.array,
    filterSelected: PropTypes.string
};

export default SearchFilter