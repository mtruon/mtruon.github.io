import React, { Component } from 'react';
import styled from 'styled-components';
import Intro from './Home/Intro.js';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  // background-color: #fcfcfc;
`

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <Intro/>
      </HomeWrapper>

    );
  }
}
 
export default Home;
