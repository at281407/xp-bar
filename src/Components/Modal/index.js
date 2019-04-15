import React, { Component } from 'react';
import {connect} from 'react-redux';

import {Modal} from './Modal.sc';
import LoginModal from './LoginModal';
import LevelUpModal from './LevelUpModal';

class ModalComp extends Component {

  renderModal = () => {
      switch(this.props.modalType){
          case 'login':
              return <LoginModal />
          case 'levelUp':
              return <LevelUpModal />
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
        // Map actions/middleware to props
    }
)(ModalComp);