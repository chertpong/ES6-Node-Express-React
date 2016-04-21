import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import FontIcon from 'material-ui/lib/font-icon';
import Colors from 'material-ui/lib/styles/colors';
import './style.scss';

export default class Upload extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      file: '',
      fileName: '',
      tempImage: ''
    };
    this._handleImageSubmit = this._handleImageSubmit.bind(this);
    this._handleImageChange = this._handleImageChange.bind(this);
  }

  _handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onload = () => {
      this.setState({
        file: file,
        fileName: file.name,
        tempImage: reader.result
      });
    };
    reader.readAsDataURL(file);
  };

  _handleImageSubmit(e){
    e.preventDefault();
    console.log('submit');

  };
  _handleUploadZoneClick(e){
    document.getElementsByClassName("uploadForm__input")[0].click();
  };
  render(){
    let imagePreview = null;
    if (this.state.tempImage) {
      imagePreview = (
        <figure className="uploadForm__previewImg">
          <img className="img uploadForm__previewImg-img" src={this.state.tempImage}/>
          <figcaption className="uploadForm__previewImg-caption">File name: {this.state.fileName}</figcaption>
        </figure>
      );
    }
    // TODO : line 57, it doesn't support method and binding in constructor as usual. Only god knows why
    // Hour(s) spent to fix it : 1 hour(s)
    return (
        <form className="uploadForm" onSubmit={this._handleImageSubmit}>
          <input type="file" name="upload" className="uploadForm__input" onChange={this._handleImageChange} />
          <div className="uploadForm__uploadZone uploadZone" onClick={(e)=>this._handleUploadZoneClick(e)}>
            <FontIcon className="material-icons uploadZone__fontIcon"
                      color={Colors.brown500}
                      hoverColor={Colors.pinkA200}
            >
              file_upload
            </FontIcon>
            <p className="uploadZone__p" style={{color: Colors.brown500}}>Upload</p>
          </div>
          <div className="uploadForm__confirm-button">
            <RaisedButton type="submit" className="btn" onClick={this._handleImageSubmit} label="Confirm" primary={true} />
          </div>
          {imagePreview}
        </form>
    );
  }
}
Upload.propTypes = {
  
};
Upload.defaultProps = {

};

