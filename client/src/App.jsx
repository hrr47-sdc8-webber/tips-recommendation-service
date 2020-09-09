import React from 'react';
import ReactDOM from 'react-dom';

import WhatToOrder from './WhatToOrder.jsx';
import InsiderTip from './InsiderTip.jsx';
import KnownFor from './KnownFor.jsx';
import ZagatMentions from './ZagatMentions.jsx';

import axios from 'axios';
import styled from 'styled-components';


const port = 6070;

const StyledContainer = styled.div`
  width: 70%;
  max-width: 900px;
  height: auto;
  padding: 0 24px 40px 24px;
  margin-top: 40px;
  font-family: Roboto, "Helvetica Neue", sans-serif;
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
      name: '',
      featuredDishes: [],
      tip: '',
      knownFor: [],
      articles: []
    };
  }

  componentDidMount() {
    const app = this;
    axios.get(`http://localhost:3003/api/${window.location.pathname.substring(1, window.location.pathname.length - 1)}`)
    .then(function (response) {
      const rInfo = response.data;
      app.setState({
        name: rInfo.name,
        featuredDishes: [[rInfo.name_one, rInfo.image_one], [rInfo.name_two, rInfo.image_two], [rInfo.name_three, rInfo.image_three]],
        tip: rInfo.featured_tip,
        knownFor: rInfo.features,
        articles: rInfo.articles
      });
    })
    .catch(function (error) {
      console.log(error);
    })
  }


  render() {
    return (
    <StyledContainer>
      <section id='what-to-order'>
        <StyledTitles>WHAT TO ORDER</StyledTitles>
        <WhatToOrder dishes={this.state.featuredDishes}/>
      </section>

      <section id='insider-tip'>
        <StyledTitles>INSIDER TIP</StyledTitles>
        <InsiderTip tip={this.state.tip}/>
      </section>

      <section id='known-for'>
        <StyledTitles>KNOWN FOR</StyledTitles>
        <KnownFor features={this.state.knownFor} />
      </section>

      <section id='articles'>
        <StyledTitles>ZAGAT MENTIONS OF {this.state.name}</StyledTitles>
       <ZagatMentions articles={this.state.articles} />
      </section>
    </StyledContainer>
    );
  }
}

export default App;