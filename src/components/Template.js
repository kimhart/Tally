import React from 'react';
import Relay from 'react-relay';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, IndexLink, Link, browserHistory, applyRouterMiddleware } from 'react-router';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import useRelay from 'react-router-relay';
import LoginPage from './LoginLogoutPage';
import Footer from './Footer';
import Logout from './Logout';
import LoginLogoutPage from './LoginLogoutPage';
import { UserUtils } from '../utils/Utils';

class Template extends React.Component {

  constructor(props) {
    super(props);
    this.state = { user: UserUtils.getUser() || null };
  }

  setUser = () => {
    this.setState({ user: UserUtils.getUser() });
  }

  render() {
    const { user } = this.state;
    if (!user) {
      return <LoginLogoutPage {...this.props} setUser={this.setUser} />
    }
    return (
      <Grid fluid={true} className="page-wrap">
        <div className="page-content">
          { this.props.children }
        </div>
      </Grid>
    );
  }
}

export default Relay.createContainer(Template, {
  initialVariables: {},
  fragments: {
    data: () => Relay.QL`
      fragment on Data {
        id
      }
    `
  }
});
