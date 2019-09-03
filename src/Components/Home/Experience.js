import React, { Component } from 'react';
import styled from 'styled-components';
import Card from './Experience/Card.js';

/* REMOVED:
This section wasn't a suitable area to display projects and technical experiences.
It lacked maintainability and use. */

const ExperienceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  padding-bottom: 20px;

  h2 {
    font-size: 29.67px;
    margin: 0 20px;
  }
  p {
    margin: 10px 20px;
  }
`;

const AboutCard = styled.div`
  display: block;
  margin: 20px;
  padding: 20px;
  max-width: 400px;
  height: fit-content;
  h3 {
    font-size: 1.5em;
    margin-top: 10px;
    margin-bottom: 15px;
  }
  p {
    margin: 0px;
    line-height: 1.5;
  }
`;

const ProjectWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;

  .white-space {
    flex-grow: 2;
    max-width: 50px;
  }
`

class Experience extends Component {
  render() {
    return (
      //TO-DO: Change the padding and bg color to be appropriate
      <ExperienceWrapper>
        <div style={{display: 'flex', justifyContent: 'center', marginBottom: '10px'}}>
          <h2>Projects</h2>
        </div>

        <ProjectWrapper>
          <AboutCard>
            <h3><img src='assets/post-me/post-me.png' alt='post-me icon' style={{height: '40px', marginRight: '5px'}} align="center"/>'Post Me' Android Application</h3>
            <p>'Post Me' is an Android social media application which allows users to capture moments in time, or experiences, and share them with other users occupying the same space.</p>
          </AboutCard>
          <span className="white-space"></span>
          <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
            <Card
              image={'assets/post-me/pm-login.png'}
              bgColor='#D6A1F2'/>
            <Card
              image={'assets/post-me/pm-map.png'}
              bgColor='#D6A1F2'/>
          </div>
        </ProjectWrapper>

      </ExperienceWrapper>
    );
  }
}
 
export default Experience;
