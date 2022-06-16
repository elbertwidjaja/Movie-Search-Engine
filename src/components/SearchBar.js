import { useRef } from "react";

function SearchBar() {
  const movieSearch = useRef();
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(movieSearch.current.value, "movieName");
        }}
      >
        <input ref={movieSearch} />
      </form>
    </>
  );
}
export default SearchBar;
