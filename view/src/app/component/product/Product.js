import React, { PropTypes } from 'react';

import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';

import './productStyle.scss';

export default class Product extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      
    };
   
  }
  
  render(){
    return (
      <Card className="product-item__card">
        <CardMedia className="product-item__card-media">
          <img src={this.props.thumbnail}/>
        </CardMedia>
        <CardTitle title={this.props.name} className="product-item__card-title"/>
        <CardText className="product-item__card-description">
          {this.props.description}
        </CardText>
        <CardActions className="product-item__card-actions">
          <FlatButton label="Action1" />
          <FlatButton label="Action2" />
        </CardActions>
      </Card>
    );
  }
}
Product.propTypes = {
  productId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string,
  thumbnail: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  inStock: PropTypes.bool.isRequired
};
Product.defaultProps = {
  description : 'No description available',
  tags : [],
  thumbnail: 'http://placehold.it/350x150'
};

