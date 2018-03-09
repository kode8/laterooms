import React, { Component } from 'react';

const SearchFilter = (props) => {
    return (
        <ul className="search-filter">
             <li className="search-filter__item"><a href="#carpark" onClick={ props.onFilterChange('carpark') } >Car park</a></li>
             <li className="search-filter__item"><a href="#gym"  onClick={ props.onFilterChange('gym') }>Gym</a></li>
        </ul>
    );
}

export default SearchFilter;