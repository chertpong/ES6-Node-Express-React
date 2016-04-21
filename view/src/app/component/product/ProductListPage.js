import React, { PropTypes } from 'react';
import Colors from 'material-ui/lib/styles/colors';
import Product from './Product';
import MockProducts from './../../store/productsMock';

import './productListPageStyle.scss';

export default class ProductListPage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.setState(
      {
        products: MockProducts
      }
    )
  };

  render(){
    let products = this.state.products.map(p =>
      (
        <Product key={p.id} productId={p.id} name={p.name} price={p.price} description={p.description}
                 thumbnail={p.thumbnail} tags={p.tags} inStock={p.inStock}
                 className="col-xs-12 col-sm-8 col-md-6 col-lg-4" />
      )
    );
    return (
      <div className="productListPage">
        <div className="container-fluid">
          <div className="row">
            <h2 style={{color:Colors.brown600}}>Proudcts</h2>
          </div>
          <div className="row">
            {products}
          </div>
        </div>
      </div>
    );
  }
}
ProductListPage.propTypes = {

};
ProductListPage.defaultProps = {

};