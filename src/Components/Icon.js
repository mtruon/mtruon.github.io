import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from "styled-components";

const IconWrapper = styled.div`
    display: inline-block;
    margin: 0px 10px;

  a {
    color: #aaa;
    transition-property: color;
    transition-duration: 0.35s;
    transition-timing-function: ease-in;
  }

  a:hover {
    color: black;
  }
`;

class Icon extends Component {
  render () {
    return(
      <IconWrapper>
        <a href={this.props.link}>
          <FontAwesomeIcon icon={this.props.icon} size={this.props.size}/>
        </a>
      </IconWrapper>
    );
  }
}

export default Icon;
