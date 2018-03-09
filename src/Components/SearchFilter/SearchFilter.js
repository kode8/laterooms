import React, { Component } from 'react';

// Assets
import './SearchFilter.scss'

const SearchFilter = (props) => {
    return (
        <ul className="search-filter">
             <li className="search-filter__item">Filter: </li>
             <li className="search-filter__item">
                <a className="search-filter__link" href="#carpark" onClick={ props.onFilterChange('carpark') } >
                    Car park
                </a>
            </li>
            <li className="search-filter__item">
                <a className="search-filter__link" href="#gym" onClick={ props.onFilterChange('gym') } >
                    Gym
                </a>
            </li>
            <li className="search-filter__item">
                <a className="search-filter__link search-filter__link--dimmed" href="#gym" onClick={ props.onFilterChange('gym') } >
                    Clear
                </a>
            </li>
        </ul>
    );
}

export default SearchFilter;