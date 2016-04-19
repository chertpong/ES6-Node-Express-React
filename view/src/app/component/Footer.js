import React from 'react';
import Colors from 'material-ui/lib/styles/colors';
const style = {
  backgroundColor: Colors.brown700
};
const Footer = (props)=> {
  return (
    <footer className="footer" style={style}>
      <p style={{color:Colors.white}}>Footer</p>
    </footer>
  );
};

export default Footer;