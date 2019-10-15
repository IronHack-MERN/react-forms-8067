import React from 'react'
import Card from './Card';

const movies = [
    { title: "Jurassic Park", director: "Steven Spielberg" },
    { title: "Sharknado", director: "Anthony C. Ferrante" },
    { title: "Titanic", director: "James Cameron" }
  ];

  export const MoviesList = () => {
    return (
      <ul>
        { movies.map((oneMovie,index) => 
          <Card key={index} title={oneMovie.title} director={oneMovie.director} />) 
        }
      </ul>
    )
  };
  