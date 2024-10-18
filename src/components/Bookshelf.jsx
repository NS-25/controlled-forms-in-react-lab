import { useState } from "react";

const initialBooks = [
  { title: "Fourth Wing", author: "Rebecca Yarros" },
  { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" }
];

const Bookshelf = () => {
  const [books, setBooks] = useState(initialBooks);
  // Define newBook below
  const [bookData, setBookData] = useState({
    title: " ",
    author: " "
  });

  /// create event handle part down here
  const handleInputChange = event => {
    setBookData({ ...bookData, [event.target.name]: event.target.value });
    console.log(bookData);
  };

  /// create handleSubmit
  const handleSubmit = event => {
    event.preventDefault();
    setBooks([...books, bookData]);

    setBookData({
      title: "",
      author: "P"
    });
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        {/* /////4.Form Creation part */}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              id="title"
              name="title"
              value={bookData.title}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="author">Author:</label>
            <input
              id="author"
              name="author"
              value={bookData.author}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="btn">
            Add Book
          </button>
        </form>
      </div>
      <div className="bookCardsDiv">
        <ul className="bookcard">
          {books.map((book, index) =>
            <li key={index}>
              <strong>{book.title}</strong> by {book.author}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Bookshelf;
