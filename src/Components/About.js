import React, { Component } from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 20px 0px;
  margin-top: 80px;
  overflow: hidden;
  overflow-x: hidden;
  width: 100%;


  h2 {
    font-size: 29.67px;
    margin: 0 20px;
  }
  p {
    margin: 10px 20px;
  }
`;

const AboutCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  height: 500px;
  max-width: 315px;

  p {
    margin-top: 20px;
    line-height: 1.5;
  }
`;

const PhotoWrapper = styled.div`
  display: flex;
  position: relative;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, .25);
  margin: 20px 75px 20px 20px;
  max-width: 370px;
  img {
    height: 100%;
    max-height: 500px;
  }
`;

class About extends Component {
  render() {
    return (
      <AboutWrapper>
        <AboutCard>
          <h2>Hello! </h2>
          <h2>I'm Michael <span role='img' aria-label='Me working'>👨🏾‍💻</span></h2>
          <p>For as long as I can remember, I loved developing experiences. Whether it was a curated playlist, film, or essay, I was meticulous during the creative process because I believed in a holistic approach.</p>
          <p>Experiences come in many shapes and sizes. I joined this industry to develop innovative and elegant solutions which focus on the <b>user’s experience</b>.</p>
          <p>Currently, I'm interested in iOS, React, and mobile development.</p>
        </AboutCard>
        <PhotoWrapper>
          <img alt='me' src='assets/arrow.png'
          style={{
            position: 'absolute',
            height: '250px',
            right: '-55px',
            top: '40px',
            transform: 'rotate(8deg)',
            overflowX: 'visible',}}></img>
          <img alt='Chris, Michael, and Alan' src='assets/profile.JPG'></img>
        </PhotoWrapper>
      </AboutWrapper>
    );
  }
}
 
export default About;
