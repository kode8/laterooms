import React, { Component } from 'react'
import Search from 'Components/Search/Search'
import PageResults from 'Components/SearchResults/PageResults/PageResults'

class App extends Component {


  render() {

    const searchData = [
      {
          "Name": "The Hilton - Manchester",
          "StarRating": 5,
          "Price": "200",
          "Facilities": [
              "car park",
              "pool"
          ]
      },
      {
          "Name": "The Rosell - Leeds",
          "StarRating": 3,
          "Price": "245",
          "Facilities": [
              "car park",
              "gym"
          ]
      },
      {
          "Name": "Ibis - London",
          "StarRating": 3,
          "Price": "140",
          "Facilities": []
      }
    ];

    return (
      <div>
        <Search searchData={ searchData } />
        <PageResults searchData={ searchData } />
      </div>
    );
  }
}

export default App;