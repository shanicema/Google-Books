import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'
import BookGallery from './containers/BookGallery/BookGallery'
import getBooks from './services/books'


const App = () => {

  return (
    <div>
      <Header />
      <BookSearch />
    </div>
  )
}

export default App


const BookSearch = () => {

  const [receiveBooks, setReceiveBooks] = useState([]);

  const handleSearch = async () => {
    setReceiveBooks(await getBooks())
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch}/>
      <BookGallery books={receiveBooks} />
    </div>
  )
}
