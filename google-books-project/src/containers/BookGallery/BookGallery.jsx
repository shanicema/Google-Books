import React from 'react';
import { useContext } from 'react';
import { useEffect, useState } from 'react';
import BookCard from '../../components/BookCard/BookCard';
import BooksContext from '../../components/BooksContext/BooksContext';
import style from './BookGallery.module.scss'
import { getBooks } from '../../services/books';

const BookGallery = () => {
    const [books] = useContext(BooksContext);

    return (
        <section className={style.gallery}>
            <div className={style.gallery__header}>
                <h2 className={style.gallery__header__title}>Your search results will be displayed here:</h2>
            </div>
            <div className={style.gallery__main}>
                {books?.map((book) => (
                    <BookCard key={book.id} book={book.volumeInfo}/>
                )) || (<>No books were found</>)} 
            </div>
        </section>
    );
};

export default BookGallery;