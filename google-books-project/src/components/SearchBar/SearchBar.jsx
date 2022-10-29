
import style from './SearchBar.module.scss'
import { useState, useEffect } from 'react';

const SearchBar = ( {onSearch }) => {

    const [search, setSearch] = useState('');

    const onInputChange = (event) => {
        // console.log(event.target.value)
        setSearch(event.target.value);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        onSearch(search);
    }

    return (
        <div>
            <form 
            className={style.Container} 
            onSubmit={onFormSubmit}>
                <input type="text" id="searchInput" placeholder="Enter search here" value={search} onChange={onInputChange} />
                <button type="submit" id="searchButton" disabled={!search}>Search</button>
            </form>
        </div>
    );
};

export default SearchBar;