import React, { Component } from 'react';

// Assets
import './Search.scss'

class Search extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="search-component">
        <form method="post" action="/fallback" className="search-component__form">
          <div className="search-component__form-control">
            <input type="input" className="search-component__form-control-input" />
            <label htmlFor="search" className="search-component__form-control-label">Search</label>
            <button type="submit" className="search-component__form-control-btn" value="search">Submit</button>
          </div>
        </form> 
      </div>
    );
  }
}

export default Search;