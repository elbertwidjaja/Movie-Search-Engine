import "../App.css";

import { useState } from "react";
import MoviesBox from "./MoviesBox";

function Movies() {
  const [movies, setMovies] = useState(["Apple", "Banana", "Carrot"]);
  //filter setstatenya dengan movie title yang telah kita search di searchbar
  //lalu update tampilan yang telah di filter

  function LoopMovieBox() {
    return movies.map((value) => {
      return <MoviesBox value={value} />;
    });
  }
  return <div className="MoviesBoxContainer">{LoopMovieBox()}</div>;
}

export default Movies;
