function SearchBar({ onFilter }) {
  function onSubmit(e) {
    e.preventDefault();
    onFilter(e.target.search.value);
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <input name="search" />
      </form>
    </>
  );
}
export default SearchBar;
