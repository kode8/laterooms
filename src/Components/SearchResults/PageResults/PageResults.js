import React, { Component } from 'react'

// Components
import ResultCard from 'Components/ResultCard/ResultCard'
import SearchFilter from 'Components/SearchFilter/SearchFilter'

// Assets
import './PageResults.scss'

class PageResults extends Component {

    constructor(props) {
      super();
  
      this.state = {
        searchData : props.searchData
      }
  
      this.onFilterChange = this.onFilterChange.bind(this);
    }

    onFilterChange() {
        console.log('Here');
    }

    render() {
        return(
            <div>
                <SearchFilter onFilterChange={ this.onFilterChange } />
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

export default PageResults;