import "../App.css";

import MoviesBox from "./MoviesBox";

function Movies({ movies, inputValue }) {
  function LoopMovieBox() {
    // return movies.map((value) => {
    //   return <MoviesBox value={value} />;
    // });
    if (inputValue !== "") {
      console.log("Hello dah sampai if");
      console.log(inputValue, "input Value aa");
      return movies
        .filter((values) => values === inputValue)
        .map((value) => {
          return <MoviesBox value={value} />;
        });
    } else {
      return movies.map((value) => {
        return <MoviesBox value={value} />;
      });
    }
  }
  return <div className="MoviesBoxContainer">{LoopMovieBox()}</div>;
}

export default Movies;
