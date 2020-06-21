import React, { Component } from 'react'
import {connect} from 'react-redux';

import {toggleModalAction} from '../../Redux/actions/toggleModalAction';

import {Header} from './Header.sc';
import {Button} from '../_Elements/Form/Button.sc';

import {SvgIcon} from '../_Elements/Icon.sc';
import {ReactComponent as Logo} from '../../Assets/images/dndxpbar_logox2.svg';

class HeaderComp extends Component {
  render () {
    return (
        <Header>
          <Logo />
          <nav>
            <a>XP LOGS</a>
          </nav>
          <Button margin="auto 0 0 0">Logout</Button>
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