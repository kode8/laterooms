import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Components
import ResultCard from 'Components/ResultCard/ResultCard'
import SearchFilter from 'Components/SearchFilter/SearchFilter'

// Assets
import './PageResults.scss'

class PageResults extends Component {

    constructor(props) {
      super();

      this.state = {
        searchData: props.searchData,
        filterSelected: 'all'
      }

      this.onOrderChange = this.onOrderChange.bind(this);
      this.onFilterChange = this.onFilterChange.bind(this);
    }

    fetchFilters() {
        // return all facilities
        const facilities = this.props.searchData.map((obj) => {
            return obj.Facilities
        });
    
        // flatten array
        var flattenedFilters = [].concat.apply([], facilities);
    
        // reduce 
        return [ ...new Set(flattenedFilters) ];
    }

    onFilterChange(filterCategory) {
        
        let filteredData = this.props.searchData // reset

        if(filterCategory!=='all') {
            filteredData = this.props.searchData.filter( (data) => {
                return data.Facilities.includes(filterCategory)
            });
        } 

        this.setState({
            searchData: filteredData,
            filterSelected: filterCategory
        })
    }

    onOrderChange(e) {
        this.reorder(e.target.value);
    }

    reorder(order) {

        let orderedSearchData = this.state.searchData.sort((a, b) => {
            if(order === 'asc') {
                return a.StarRating - b.StarRating
            } else { 
                return b.StarRating - a.StarRating
            } 
        })

        this.setState({
            searchData: orderedSearchData
        })
    }


    render() {
        return(
            <div>
                <SearchFilter onFilterChange={ this.onFilterChange } 
                              onOrderChange={ this.onOrderChange } 
                              filtersList={ this.fetchFilters() } 
                              filterSelected={ this.state.filterSelected }  />
                { 
                    this.state.searchData.map( (item, index) => {
                        return (
                            <ResultCard result={ item } key={ index } />
                        )
                    })
                }
            </div>
        )
    }
}

PageResults.propTypes = {
    searchData: PropTypes.array
};

export default PageResults