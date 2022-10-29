import React from 'react';
import { useEffect, useState } from 'react';
import BookCard from '../../components/BookCard/BookCard';
import style from './BookGallery.module.scss'


const BookGallery = ({books}) => {

    return (
        <section className={style.gallery}>
            <div className={style.gallery__header}>
                <h2 className={style.gallery__header__title}>Search Results</h2>
            </div>
            <div className={style.gallery__main}>
                {books.map((book) => (
                    <BookCard key={book.id} book={book.volumeInfo}/>
                ))} 
            </div>
        </section>
    );
};

export default BookGallery;