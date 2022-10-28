import SearchBar from "../SearchBar/SearchBar";
import BookGallery from "../../containers/BookGallery/BookGallery";
import { useState, useEffect } from "react";
import style from './BookSearch.module.scss';
import { getBooks } from '../../services/books';

const BookSearch = () => {

    const [books, setBooks] = useState([]);

    const handleSearch = async (searchTerms = 'default search terms') => {
        console.log('search terms', searchTerms);
        setBooks(await getBooks(searchTerms))
    };
    
    useEffect(() => {
       handleSearch()
    }, [])
    
    return (
        <div>
            <SearchBar onSearch={handleSearch}/>
            <BookGallery books={books} />
        </div>
    );
};

export default BookSearch;