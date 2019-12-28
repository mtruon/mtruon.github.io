import React, { Component } from 'react';
import styled from 'styled-components';

const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 1;
`

const TextWrapper = styled.div`
  display: block;
  max-width: 500px;
  overflow: hidden;
  margin: 0px 20px 20px 20px;

  h2 {
    font-size: 48px;
    margin-bottom: 15px;
    float: left;
    width: 100%;
  }
  p {
    line-height: 1.5;
    font-weight: 300 !important;
  }
`;

class Intro extends Component {
  render() {
    return (
      <IntroWrapper style={{height: window.innerHeight}}>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <TextWrapper>
            <h2>Hi,</h2>
            <p>
              I'm a recent computer science graduate from the University of Guelph. 
              Currently, I am working on exciting projects to develop my understanding in backend architecture, system design, data pipelines, and more. <span role='img' aria-label='Me working'>👨🏾‍💻🌧</span>
            </p>
          </TextWrapper>
        </div>
      </IntroWrapper>
    );
  }
}
 
export default Intro;
