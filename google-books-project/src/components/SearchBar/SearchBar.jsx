
import style from './SearchBar.module.scss'
import { useState, useEffect } from 'react';

const SearchBar = ( {onSearch }) => {

    const [search, setSearch] = useState('');

    const onInputChange = (event) => {
        console.log(event.target.value)
        setSearch(event.target.value);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        onSearch(search);
    }


    return (
        <div>
            <form className={style.Container} onSubmit={onFormSubmit}>
                <input type="text" placeholder="Enter search here" value={search} onChange={onInputChange} />

                <button type="submit">Search</button>
                
                {/* <p>Results: </p> */}
                {/* <p>Results: {JSON.stringify(book)}</p> */}
            </form>
        </div>
    );
};

export default SearchBar;


    // const initialState = {
    //     title: '',
    //     author: '',
    //     description: '',
    //     imageUrl: '',
    // }

    // const [formState, setFormState] = useState(initialState);
    
    // const onInputChange = (event) => {
    //     // const name = event.target.name
    //     // const value = event.target.value
    //     const {name, value} = event.target;
    //     // console.log(name);
    //     // console.log(value);
    //     setFormState({ ...formState, [name]: value })
    // }

// const [book, setBook] = useState('')
// const [trigger, setTrigger] = useState(false)



// useEffect(() => {
//     getBooks()
// }, [trigger])
