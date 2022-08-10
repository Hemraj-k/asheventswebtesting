import React, { useState } from 'react';
import menuItems from './MenuItems';
import '../../Styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">ASH EVENTS</h1>
      <div className="menu-icon" onClick={handleClick}>
        <i className={active ? 'fa fa-times' : 'fa fa-bars'}></i>
      </div>
      <ul className={active ? 'nav-menu active' : 'nav-menu'}>
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url} className={item.cName}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
