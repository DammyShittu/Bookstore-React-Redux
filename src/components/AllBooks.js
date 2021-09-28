import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addBook, removeBook} from '../redux/Books/Books';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';
import BookInput from './BookInput';

const AllBooks = () => {
  const myBooks = useSelector((state) => state.booksReducer);

  const dispatch = useDispatch();

  const addNew = (title, author) => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    dispatch(addBook(newBook));
  }

  const deleteOneBook = (id) => dispatch(removeBook(id));
  

  if (myBooks.length) {
    return (
    <div>
      <Book books={myBooks} propsToRemoveBooks={deleteOneBook} />
      <BookInput propsToAddBooks={addNew} />
  </div>
  )
  }
  return (
    <div>
      <h3>No Books Yet😔</h3>
      <h3>Please type here 👇 to add your favorite books.</h3>
      <BookInput propsToAddBooks={addNew} />
    </div>
  )
}

export default AllBooks;
