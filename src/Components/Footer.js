import React, { Component } from 'react';
import Icon from './Icon.js';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  position: relative !important;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 33px 0px;
  border-top: 2px solid #EDEDED;
  background-color: rgb(0, 0, 0, 0);

  p {
    font-size: 12px;
    color: #aaa;
    margin: 0px;
  }
`;

class Footer extends Component {

  render() {
    const iconSize = '2x';
    return (
      <FooterWrapper>
          <div style={{paddingBottom: '10px'}}>
            <Icon link={'https://www.linkedin.com/in/mtruon/'} icon={['fab', 'linkedin']} size={iconSize}/>
            <Icon link={'https://github.com/mtruon'} icon={['fab', 'github']} size={iconSize}/>
            <Icon link={'mailto:mtruon02@uoguelph.ca'} icon={'envelope'} size={iconSize}/>
          </div>
          <p>© 2018 Michael Truong</p>
      </FooterWrapper>
    );
  }
}

export default Footer;
