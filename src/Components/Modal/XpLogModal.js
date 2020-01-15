import React, { Component } from 'react';
import {connect} from 'react-redux';

import CancelSvg from "../../Assets/images/cancel.svg";

import {toggleModalAction} from '../../Redux/actions/toggleModalAction';

import styled from 'styled-components';
import {Modal} from './Modal.sc';

import XpTable from '../XpTable'

import {Heading4} from '../_Elements/Fonts/Heading4.sc';

import Close from './Close.sc';

const XpLog = styled.div`
    width: 100%;
    min-width: 800px
    height: 100%;
    padding: 10px;
    button {
        margin: 10px 0;
    }
`;

class XpLogModal extends Component {

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
          <XpLog>
              <Modal.FormRow justifyContent="space-between">
                  <Heading4  margin="0" onClick={() => this.props.toggleModalAction('menu', true)}>&lt; Back</Heading4>
                  <Close src={CancelSvg} onClick={() => this.props.toggleModalAction(null, false)}/>
              </Modal.FormRow>
              <Modal.FormRow justifyContent="space-between"> 
                  <XpTable />
                  <div width="20%"></div>
              </Modal.FormRow>
          </XpLog>
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
)(XpLogModal);