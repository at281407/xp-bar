import React, { Component } from 'react'
import styled from 'styled-components';
import {connect} from 'react-redux';

import FanFare from '../../Assets/Sounds/LevelUp.wav';

import {toggleModalAction} from '../../Redux/actions/toggleModalAction';

import {Modal} from './Modal.sc';
import {ReactComponent as Book} from '../../Assets/images/book.svg';

export const LevelUp = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    max-width: 300px;
    height: 100%;
    padding: 10px;
`;

class LevelUpModal extends Component {

  state = {
    newXpInput: 0,
    fanFare: new Audio(FanFare)
  }

  componentDidMount () {
    this.state.fanFare.play();
  }

  render () {
    return (
        <LevelUp>
            <Book />
            <Modal.H1 textAlign="center" margin="0.25em 0">You have achieved level {this.props.currLevel.level}</Modal.H1>
            <Modal.Quote textAlign="Center"  margin="0.25em 0">{this.props.currLevel.levelUpMessage}</Modal.Quote>
            <Modal.Button onClick={this.props.toggleModalAction} width="60%" margin="15px auto 30px auto">Continue</Modal.Button>
        </LevelUp>
    )
  }
}

export default connect(
  (state) => ({
    currLevel: state.xpBarReducer.currLevel
  }),
  {
    toggleModalAction
  }
)(LevelUpModal);