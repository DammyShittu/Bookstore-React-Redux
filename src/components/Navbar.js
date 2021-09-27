import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];

  return (
    <header>
      <nav>
        <div className="navbar">
          <h1>Bookstore CMS</h1>
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.path}
                  className="nav-link"
                  exact
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;