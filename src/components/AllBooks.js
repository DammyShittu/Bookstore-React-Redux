import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../redux/Books/Books';
import Book from './Book';
import BookInput from './BookInput';

const AllBooks = () => {
  const myBooks = useSelector((state) => state.booksReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  if (myBooks.length) {
    return (
      <div>
        <Book books={myBooks} />
        <BookInput />
      </div>
    );
  }
  return (
    <div>
      <h3>No Books Yet...😔</h3>
      <h3>Please type here 👇 to add your favorite books.</h3>
      <BookInput />
    </div>
  );
};

export default AllBooks;
