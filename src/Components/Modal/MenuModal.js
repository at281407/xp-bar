import React, { Component } from 'react';
import {connect} from 'react-redux';

import CancelSvg from "../../Assets/images/cancel.svg";

import {toggleModalAction} from '../../Redux/actions/toggleModalAction';

import styled from 'styled-components';
import {Modal} from './Modal.sc';

import {Heading4} from '../_Elements/Fonts/Heading4.sc';
import Close from './Close.sc';

const Menu = styled.div`
    width: 300px;
    height: 100%;
    padding: 10px;
    button {
        margin: 10px 0;
    }
`;

class MenuModal extends Component {

  state = {
    username: "",
    password: ""
  }

  handleClose = () => {
      this.props.toggleModalAction(null, false);
  }

  handleClick = () => {
      alert(this.state.username);
  }
  handleInputChange = (e) =>{
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
      e.preventDefault();

  }

  render () {
      return (
          <Menu>
              <Modal.FormRow justifyContent="flex-end">
                  <Close src={CancelSvg} onClick={() => this.props.toggleModalAction(null, false)}/>
              </Modal.FormRow>
              <Modal.FormRow><h1>Settings</h1></Modal.FormRow>
              <Modal.Button onClick={() => this.props.toggleModalAction('xpLog', true)}>Track XP</Modal.Button>
          </Menu>
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
)(MenuModal);