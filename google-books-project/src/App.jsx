import { createContext, useState } from 'react'
import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'
import BookGallery from './containers/BookGallery/BookGallery'
import getBooks from './services/books'
import style from './App.module.scss'
import BooksContext from './components/BooksContext/BooksContext'
import ModalContext from './components/ModalContext/ModalContext'
import BookModal from './components/BookModal/BookModal'

const App = () => {

  const [books, setBooks] = useState([]);
  const [book, setBook] = useState();
  // const booksState = useState();
  // console.log('booksState', booksState);

  // DESTRUCTURING:
    // const array = ['hello', 'there', 'world'];
    // const [word1, word2, word3] = array;

  return (
    <div className={style.App}>
      <BooksContext.Provider value={[books, setBooks]}>
        <ModalContext.Provider value={[book, setBook]}>
          <Header/>
          <BookGallery/>
          <BookModal />
        </ModalContext.Provider>
      </BooksContext.Provider>
    </div>
  )
}

export default App


// const BookSearch = () => {

//   const [books, setBooks] = useState([]);

//   const handleSearch = async () => {
//     setBooks(await getBooks())
//   };

//   return (
//     <div>
//       <SearchBar onSearch={handleSearch}/>
//       <BookGallery books={books} />
//     </div>
//   )
// }
