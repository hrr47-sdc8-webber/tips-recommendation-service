import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const KnownForContainer = styled.div`
  width: 100%;
  margin: 0px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const StyledFeature = styled.figure`
  display: flex;
  align-items: baseline;
`;

const KnownForIcon = styled.img`
  width: 96px;
  height: 72px;
`;

const KnownForFont = styled.figcaption`
  color: #101820;
  font-size: 15px;
  letter-spacing: .013em;
  text-align: center;
`;

const icons = ['/dist/icons/kids.svg', '/dist/icons/lunch.svg', '/dist/icons/placeholder.svg', '/dist/icons/takeout.svg'];

class KnownFor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <KnownForContainer>
        {this.props.features.split(',').map((feature, index) => (
          <figure className='feature' key={index}>
            <KnownForIcon src={icons[Math.floor(Math.random() * (4))]} alt='icon'/>
            <KnownForFont>{feature}</KnownForFont>
          </figure>
        ))}
      </KnownForContainer>
    );
  }
}

export default KnownFor;

