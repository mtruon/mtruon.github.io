import React, { Component } from "react";
import PropTypes from 'prop-types'
import { Switch, Route, withRouter } from "react-router-dom";
// import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from 'styled-components';

import Home from './Home.js';
import About from './About.js';

// To be removed
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

//   background-image: linear-gradient(to bottom, rgb(0,0,0,0),  rgb(240, 240, 240));
// -webkit-background-image: linear-gradient(to bottom, rgb(0,0,0,0),rgb(240, 240, 240));

class Page extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  }

  render () {
    const { location } = this.props;
    return (
      <PageWrapper>
        <Switch location={location}>
          <Route exact path={"/"} component={Home}/>
          <Route path={"/about"} component={About}/>
        </Switch>
      </PageWrapper>
    );
  }
}

export default withRouter(Page);
