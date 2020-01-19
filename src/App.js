import React, { Component } from 'react';
import NamesList from './components/NamesList';
import Credit from './components/Credit';
import Search from './components/Search';
import Shortlist from './components/Shortlist';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filterText: '',
      favourites: [],
      data: this.props.data,
      shortlistedName: false
    }
  }

  //update search for input value
  filterUpdate = (value) => {
    this.setState({
      filterText: value
    })
  }

  addFavourite(id) {
    const favList = this.state.favourites.concat([id])
    this.setState({
      favourites: favList
    })
  }

  removeName(id) {
    const delName = this.state.NamesList.handleDelete([id])
    this.setState({
      NamesList: delName
    })
  }

  render() {
    return(
      <div>
        <Search 
        filterText={this.state.filterText}
        filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <Shortlist 
            favourites={this.state.favourites}
            data={this.state.data}
            />
          <NamesList 
            data={this.state.data}
            filterText={this.state.filterText}
            addFavourite={this.addFavourite.bind(this)}
            delName={this.removeName.bind(this)}
            shortlistedName={this.state}
          />
          <Credit />
        </main>
      </div>
    )
  }
}

export default App;

