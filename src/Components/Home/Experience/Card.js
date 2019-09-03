import React, { Component } from 'react';
import styled from 'styled-components';

// var self;

const CardWrapper = styled.div`
  display: inline-block;
  margin: 12px;
  background: blue;
  max-height: 350px;
  // min-width: 350px;
  // max-width: 500px;
  overflow: hidden;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, .1);
  transition: transform 300ms ease, box-shadow 300ms ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 30px 40px rgba(0, 0, 0, 0.35);
  }
`;

const Description = styled.div`
  background-color: #f2f3f4;
  padding: 20px;

  h3 {
    font-size: 16px;
    font-weight: 700;
  }
  p {
    font-size: 16px;
  }

`;

class Card extends Component {
  // TO-DO
  // constructor(props) {
  //   super(props);
  // }

  renderDesc(descBody) {
    return (
      <Description>
        <p style={{fontWeight: '1000', fontSize: '20px'}}>Evertz Microsystems</p>
        <p>Software Engineer</p>
      </Description>
    );
  }

  renderMedia(logo, image) {
    return (
      <div style={{margin: 'auto', verticalAlign: 'middle'}}>
        <img alt={image} src={image} style={{height: '400px', zIndex: '2'}}></img>
      </div>
    );
  }

  render() {
    const { height, width, gridRow, gridColumn , descOn, descBody, logo, image, bgColor, alt } = this.props;
    let desc;
    const media = this.renderMedia(logo, image, alt);
    if (descOn) {
      desc = this.renderDesc(descBody);
    } else {
      desc = null;
    }
    return (
      <CardWrapper
      style={{
        height: height,
        width: width,
        gridRow: gridRow, gridColumn: gridColumn,
        backgroundColor: bgColor,
      }}>
        {media}
        {desc}
      </CardWrapper>
    );
  }
}

export default Card;
