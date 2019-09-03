import React, { Component } from 'react';
import styled from 'styled-components';

const ResponsiveMenuWrapper = styled.div`
  z-index: -1;
  display: none;
  position: fixed;
  width: 100%;
  line-height: 80px;
  background-color: white;

  button {
    display: flex;
    height: 80px;
    align-items: center;
    justify-content: center;
    width: 50px;
    float: right;
    padding: 0px 15px;
    margin: 0px 50px;
    -webkit-appearance: none;
    border: none;
    background: none;
  }

  button:focus {
    outline:0;
  }

  ul {
    position: relative;
    margin: 80px 0px 0px 0px;
    padding: 0px;
    display: ${props => props.showMenu};
  }
  li {
    display: block;
    list-style-type: none;
    border-bottom: 1px solid #cccccc;
    background-color: white;
  }
  a {
    display: block;
    text-align: center;
    color: #818181;
    text-decoration: none;
    font-size: 18.33px;
    font-weight: 500;
  }

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

class ResponsiveMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};

    this.handleClick = this.handleClick.bind(this);
  }

    handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn,
      }));
    }

  render() {
    const display = this.state.isToggleOn ? "block" : "none";
    const icon = this.state.isToggleOn ? "close" : "menu";

    return (
      <ResponsiveMenuWrapper showMenu={display}>
        <button onClick={this.handleClick}>
          <i className='material-icons'>{icon}</i>
        </button>
        {this.props.menu}
      </ResponsiveMenuWrapper>
    );
  }
}

export default ResponsiveMenu;
