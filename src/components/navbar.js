import React from 'react';
import '../navbar.css'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="Navigation">
      <NavLink className="NavLink"
        to="/"
      >
        Home
      </NavLink>

      <NavLink className="NavLink"
        to="/concerts"
      >
        Concerts
      </NavLink>

      <NavLink className="NavLink"
      to="/concerts/new">
        Add Concert
      </NavLink>

      <NavLink className="NavLink"
        to="/venues"
      >
        Venues
      </NavLink>

      <NavLink className="NavLink"
      to="/venues/new">
        Add Venue
      </NavLink>
    </div>
  );
}

export default NavBar;
