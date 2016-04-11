import React from 'react';
import Navbar from './Navbar.js';
import Footer from './Footer.js';

const App = (props) => (
  <div className="wrapper">
    <Navbar />
    {props.children}
    <Footer />
  </div>
);

export default App;