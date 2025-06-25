import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [isbnBook, setIsbnBook] = useState([]);
  const [error, setError] = useState("");

  const handleClick = async () => {
    try {
      const response = await axios.get("http://localhost:3000/books");
      setBooks(response.data.books);
      setError("");
    } catch (error) {
      console.error("Error fetching books:", error);
      setError("Failed to fetch books");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isbn = e.target[0].value;
    try {
      const response = await axios.get(`http://localhost:3000/books/${isbn}`);
      setIsbnBook([response.data.book]);
      setError("");
    } catch (error) {
      console.error("Error fetching book:", error);
      setIsbnBook([]);
      setError("Book not found");
    }
  };

  return (
    <div className="container">
      <h1>Book List</h1>
      <button onClick={handleClick}>Get All Books</button>
      <p> Test with this isbn: 0691161518</p>
      <form onSubmit={handleSubmit} className="search-form">
        
        <input type="text" placeholder="Enter ISBN" required />
        <button type="submit">Search by ISBN</button>
      </form>

      {error && <p className="error">{error}</p>}

      <div className="books-grid">
        {isbnBook.length > 0
          ? // Display searched book
            isbnBook.map((book) => (
              <div key={book.isbn} className="book-card">
                <h3>{book.title}</h3>
                <p>Author: {book.author}</p>
                <p>ISBN: {book.isbn}</p>
                <p>Year: {book.year}</p>
                <p>Language: {book.language}</p>
                <p>Pages: {book.pages}</p>
                <p>Publisher: {book.publisher}</p>
              </div>
            ))
          : // Display all books
            books.map((book) => (
              <div key={book.isbn} className="book-card">
                <h3>{book.title}</h3>
                <p>Author: {book.author}</p>
                <p>ISBN: {book.isbn}</p>
                <p>Year: {book.year}</p>
              </div>
            ))}
      </div>
    </div>
  );
}

export default App;
