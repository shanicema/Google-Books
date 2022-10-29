import React from 'react';
import ModalContext from '../ModalContext/ModalContext';
import style from './BookCard.module.scss'
import { useContext } from 'react';


const BookCard = ({book}) => {

    const [, setBook] = useContext(ModalContext);

    // How does the Modal work?
    // - Needs to show and hide,
    // - Needs to render a book
    // Ideas:
    // - Showing and hiding is a kind of boolean state (true/false)
    // - Lets make a boolean show so that the modal knows when to show. 
    // - Hmmm, that looks like extra properties / logic / work / effort, having a book, show and setBook, 
    // - How can we make it simple?
    // - Do we need to use boolean, or can we use truthy / falsy, or can we reuse something we already have? 
    // - Ok, lets deduct how we can use what we have?
    // - Truthy falsy book useState can kind of represent show and hide 
    // - OK lets use book useState to show hide the modal, saving us 1 variable, 

    // what we know:
    // Modal:
    // - has [book, setBook] context accessible everywhere
    // - modal will show when book is truthy
    // - modal will hide when book is falsy
    // - modal will render the value of book

    // Card where we are
    // - Something to click on
    // - When we click on it, it calls a onClick function
    // - This on click function, shows the modal, by doing:

    const handleClick = () => {
        setBook(book);
    }

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

            <button onClick={handleClick}>See more</button>

        </section>
    );
};

export default BookCard;