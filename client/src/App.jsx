// TO DO:
  // IF NO ARTICLES FOR RESTAURANT EXIST, DO NOT INCLUDE ARTICLES SECTION OF PAGE

import React from 'react';
import ReactDOM from 'react-dom';
import WhatToOrder from './WhatToOrder.jsx';
import axios from 'axios';
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 845px;
  height: 884px;
  padding: 0 24px 40px;
  margin-top: 40px;
`;

const StyledTitles = styled.h3`
  padding-top: 33px;
  color: #656666;
  font-size: 16px;
  letter-spacing: .086em;
  text-transform: uppercase;
`;

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
    <StyledContainer>
      <section id='what-to-order'>
        <StyledTitles>WHAT TO ORDER</StyledTitles>
        <WhatToOrder dishName1 = {this.state.dishName1} dishImage1 = {this.state.dishImage1} dishName2 = {this.state.dishName2} dishImage2 = {this.state.dishImage2} dishName3 = {this.state.dishName3} dishImage3 = {this.state.dishImage3}/>
      </section>

      <section id='insider-tip'>
        <StyledTitles>INSIDER TIP</StyledTitles>
        <hr/>
        <p>RANDOM TEXT HERE</p>
        <hr/>
      </section>

      <section id='known-for'>
        <StyledTitles>KNOWN FOR</StyledTitles>
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
        <StyledTitles>ZAGAT MENTIONS OF RESTAURANT NAME</StyledTitles>
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
    </StyledContainer>
    );
  }
}

export default App;