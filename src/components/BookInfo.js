import React from 'react';
import Proptypes from 'prop-types';

const BookInfo = ({ category, title }) => (
  <section className="book-info">
    <p className="category">{category}</p>
    <h3 className="title">{title}</h3>
    <p className="author">Anonymous</p>
  </section>
);

BookInfo.propTypes = {
  category: Proptypes.string,
  title: Proptypes.string,
};

BookInfo.defaultProps = {
  category: '',
  title: '',
};

export default BookInfo;
