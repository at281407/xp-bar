import React, { Component } from 'react'
import {connect} from 'react-redux';

import {toggleModalAction} from '../../Redux/actions/toggleModalAction';

import {Header} from './Header.sc';

import {SvgIcon} from '../_Elements/Icon.sc';

class HeaderComp extends Component {
  render () {
    return (
        <Header>
            <SvgIcon src="/images/lock-line.svg" margin="0.5em 0 0.5em auto" onClick={() => this.props.toggleModalAction('login', true)}></SvgIcon>
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