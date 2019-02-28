import React, { Component } from 'react';
import {connect} from 'react-redux';

import {Modal} from './Modal.sc';

class ModalComp extends Component {
  render () {
    console.log('rendering');
    return (
        <Modal isVisible={this.props.isVisible}>
            <Modal.Overlay />
            <Modal.Box>

            </Modal.Box>
        </Modal>
    )
  }
}

export default connect(
    (state) => ({
        isVisible: state.modalReducer.isVisible
    }),
    {
        // Map actions/middleware to props
    }
)(ModalComp);