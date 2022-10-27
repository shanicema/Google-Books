import React from 'react';
import { useEffect, useState } from 'react';
import BookCard from '../../components/BookCard/BookCard';
import style from './BookGallery.module.scss'


const BookGallery = ({books}) => {
    // useEffect(() => {
    //     getBooks().then((books) => setBooks(books));
    // }, []);

    return (
        <section>
            <div>
                <h2>Search Results</h2>
            </div>
            <div className={style.Gallery}>
                {/* {books.map((bookData) => ( */}
                    <BookCard />
                {/* ))} */}
            </div>
        </section>
    );
};

export default BookGallery;