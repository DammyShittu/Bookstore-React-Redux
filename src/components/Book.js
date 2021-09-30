import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { deleteBook } from '../redux/Books/Books';

const Book = ({ books }) => {
  const dispatch = useDispatch();
  return (
    <ul>
      {books.map((book) => (
        <li key={uuidv4()}>
          <span>{book.title}</span>
          <br />
          <span>{book.category}</span>
          <br />
          <button type="button" onClick={() => dispatch(deleteBook(book.id))}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

Book.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};

export default Book;
