import React from 'react';
import style from './BookCard.module.scss'


const BookCard = ({book}) => {

    return (
        <section className={style.Card}>
            <h2 className={style.Card__Title}>{book.title}</h2>

            {/* if book.authors is undefined then ignore join to prevent throwing error and render string */}
            <h4 className={style.Card__Author}>{`By ${book.authors?.join(', ') || "Anonymous"}`}</h4> 
            
            <div className={style.Card__Container}>
                <img 
                className={style.Card__Image} 
                // if book.imageLinks is undefined then ignore thumbnail to prevent throwing error and render string 
                src={`${book.imageLinks?.thumbnail || 'src/assets/no-image.png' }`} 
                alt={book.title} />
            </div>

            <h5 className={style.Card__Desc}>{book.description}</h5>

        </section>
    );
};

export default BookCard;