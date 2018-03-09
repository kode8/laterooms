import React, { Component } from 'react';

// Assets
import './SearchFilter.scss'

const SearchFilter = (props) => {
    return (
        <ul className="search-filter">
             <li className="search-filter__item">Filter: </li>
             <li className="search-filter__item">
                <a className="search-filter__link" href="#carpark" onClick={ () => { props.onFilterChange('car park') } } >
                    Car park
                </a>
            </li>
            <li className="search-filter__item">
                <a className="search-filter__link" href="#gym" onClick={ () => { props.onFilterChange('gym') } } >
                    Gym
                </a>
            </li>
            <li className="search-filter__item">
                <a className="search-filter__link" href="#pool" onClick={ () => { props.onFilterChange('pool') } } >
                    Pool
                </a>
            </li>
            <li className="search-filter__item">
                <a className="search-filter__link search-filter__link--dimmed" href="#all" onClick={ () => { props.onFilterChange('all') } } >
                    Clear
                </a>
            </li>
        </ul>
    );
}

export default SearchFilter