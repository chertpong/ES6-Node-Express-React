import React from 'react';
import Navbar from './Navbar.js';
import Footer from './Footer.js';

import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';
import MuiTheme from './Theme';

const App = (props) => (
  <div className="wrapper">
    <Navbar />
    <div className="bodyWrapper">
      {props.children}
    </div>
    <Footer />
  </div>

);

export default ThemeDecorator(MuiTheme)(App);