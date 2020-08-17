import React from 'react';
import ReactDOM from 'react-dom';


class WhatToOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishNames: props.dishNames,
      dishImages: props.dishImages,
    };
  }

  render() {
    return (
      <div>
        <h3>WHAT TO ORDER</h3>
          <figure class='dish'>
            <img src='' alt=''/>
            <figcaption>{this.state.dishNames[0]}</figcaption>
          </figure>
      </div>
    );
  }
}

export default WhatToOrder;