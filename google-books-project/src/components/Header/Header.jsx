import React, { useContext } from 'react';
import style from './Header.module.scss';
import SearchBar from '../SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { getBooks } from '../../services/books';
import BooksContext from '../BooksContext/BooksContext';

const Header = () => {

    const [, setBooks] = useContext(BooksContext);

    const handleSearch = async (searchTerms = 'the') => {
        // console.log('search terms', searchTerms);
        setBooks(await getBooks(searchTerms))
    };

    useEffect(() => {
        handleSearch()
     }, [])

    return (
        <div className={style.Header}>
            <h1 className={style.Header__Title}>Google Book Search</h1>
            <SearchBar onSearch={handleSearch}/>
        </div>
    );
};

export default Header;