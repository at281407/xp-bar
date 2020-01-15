import React, { Component } from 'react'
import {connect} from 'react-redux';

import {toggleModalAction} from '../../Redux/actions/toggleModalAction';

import {Header} from './Header.sc';
import LockIcon from "../../Assets/images/lock-line.svg";

class HeaderComp extends Component {
  render () {
    return (
        <Header>
          <img onClick={() => this.props.toggleModalAction('menu', true)} src={LockIcon} />
        </Header>
    )
  }
}

export default connect(
  (state) => ({
    // Map state to props
  }),
  {
    toggleModalAction
  }
)(HeaderComp);