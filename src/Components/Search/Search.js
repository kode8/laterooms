import React, { Component } from 'react';

// Assets
import './Search.scss'

class Search extends Component {

  constructor() {
    super();

    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState(
      { value: e.target.value }
    );
  }
 
  render() {
    
    const focus = (this.state.value !== "") 
      ? 'search-component__form-control-input search-component__form-control-input--focus' 
      : 'search-component__form-control-input';

    return (
      <div className="search-component">
        <form method="post" action="/fallback" className="search-component__form">
          <div className="search-component__form-control">
            <input type="input" className={ focus } value={this.state.value} onChange={ this.handleChange } />
            <label htmlFor="search" className="search-component__form-control-label">Search</label>
            <button type="submit" className="search-component__form-control-btn" value="search">Submit</button>
          </div>
        </form> 
      </div>
    );
  }
}

export default Search;