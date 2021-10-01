import React from 'react';
import PropTypes from 'prop-types';
import BookInfo from './BookInfo';
import BookActions from './BookActions';
import BookProgress from './BookProgress';
import BooksChapter from './BooksChapter';

const Book = ({
  id,
  category,
  title,
}) => (
  <section className="all-books">
    <div className="description">
      <BookInfo category={category} title={title} />
      <BookActions id={id} />
    </div>
    <div className="progress-chapter">
      <div>
        <BookProgress />
      </div>
      <span className="vertical-line" />
      <div>
        <BooksChapter />
      </div>
    </div>
  </section>
);

Book.propTypes = {
  id: PropTypes.string,
  category: PropTypes.string,
  title: PropTypes.string,
};

Book.defaultProps = {
  id: '',
  category: '',
  title: '',
};

export default Book;
