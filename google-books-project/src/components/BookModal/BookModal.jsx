import { useContext } from "react";
import ModalContext from "../ModalContext/ModalContext";

const BookModal = () => {

    const [book, setBook] = useContext(ModalContext);

    console.log(book);

    if (!book) {
        return null;
    }

    return (
        <section style={{ position: 'fixed', top: '50%', backgroundColor: 'black'}}>
            <p>{book.title}</p>
            <button onClick={() => setBook(undefined)}>close</button>
        </section>
    );
};

export default BookModal;