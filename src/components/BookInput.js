import { React, useState } from 'react';
import PropTypes from 'prop-types';

const BookInput = (props) => {
  const [input, setInput] = useState({
    title: '',
    author: '',
  });

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.title.trim() && input.author.trim()) {
      props.propsToAddBooks(input.title, input.author);
      setInput({
        title: '',
        author: '',
      });
    }
  };

  return (
    <section>
      <h2>Add New Book</h2>

      <form className="form" onSubmit={handleSubmit}>
      <input
          type="text"
          placeholder="Book Title"
          value={input.title}
          name="title"
          onChange={onChange}
          required
        />
      <input
          type="text"
          placeholder="Book Author"
          value={input.author}
          name="author"
          onChange={onChange}
          required
        />
        <button type="submit" className="submit-btn">Add Book</button>
      </form>
    </section>
  );
};

BookInput.propTypes = {
  propsToAddBooks: PropTypes.func.isRequired,
};

export default BookInput;
