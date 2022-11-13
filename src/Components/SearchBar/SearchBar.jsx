import React, { useState } from "react";
import style from "./SearchBar.module.css";
import PropTypes from "prop-types";

export function SearchBar({ handleSubmit }) {
  const [query, setQuery] = useState("");

  const handleChange = ({ target: { value: query } }) => {
    setQuery( query );
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    handleSubmit(query);
  };
  return (
    <header className={style.Searchbar}>
      <form onSubmit={handleSubmitForm} className={style.SearchForm}>
        <button type="submit" className={style.SearchFormButton}>
          <span className={style.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          onInput={handleChange}
          className={style.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

SearchBar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
