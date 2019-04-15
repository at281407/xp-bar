import React, { Component } from 'react'
import styled from 'styled-components';
import {connect} from 'react-redux';

import {toggleModalAction} from '../../Redux/actions/toggleModalAction';

import {Modal} from './Modal.sc';
import Skull from './Skull.svg';

export const LevelUp = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: middle;
    width: 100%;
    height: 100%;
`;

class LevelUpModal extends Component {

  handleClick = () => {

  }

  render () {
    return (
        <LevelUp>
            <Skull />
            <Modal.Heading textAlign="center" margin="0.5em 0">Ye be level 5 now!</Modal.Heading>
            <Modal.Quote textAlign="Center"  margin="0.5em 0">In an honest service there is thing commons, low wages, and hard labor...No, a merry life and a short one, shall be my motto.</Modal.Quote>
            <Modal.Button onClick={this.props.toggleModalAction} width="60%">Continue</Modal.Button>
        </LevelUp>
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
)(LevelUpModal);