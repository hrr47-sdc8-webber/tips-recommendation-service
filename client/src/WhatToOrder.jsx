import React from 'react';
import ReactDOM from 'react-dom';


class WhatToOrder extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>WHAT TO ORDER</h3>
          <figure class='dish'>
            <img src={this.props.dishImage1} alt='food'/>
            <figcaption>{this.props.dishName1}</figcaption>
          </figure>
          <figure class='dish'>
            <img src={this.props.dishImage2} alt='food'/>
            <figcaption>{this.props.dishName2}</figcaption>
          </figure>
          <figure class='dish'>
            <img src={this.props.dishImage3} alt='food'/>
            <figcaption>{this.props.dishName3}</figcaption>
          </figure>
      </div>
    );
  }
}

export default WhatToOrder;