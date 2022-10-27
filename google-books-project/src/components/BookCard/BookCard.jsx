import React from 'react';
import style from './BookCard.module.scss'


const BookCard = () => {
    return (
        <section className={style.Card}>
            <h3>Book Title</h3>
            <h4>Book Author</h4>
            <h5>Book Description</h5>
            <img className={style.Image} src='https://m.media-amazon.com/images/I/51Z0nLAfLmL.jpg'></img>
        </section>
    );
};

export default BookCard;