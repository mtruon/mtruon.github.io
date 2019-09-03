import React, { Component } from 'react';
import styled from 'styled-components';
import ResponsiveMenu from './ResponsiveMenu.js';

var self;
var scrollPosition = 0;

const Menu = styled.div`
  z-index: 2;
  display: inline-block;
  float: right;
  padding: 0px 50px;
  ul {
    margin: 0px 0px;
    padding: 0px;
  }
  li {
    display: inline;
    list-style-type: none;
    padding: 0px 30px;
  }
  a {
    color: #818181;
    text-decoration: none;
    font-size: 18.33px;
    font-weight: 500;
    transistion-property: color;
    transition-duration: .35s;
    transition-timing-function: ease-in;
  }
  a:hover {
    color: var(--main-active-colour);
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Badge = styled.div`
  float: left;
  margin: 0px 50px;

  a {
    display: block;
    text-decoration: none;
    background-color #fafafa;
    border: 1px solid black;
    height: 50px;
    width: 50px;
    margin: 15px;
  }

  h2 {
    margin: 20px;
    font: 18.33px 'Roboto';
    transition-property: color;
    transition-duration: 0.35s;
    transition-timing-function: ease-in;
    color: #818181;
  }

  a:hover h2 {
    color: black;
  }
`;

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: 'rgba(255, 255, 255, 0)',
      boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)',
    };

    self = this;
    window.addEventListener('scroll', function(e) {
      scrollPosition = window.scrollY;
      window.requestAnimationFrame(function () {
        self.handleScroll(scrollPosition);
      });
    });
  }

  handleScroll (lastScroll) {
    var toOpacity = window.innerHeight/2;;
    var shadow;
    var color;

    if (lastScroll === 0) {
      // Initial
      shadow = '0px 0px 0px rgba(0, 0, 0, 0)';
    } else if (lastScroll < toOpacity) {
      // Transition
      var fraction = (lastScroll / toOpacity);
      color = 'rgba(255, 255, 255, '+ fraction +')';
      shadow = '0px ' + (fraction*5) + 'px ' +  (fraction*5) + 'px rgba(0, 0, 0, ' + (fraction*0.1) + ')';
    } else {
      // Complete
      shadow = '0px 5px 5px rgba(0, 0, 0, .1)';
      color = 'white';
    }

    self.setState({
      boxShadow: shadow,
      bgColor: color,
    });
  }

  render() {
    const { menu } = this.props;
    return (
      <div style={{
        zIndex: '2',
        display: 'inline-block',
        width: '100%',
        boxShadow: this.state.boxShadow,
        position: 'fixed',
        backgroundColor: this.state.bgColor,
        height: '80px',
        lineHeight: '80px',
        whiteSpace: 'nowrap',
      }}>
        <Badge>
          <a href={process.env.PUBLIC_URL + "/"}>
            <h2>mt</h2>
          </a>
        </Badge>
        <Menu>
          {menu}
        </Menu>
        <ResponsiveMenu menu={menu}/>
      </div>
    );
  }
}

export default Navbar;
