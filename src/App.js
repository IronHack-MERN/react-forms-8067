import React, { Component } from 'react';
import './App.css';
import DynamicMoviesList from './components/dynamicListsDemo/DynamicMoviesList';
import TextareaAndSelectTagDemo from './components/dynamicListsDemo/TextareaAndSelectTagDemo';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Movies</h1>
        <hr />
        <DynamicMoviesList />
        <TextareaAndSelectTagDemo />
      </div>
    );
  }
}

export default App;