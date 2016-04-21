import React from 'react';
import NavLink from './NavLink';
import AppBar from 'material-ui/lib/app-bar';

const Navbar = (props)=> {
  return (
    <AppBar title="Cake">
     <ul className="navbar__list">
       <li className="navbar__list-item"><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
       <li className="navbar__list-item"><NavLink to="/products">Products</NavLink></li>
     </ul>
    </AppBar>
  );
};

export default Navbar;