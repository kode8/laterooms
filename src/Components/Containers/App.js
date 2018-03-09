import React, { Component } from 'react'
import Search from 'Components/Search/Search'
import PageResults from 'Components/SearchResults/PageResults/PageResults'

class App extends Component {
  render() {
    return (
      <div>
        <Search />
        <PageResults />
      </div>
    );
  }
}

export default App;