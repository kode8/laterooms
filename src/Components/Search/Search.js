import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Components
import SearchResults from 'Components/SearchResults/Autocomplete/SearchResults'

// Assets
import './Search.scss'

class Search extends Component {

  constructor(props) {
    super();

    this.state = {
      value: '',
      searchData : props.searchData
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState(
      { 
        value: e.target.value 
      }
    );
  }
 
  render() {

    const { searchData } = this.state;

    const focusClass = (this.state.value !== "") 
      ? 'search-component__form-control-input search-component__form-control-input--focus' 
      : 'search-component__form-control-input';

    return (
      <div className="search-component">
        <form method="post" action="/fallback" className="search-component__form">
          <div className="search-component__form-control">
            <input type="input" className={ focusClass } value={ this.state.value } onChange={ this.handleChange } id="search" />
            <label htmlFor="search" className="search-component__form-control-label">Search</label>
            <button type="submit" className="search-component__form-control-btn" value="search">Submit</button>
          </div>
        </form> 
        <SearchResults searchData={ searchData } />
      </div>
    );
  }
}

Search.propTypes = {
  searchData: PropTypes.array
};

export default Search