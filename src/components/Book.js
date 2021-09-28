import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ books, propsToRemoveBooks }) => {
  return (
    <ul>
      {books.map((book) => {
       return <li key={book.id}>
          <span>{book.title} by {book.author}</span>
          <button type="button" onClick={() => propsToRemoveBooks(book.id)}>Remove</button>
        </li>
      })}
    </ul>
  )
}

Book.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  propsToRemoveBooks: PropTypes.func.isRequired
}

export default Book;
