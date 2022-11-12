import React, { Component } from 'react';
import style from './SearchBar.module.css';
import PropTypes from 'prop-types';

export class SearchBar extends Component {
    state = {
        query: '',
    }

    handleChange = ({ target: { value: query } }) => {
        this.setState({ query })
    }

    handleSubmitForm = (event) => {
        event.preventDefault()
        this.props.handleSubmit(this.state.query)
    }

    render() {
        return (
            <header className={style.Searchbar}>
                <form onSubmit={this.handleSubmitForm} className={style.SearchForm}>
                    <button type="submit" className={style.SearchFormButton}>
                        <span className={style.SearchFormButtonLabel}>Search</span>
                    </button>

                    <input
                        onInput={this.handleChange}
                        className={style.SearchFormInput}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header >
        )
    }
};

SearchBar.propTypes = {
    handleSubmit: PropTypes.func.isRequired
}