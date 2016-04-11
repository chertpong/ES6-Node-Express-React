import React from 'react';
import NavLink from './NavLink';

const Navbar = (props)=> {
  return (
    <navbar>
      <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
    </navbar>
  );
};

export default Navbar;