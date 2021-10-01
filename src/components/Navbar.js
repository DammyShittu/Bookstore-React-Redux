import React from 'react';
import { NavLink } from 'react-router-dom';

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
              <li
                key={link.id}
                className="link"
              >
                <NavLink
                  to={link.path}
                  activeClassName="current"
                  className="nav-link"
                  exact
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <span className="avatar">
          <i className="fas fa-user user" />
        </span>
      </nav>
    </header>
  );
};

export default Navbar;
