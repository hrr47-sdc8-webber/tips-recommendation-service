// TO DO:
  // IF NO ARTICLES FOR RESTAURANT EXIST, DO NOT INCLUDE ARTICLES SECTION OF PAGE

import React from 'react';
import ReactDOM from 'react-dom';
import WhatToOrder from './WhatToOrder.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishName1: '',
      dishImage1: '',
      dishName2: '',
      dishImage2: '',
      dishName3: '',
      dishImage3: '',
      tip: '',
      features: '',
      tags: '',
    };
  }

  componentDidMount() {
    let self = this;
    axios.get('/api/tips' + window.location.pathname.substring(0, window.location.pathname.length - 1))
    .then(function (response) {
      const data = response.data[0];
      console.log(data);
      self.setState({
        dishName1: data.dish_name1,
        dishImage1: data.dish_image1,
        dishName2: data.dish_name2,
        dishImage2: data.dish_image2,
        dishName3: data.dish_name3,
        dishImage3: data.dish_image3,
        tip: '',
        features: '',
        tags: '',
      });
    })
    .catch(function (error) {
      console.log(error);
    });
    }

  render() {
    return (
    <div>
      <section id='what-to-order'>
        {this.state.dishName1}
      </section>

      <section id='insider-tip'>
        <h3>INSIDER TIP</h3>
        <hr/>
        <p>RANDOM TEXT HERE</p>
        <hr/>
      </section>

      <section id='known-for'>
        <figure class='feature'>
          <img src='' alt=''/>
          <figcaption>FEATURE</figcaption>
        </figure>
        <figure class='feature'>
          <img src='' alt=''/>
          <figcaption>FEATURE</figcaption>
        </figure>
        <figure class='feature'>
          <img src='' alt=''/>
          <figcaption>FEATURE</figcaption>
        </figure>
      </section>

      <section id='articles'>
        <figure class='article'>
          <img src='' alt=''/>
          <figcaption>ARTICLE</figcaption>
        </figure>
        <figure class='article'>
          <img src='' alt=''/>
          <figcaption>ARTICLE</figcaption>
        </figure>
        <button type="button">SHOW ALL (amount of articles hidden)</button>
      </section>
    </div>
    );
  }
}

export default App;