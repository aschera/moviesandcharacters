import React, { Component } from 'react';

import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    title: 'Star wars movies',
    input : '',
    list : [],
    filteredlist: [],
    loading: true,
    movieInfo: 'No movie selected',
    filterOptions : [ 'Sort by...', 'Episode', 'Year'],
    search: '',
    url : 'https://swapi.dev/api/films/'
  }

  componentDidMount() {
    this.api();
  }

  RunWhenCreated(){

  }

  filterListHandler = (e) => {

    let currentFilter = this.state.filter;
    let result = [];
    let data = this.state.filteredlist;

    /* clear list in DOM*/
    document.getElementById('output').innerHTML = '';

    /* edit filter*/
    if(e === 'Sort by...') {
      this.api();
    }
    if(e === 'Year') {
      currentFilter = 'release_date';
      this.setState( {
        filter: currentFilter,
        filteredlist: []
      } )

      result = data.sort(function (a, b) {
        let current = a[currentFilter].slice(0, 4);
        let next = b[currentFilter].slice(0, 4);
        return current - next;
      });
    }

    if(e === 'Episode') {
      currentFilter = 'episode_id';
      this.setState( {
        filter: currentFilter,
        filteredlist: []
      } )

      result = data.sort(function (a, b) {
        return a[currentFilter] - b[currentFilter];
      });
    }

    this.setState( {
      filteredlist : result
    } )

  }

  searchListHandler = (e) => {

    // search term must be lowercase
    let searchTerm = e.toLowerCase();

    // current list of items
    let list = this.state.list;
    let tmp = this.state.filteredlist;

    let result = []

    // find search term
    tmp.forEach(function callback(value) {

      let title = value.title.toLowerCase();

      if (title.includes(searchTerm)) {
        result.push(value)
      }
    });


    if (searchTerm === '') {
      this.setState( {
        filteredlist : list
      } )
    }
    else {
    /* clear list in DOM*/
    document.getElementById('output').innerHTML = '';

    this.setState( {
      filteredlist : result
    } )
    }

  }


  inputChangedHandler = (event) => {

    let currentFilter = event.target.value;
    currentFilter = currentFilter.toLowerCase();

    let data = this.state.filteredlist;
    let result = [];

    /* clear list in DOM*/
    document.getElementById('output').innerHTML = '';


    let query = document.getElementById('filter')
    query.innerHTML = ` ${currentFilter} <i class="fas fa-times"></i>`;
    query.setAttribute("style",
    "color:red; border: 1px solid blue; padding: 0.7em");


    for (let i = 0; i < data.length; i++) {
      var str = data[i].title;
      str = str.toLowerCase();
      var n = str.search(currentFilter);
      if(n !== -1) {
        result.push(data[i])
      }
      if(currentFilter === '') {
        this.api();
      }
    }

    this.setState( {
      input: currentFilter,
      list: result
    } )

  }

  api() {
    // read all entities
    fetch(this.state.url, {
      "method": "GET"
    })
    .then(response => response.json())
    .then(response => {
      this.setState( {
        loading: false,
        list : response.results,
        filteredlist: response.results
      } )
      this.RunWhenCreated();
    })
    .catch(err => { console.log(err);
    });
  }


  render () {

    return (
      <div className="App">
        <header>
          <h1 className="h1 title">{this.state.title}</h1>

          <details className="about-details">
            <summary>About this App</summary>
            <p>
              This is an app made with React. <br></br>
              It calls an API (https://swapi.dev/api/films/).<br></br>
              It fetches a list of movies (Star Wars).
              <em>This can take a few moments!</em>
              <br></br>
              You can filter the list by year or title. Click on the list to
              select a movie. Details are shown to the right.<br></br>
              The search field works with the title only at the moment (and can
              be buggy ) .
            </p>
          </details>

          <div className="ActiveFilter">
            <span id="filter"></span>
          </div>

          <UserInput
            InputName={this.inputChangedHandler}
            input={this.state.input}
            filterOptions={this.state.filterOptions}
            filterListHandler={this.filterListHandler}
            searchListHandler={this.searchListHandler}
          />
        </header>

        <main>
          <UserOutput
            loading={this.state.loading}
            output={this.state.filteredlist}
            movieInfo={this.state.movieInfo}
            createNode={this.state.createNode}
            append={this.state.append}
          />
        </main>
      </div>
    );

  }
}

export default App;