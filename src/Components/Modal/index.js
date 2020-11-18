import React, { Component } from 'react';
import {connect} from 'react-redux';

import {Modal} from './Modal.sc';

import {toggleModalAction} from '../../Redux/actions/toggleModalAction';

import LevelUpModal from './LevelUpModal';
import ConfirmationModal from './ConfirmationModal';
import LoginModal from './LoginModal';
import CreateLogModal from './CreateLogModal';

class ModalComp extends Component {

  renderModal = () => {
      switch(this.props.modalType){
          case 'levelUp':
              return <LevelUpModal />
          case 'login':
              return <LoginModal />
          case 'createLog':
              return <CreateLogModal />
          case 'confirmation':
              return <ConfirmationModal />
          default:
              return <h1>Invalid Modal Type</h1>
      }
  }

  render () {
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