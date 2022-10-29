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
                <p>{`Title: ${book.title}`}</p>
                <p>{`Author(s): ${book.authors?.join(', ') || "Anonymous"}`}</p>
                <p className={style.Modal__Container__Desc}>{`Book Description: ${book.description}`}</p>
                <p>{`Pages: ${book.pageCount}`}</p>
                {/* <p>{`Subtitle: ${book.subtitle || "N/A"}`}</p> */}
                <p>{`Publisher: ${book.publisher || "Unknown"}`}</p>
                <p>{`Published Date: ${book.publishedDate}`}</p>
                <div className={style.Modal__Container__BtnContainer}>
                    <button className={style.Modal__Container__BtnContainer__Close} onClick={() => setBook(undefined)}>Close</button>
                </div>
               
            </section>
        </div>
    );
};

export default BookModal;