import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };
  const submitForm = (e) => {
    e.preventDefault();
  }

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  return (
    <section className="section searcg">
      <form className="search-form" onSubmit={submitForm}>
        <div className="form-control">
          <label htmlFor="name">search your favourite cocktail</label>
          <input
            type="text"
            ref={searchValue}
            id="name"
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
