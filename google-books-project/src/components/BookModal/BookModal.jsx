import { useContext } from "react";
import ModalContext from "../ModalContext/ModalContext";
import style from './BookModal.module.scss';

const BookModal = () => {

    const [book, setBook] = useContext(ModalContext);

    console.log(book);

    if (!book) {
        return null;
    }

    return (
        <div className={style.Modal}>
            <section className={style.Modal__Container}>
                <div className={style.Modal__Container__ImgContainer}>
                    <img className={style.Modal__Container__Image} src ={`${book.imageLinks?.thumbnail || 'src/assets/no-image.png' }`} />
                </div>
                <p><span className={style.Modal__Bold}>Title:</span> {book.title}</p>
                <p><span className={style.Modal__Bold}>Authors:</span> {book.authors?.join(', ') || "Anonymous"}</p>
                <p className={style.Modal__Container__Desc}><span className={style.Modal__Bold}>Book Description:</span> {book.description}</p>
                <p><span className={style.Modal__Bold}>Pages:</span> {book.pageCount}</p>
                <p><span className={style.Modal__Bold}>Publisher:</span> {book.publisher || "Unknown"}</p>
                <p><span className={style.Modal__Bold}>Published Date:</span> {book.publishedDate}</p>
                <div className={style.Modal__Container__BtnContainer}>
                    <button className={style.Modal__Container__BtnContainer__Close} onClick={() => setBook(undefined)}>Close</button>
                </div>
               
            </section>
        </div>
    );
};

export default BookModal;