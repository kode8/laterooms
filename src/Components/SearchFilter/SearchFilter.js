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
            <li className="search-filter__item">&nbsp;&nbsp;&nbsp;</li>
            <li className="search-filter__item">Order Star Rating: 
                <select className="search-filter__order" onChange={ props.onOrderChange } > 
                    <option value="" disabled>Order</option>
                    <option value="desc">High Rating</option>
                    <option value="asc">Low Rating</option>
                </select>
            </li>
        </ul>
    );
}

export default SearchFilter