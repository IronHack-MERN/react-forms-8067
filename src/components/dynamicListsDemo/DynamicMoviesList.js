import React, { Component } from 'react';
import ImprovedCard from './ImprovedCard';

class DynamicMoviesList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [
        { title: "The Godfather", director: "Francis Coppola", hasOscars: true, IMDbRating: 9.2 },
        { title: "Star Wars", director: "Rian Johnson", hasOscars: true, IMDbRating: 8.7 },
        { title: "The Shawshank Redemption", director: "Frank Darabont", hasOscars: false, IMDbRating: 9.3 }
      ],
      showOscarAwarded: false
    }
  }

  toggleMovies = () => {
    this.setState({ showOscarAwarded: !this.state.showOscarAwarded })
  }

  deleteMovieHandler = (movieIndex) => {

    // aquí estamos mutando el estado original, pero no debemos hacerlo
    // const moviesCopy = this.state.movies;

    // Para no hacerlo, podemos hacer  una copia del estado o mejor dicho, parte del estado que se va a cambiar
    // por lo que actualizo el estado de manera inmutable utilizando el operador de propagación 
    // const moviesCopy = [...this.state.movies]; // <== notice the spread operator here!

    const moviesCopy = [...this.filteredMovies];

    // splice() elimina o agrega nuevos elementos en la posición indicada
    // .splice(movieIndex,1) --> elimina un elemento en la posición movieIndex
    moviesCopy.splice(movieIndex, 1);
    this.setState({
      movies: moviesCopy
    })
  }

  filteredMovies;

  render() {
    console.log(this.state.movies);
    const { showOscarAwarded } = this.state;
    this.filteredMovies = this.state.movies.filter(theMovie => theMovie.hasOscars === showOscarAwarded);

    return (
      <div>
        {
          this.state.movies.map((oneMovie, index) => {
            return (
              <div>
                {
                  this.filteredMovies.map((oneMovie, index) => {
                    // return <ImprovedCard key={index} {...oneMovie} clickToDelete={this.deleteMovieHandler.bind(this, index)} />
                    return <ImprovedCard key={index} {...oneMovie} clickToDelete={() => this.deleteMovieHandler(index)} />
                  })
                }
                <button onClick={() => this.toggleMovies()}>
                  {showOscarAwarded ? 'Hide Oscar Awarded' : 'Show Oscar Awarded'}
                </button>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default DynamicMoviesList;