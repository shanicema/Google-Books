
const printTypes = []


const getBooks = async () => {
    
    const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=search+terms')
    const json = await response.json()
    console.log(json);

    return json.items;
};

export default getBooks;

