import React, { Component } from 'react';
import {connect} from 'react-redux';

import {Modal} from './Modal.sc';

import {toggleModalAction} from '../../Redux/actions/toggleModalAction';

import LevelUpModal from './LevelUpModal';
import LoginModal from './LoginModal';

class ModalComp extends Component {

  renderModal = () => {
      switch(this.props.modalType){
          case 'levelUp':
              return <LevelUpModal />
          case 'login':
              return <LoginModal />
          default:
              return <h1>Invalid Modal Type</h1>
      }
  }

  render () {
    console.log('rendering');
    return (
        <Modal isVisible={this.props.isVisible}>
            <Modal.Overlay />
            <Modal.Box>
                {this.renderModal()}
            </Modal.Box>
        </Modal>
    )
  }
}

export default connect(
    (state) => ({
        modalType: state.modalReducer.modalType,
        isVisible: state.modalReducer.isVisible
    }),
    {
        toggleModalAction
    }
)(ModalComp);