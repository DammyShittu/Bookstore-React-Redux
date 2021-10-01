import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/Books/Books';

const BookActions = ({ id }) => {
  const dispatch = useDispatch();

  return (
    <div className="action">
      <button type="button">Comments</button>
      <button type="button" onClick={() => dispatch(deleteBook(id))}>Remove</button>
      <button type="button">Edit</button>
    </div>
  );
};

BookActions.propTypes = {
  id: PropTypes.string,
};

BookActions.defaultProps = {
  id: '',
};

export default BookActions;
