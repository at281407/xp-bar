import React, { Component } from 'react';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

import {toggleModalAction} from '../../Redux/actions/toggleModalAction';
import { setCurrentUserAction } from '../../Redux/actions/Authentication/setCurrentUserAction';

import styled from 'styled-components';
import {Modal} from './Modal.sc';

const Confirmation = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: auto;
    z-index: 200;
`;

class ConfirmationModal extends Component {

  state = {
    logName: "",
    startingLevel: "1"
  }

  handleClose = () => {
      this.props.toggleModalAction(null, false);
  }

  handleClick = () => {
      alert(this.state.logName);
  }
  handleInputChange = (e) =>{
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
      e.preventDefault();

      const payload = {
          userId: this.props.user._id,
          logName: this.state.logName,
          startingLevel: this.state.startingLevel
      }
      
      axios.post("/api/logs/createLog", payload)
          .then(user => {
              alert("New logs created!");
              this.props.setCurrentUserAction(user.data)
              this.props.toggleModalAction(null, false);
          }) // re-direct to login on successful register
          .catch(err => {
                console.log(err);
            }
        );
  }

  render () {
    return (
    <Confirmation>
        <h1>Confirmation</h1>
    </Confirmation>
    )
  }
}

export default connect(
    (state) => ({
        user: state.authenticationReducer.user
    }),
    {
        toggleModalAction,
        setCurrentUserAction
    }
)(ConfirmationModal);