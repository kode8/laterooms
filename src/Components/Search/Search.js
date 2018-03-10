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
      searchData : []
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const input = e.target.value

    let filteredResults = this.props.searchData.filter( (item) => {
      const { Name } = item
      return (new RegExp(input, 'i')).test(Name)
    });

    if(input.length === 0) {
      filteredResults = [];
    }

    this.setState(
      { 
        value: input,
        searchData: filteredResults
      }
    );
  }

  render() {

    const { searchData } = this.state

    const isFocused = (this.state.value !== "") ? true : false

    return (
      <div className="search-component">
        <form method="post" action="/fallback" className="search-component__form">
          <div className="search-component__form-control">
            <input type="input" className="search-component__form-control-input" data-focus={ isFocused } value={ this.state.value } onChange={ this.handleChange } id="search" autocomplete="off" />
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