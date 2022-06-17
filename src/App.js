import { useState } from "react";
import "./App.css";
import Movies from "./components/Movies";
import SearchBar from "./components/SearchBar";

function App() {
  const [movies, setMovies] = useState(["Apple", "Banana", "Carrot"]);
  const [inputValue, SetinputValue] = useState("");
  function onFilter(value) {
    //buat state untuk simpan inputValuenya
    //simpan value onsubmit ke statenya
    //passing valuenya ke component Movies
    //consume statenya di component Movies
    //filter valuenya di movies
    console.log("dah sampai onFilter");
    console.log(value, "ini value dari keyboard");
    SetinputValue(value);
    // const available = movies.includes(value);
    // console.log(available, "available ");
    // if (available) {
    //   const tempt = movies.filter((v) => {
    //     return v === value;
    //   });
    //   // setMovies(tempt);
    // }
  }
  return (
    <>
      <SearchBar onFilter={onFilter} />
      <Movies movies={movies} inputValue={inputValue} />
    </>
  );
}

export default App;
