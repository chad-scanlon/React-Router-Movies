import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SavedMovies from "./SavedMovies";

const Movie = (props) => {
  const [movie, setMovie] = useState();
  const params = useParams();
  console.log(params);
  console.log(props);

  useEffect(() => {
    const id = params.movieID;
    // const id = props.movies.find(
    //   (movie) => movie.id === Number(params.movieID)
    // );
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then((response) => {
        console.log(response);
        setMovie(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [params.movieID, props.movies]);

  // Uncomment this only when you have moved on to the stretch goals
  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie);
    console.log(props);
  };

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;
  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map((star) => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <div className="save-button" onClick={saveMovie}>
        Save
      </div>
    </div>
  );
};

export default Movie;
