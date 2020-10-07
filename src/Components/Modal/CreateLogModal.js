import React, { Component } from 'react';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

import {toggleModalAction} from '../../Redux/actions/toggleModalAction';
import { setCurrentUserAction } from '../../Redux/actions/Authentication/setCurrentUserAction';

import styled from 'styled-components';
import {Modal} from './Modal.sc';

const CreateLog = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 600px;
    height: auto;
    z-index: 200;
`;

class CreateLogModal extends Component {

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
      console.log(this.props.user);
      const payload = {
          userId: this.props.user._id,
          logName: this.state.logName,
          startingLevel: this.state.startingLevel
      }
      console.log(payload);
      
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
    <CreateLog>
        <Modal.Form padding="20px" onSubmit={this.handleSubmit}>
            <Modal.FormRow justifyContent="flex-end">
                <FontAwesomeIcon icon={Icons.faTimes} onClick={this.handleClose} size="sm"/>
            </Modal.FormRow>
            <Modal.H1>Create a Log</Modal.H1>
            <Modal.FormRow>
            <Modal.FieldGroup id="logName" margin="0.25rem 15px" maxWidth="100%">
                <Modal.Label htmlFor="logName">Log Name</Modal.Label>
                <Modal.Input
                    id="logName"
                    name="logName"
                    type="input"
                    value={this.state.logName}
                    onChange={(e) => this.setState({
                        logName: e.target.value
                    })}
                />
            </Modal.FieldGroup>
            <Modal.FieldGroup id="startingLevel" margin="0.25rem 0"  maxWidth="125px">
                <Modal.Label htmlFor="startingLevel">Starting Level</Modal.Label>
                <Modal.Select
                    id="startingLevel"
                    name="startingLevel"
                    type="startingLevel"
                    value={this.state.startingLevel}
                    onChange={(e) => this.setState({
                        startingLevel: e.target.value
                    })}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                </Modal.Select>
            </Modal.FieldGroup>
            </Modal.FormRow>
            <Modal.Button margin="10px 0 0 0" onClick={this.handleSubmit}>Create Log</Modal.Button>
        </Modal.Form>
    </CreateLog>
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
)(CreateLogModal);