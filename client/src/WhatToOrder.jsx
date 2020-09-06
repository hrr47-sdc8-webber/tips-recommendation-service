import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const WhatToOrderContainer = styled.div`
  width: 100%;
  margin: 0px;
  display: flex;
  justify-content: space-between;
`;

const StyledDishContainer = styled.div`
  margin: 17px 0px 0px 0px;
`;

const StyledImage = styled.img`
  width: 260px;
  height: 176px;
`;

const StyledCaption = styled.figcaption`
  color: white;
  margin: -70px 16px 0px 16px;
  max-height: 72px;
  font-size: 24px;
  overflow: hidden;
  letter-spacing: .004em;
`;

class WhatToOrder extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <WhatToOrderContainer>
        {this.props.dishes.map((dish, index) => {
          return(
            <StyledDishContainer className='dish' key={index}>
              <StyledImage src={dish[1]} alt="food"/>
              <StyledCaption>{dish[0]}</StyledCaption>
            </StyledDishContainer>
          )
        })}
      </WhatToOrderContainer>
    );
  }
}

export default WhatToOrder;