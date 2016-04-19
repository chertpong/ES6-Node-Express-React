import React from 'react';
import NavLink from './NavLink';
import AppBar from 'material-ui/lib/app-bar';

const Navbar = (props)=> {
  return (
    <AppBar title="Cake">
      <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
    </AppBar>
  );
};

export default Navbar;