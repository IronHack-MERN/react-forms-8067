import React, { Component } from 'react';
import './App.css';
import DynamicMoviesList from './components/dynamicListsDemo/DynamicMoviesList'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Movies</h1>
        {/* <div>
          <MoviesList />
        </div> */}
        <hr />
        <DynamicMoviesList />
      </div>
    );
  }
}

// TO-DO
// Practice time!
// Inside <DynamicMoviesList /> create button that will Add Harry Potter movie to the list. 
// Easy right? But make sure you don’t mutate state directly!

export default App;