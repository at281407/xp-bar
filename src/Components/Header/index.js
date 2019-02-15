import React, { Component } from 'react'

import {Header} from './Header.sc';

import {Icon} from '../_Elements/Icon.sc';

class HeaderComp extends Component {
  render () {
    return (
        <Header>
            margin: ${props => props.margin || "0 auto"};
    display: ${props => props.display || "block"};
        </Header>
    )
  }
}

export default HeaderComp