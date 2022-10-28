import { useState } from 'react'
import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'
import BookGallery from './containers/BookGallery/BookGallery'
import getBooks from './services/books'
import BookSearch from './components/BookSearch/BookSearch'
import style from './App.module.scss';

const App = () => {

  return (
    <div>
        <div>
          <Header />
          <BookSearch />
        </div>
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
