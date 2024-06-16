import React, { useState } from "react";
import axios from "axios";

const PostBook = () => {
    const [bookName, setBookName] = useState("");
    const [libraryId, setLibraryId] = useState("");
    const [message, setMessage] = useState("");
    const [books, setBooks] = useState([]);

    const postBook = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:8080/api/v1/books/`, {
                name: bookName,
                library: {
                    id: libraryId
                }
            });
            setMessage("Book created successfully");
            fetchBooks(); // Fetch the updated list of books
        } catch (error) {
            setMessage("Error creating book");
            console.error(error);
        }
    };

    const fetchBooks = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/books/`);
            setBooks(response.data.content);
        } catch (error) {
            console.error("Error fetching books", error);
        }
    };

    return (
        <div>
            <h1>Create a book</h1>
            <form onSubmit={postBook}>
                <label>
                    Book Name:
                    <input 
                        type="text" 
                        value={bookName} 
                        onChange={(e) => setBookName(e.target.value)} 
                        required 
                    />
                </label>
                <label>
                    Library Id:
                    <input 
                        type="text" 
                        value={libraryId} 
                        onChange={(e) => setLibraryId(e.target.value)} 
                        required 
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
            {message && <p>{message}</p>}
            <h2>Books List</h2>
            {books.length > 0 ? (
                <ul>
                    {books.map(book => (
                        <li key={book.id}>
                            {book.name} (ID: {book.id})
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No books available.</p>
            )}
        </div>
    );
};

export default PostBook;
