import { useEffect } from "react";

export const getBooks = async (searchTerm, startIndex, maxResults) => {

    startIndex = 0;
    maxResults = 20;

    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&startIndex=${startIndex}&maxResults=${maxResults}`;

    console.log(url);

    const response = await fetch(url)
    const bookData = await response.json()
    
    return bookData.items;
    console.log(bookData.items);
};

export default getBooks;

