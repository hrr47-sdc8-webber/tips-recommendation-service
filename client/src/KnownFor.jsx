import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

class KnownFor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {console.log(this.props.features.split(','))}
        {this.props.features.split(',').map((feature) => (
          <figure class='feature'>
            <img src='' alt=''/>
            <figcaption>{feature}</figcaption>
          </figure>
        ))}
      </div>
    );
  }
}

export default KnownFor;

