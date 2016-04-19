import React, { PropTypes } from 'react';
import Upload from './../upload/Upload';
import './style.scss';

export default class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {};
  }
  
  render(){
    return (
      <div className="home">
        <Upload />
      </div>
    );
  }
}
Home.propTypes = {

};
Home.defaultProps = {

};