import { useState } from "react";

const initialBooks = [
  { title: 'Fourth Wing', author: 'Rebecca Yarros' },
  { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
];

const Bookshelf = () => {
   const [books,setBooks] = useState(initialBooks)
   // Define newBook 
   const [bookData, setBookData] = useState({
    title: " ",
    author: " "
   })

   /// create event handle part down here

  return(
    <>
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
      </div>
      <div className="bookCardsDiv">

      </div>
    </div>
    </>
  );
}
