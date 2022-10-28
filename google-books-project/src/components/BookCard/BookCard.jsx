import React from 'react';
import style from './BookCard.module.scss'


const BookCard = ({book}) => {

    return (
        <section className={style.Card}>
            <h3>{book.title}</h3>

            {/* if book.authors is undefined then ignore join to prevent throwing error */}
            <h4>{book.authors?.join(', ')}</h4> 
            
            <h5>{book.description}</h5>

            <img 
            className={style.Image} 
            // if book.imageLinks is undefined then ignore thumbnail to prevent throwing error
            src={book.imageLinks?.thumbnail} 
            alt={book.title} />
        </section>
    );
};

export default BookCard;