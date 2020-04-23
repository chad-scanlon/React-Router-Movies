import React, { useState } from "react";
import { Route, Link, Switch } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = (movie) => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      {/* <MovieCard movies={savedList} /> */}

      <Switch>
        <Route path="/movies/:movieID">
          <Movie movies={savedList} />
        </Route>
        <Route path="/">
          {" "}
          <MovieList />
        </Route>
      </Switch>
    </div>

    // <div>
    //   <SavedList list={savedList} />
    //   <div>Replace this Div with your Routes</div>
    // </div>
  );
};

export default App;
