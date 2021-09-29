import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ books, propsToRemoveBooks }) => (
  <ul>
    {books.map((book) => (
      <li key={book.id}>
        <span>{book.title}</span>
        <br />
        <span>by</span>
        <br />
        <span>{book.author}</span>
        <br />
        <button type="button" onClick={() => propsToRemoveBooks(book.id)}>Remove</button>
      </li>
    ))}
    ;
  </ul>
);

Book.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  propsToRemoveBooks: PropTypes.func.isRequired,
};

export default Book;
