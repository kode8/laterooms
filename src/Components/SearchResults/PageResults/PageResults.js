import React from 'react'

// Components
import ResultCard from 'Components/ResultCard/ResultCard';

// Assets
import './PageResults.scss'

const PageResults = (props) => {
    return (
        <div>
        { 
            props.searchData.map( (item, index) => {
                return (
                    <ResultCard result={ item } key={ index } />
                )
            })
        }
        </div>
    );
}

export default PageResults;