import React, { Component } from 'react'
import {connect} from 'react-redux';
import {routes} from "../../Routes";
import { Link, withRouter } from 'react-router-dom';

import {toggleModalAction} from '../../Redux/actions/toggleModalAction';
import {setCurrentUserAction} from '../../Redux/actions/Authentication/setCurrentUserAction';

import {Header} from './Header.sc';
import {Button} from '../_Elements/Form/Button.sc';

import {ReactComponent as Logo} from '../../Assets/images/dndxpbar_logox2.svg';

class HeaderComp extends Component {
  handleLogout = () => {
    this.props.setCurrentUserAction({});
    window.localStorage.removeItem("token");
    this.props.history.push(routes.signIn);
  }

  render () {
    return (
        <Header>
          <Logo />
          <nav>
            <Link to={routes.dashboard}>XP LOGS</Link>
          </nav>
          <Button margin="auto 0 0 0" onClick={this.handleLogout}>Logout</Button>
        </Header>
    )
  }
}

export default withRouter(connect(
  (state) => ({
    // Map state to props
  }),
  {
    toggleModalAction,
    setCurrentUserAction
  }
)(HeaderComp));