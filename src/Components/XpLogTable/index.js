import React, { Component } from 'react'
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import {withRouter } from 'react-router-dom';

import {Input} from '../_Elements/Form/Input.sc';
import {Button} from '../_Elements/Form/Button.sc';
import {Table} from '../_Elements/Tables/Table.sc';

import {updateCurrentLogAction} from '../../Redux/actions/Authentication/updateCurrentLogAction';

class XpLogTable extends Component {

  state = {
    isRemoveVisible: false,
    description: "",
    xp: 0
  }
  
  handleCopy = e => {
    console.log(e.target.value);
  }

  handleAddLog = () => {

    if(this.state.description.length > 0 && this.state.xp > 0) {
    var payload = {
      id: this.props.log._id,
      description: this.state.description,
      xp: this.state.xp
    }

    axios.post("/api/logs/addDeed", payload)
          .then(log => {
            console.log(log.data);
              this.props.updateCurrentLogAction(log.data);
              this.setState({
                description: "",
                xp: 0
              })
          }) // re-direct to login on successful register
          .catch(err => {
                console.log(err);
            }
           );
    }
  }

  handleToggleRemove = () => {
    this.setState({
      isRemoveVisible: !this.state.isRemoveVisible
    })
  }

  handleRemove = (deedId) => {
    let payload = {
      logId: this.props.log._id,
      deedId: deedId
    }
    axios.post("/api/logs/removeDeed", payload)
      .then(log => {
          this.props.updateCurrentLogAction(log.data);
          this.setState({
            description: "",
            xp: 0
          })
      }) // re-direct to login on successful register
      .catch(err => {
            console.log(err);
        }
    );
  }

  renderHiddenStyles = () => {
    if(this.state.isRemoveVisible){
        return {
          "visibility": "visible"
        }
    }
    else {
      return {
        "visibility": "hidden"
      }
    }
  }

  renderHiddenDisabled = () => {
    if(this.state.isRemoveVisible){
      return "disabled"
    }
    else {
      return ""
    }
  }

  renderDeeds = () => {
    let deeds = this.props.log.xpBars[0].deeds;
    console.log(this.props.log);
    return deeds.map(deed => {
      return (
        <Table.Row key={deed.date} >
              <Table.Data textAlign="left" width="60%" padding="8px 4px">{deed.description}</Table.Data>
              <Table.Data textAlign="right" width="20%" padding="8px 4px">{deed.xpRewarded}</Table.Data>
              <Table.Data border="none" padding="15px 0" style={this.renderHiddenStyles()}>
                <FontAwesomeIcon icon={Icons.faTimes}  onClick={() => this.handleRemove(deed._id)} size="lg" color="#7F54A5"/> 
              </Table.Data>
              <Table.Data border="none" padding="15px 0"></Table.Data>
          </Table.Row>
      )
    })
  }

  render () {
    return (
        <Table margin="40px 0 0 0">
          <Table.Header>
            <Table.Row>
                <Table.Head textAlign="left" width="60%">Description</Table.Head>
                <Table.Head textAlign="right" width="20%">XP Earned</Table.Head>
                <Table.Head border="none"></Table.Head>
                <Table.Head border="none"></Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row className="xpLogTable__addTableRow">
                <Table.Data textAlign="left" width="60%" padding="8px 0">
                  <Input
                      margin="4px 0"
                      width="95%"
                      id="description"
                      name="description"
                      type="input"
                      value={this.state.description}
                      onChange={(e) => this.setState({
                          description: e.target.value
                      })}
                  />
                </Table.Data>
                <Table.Data textAlign="right" width="20%">
                  <Input
                      margin="4px 0"
                      width="50%"
                      id="xp"
                      name="xp"
                      type="number"
                      value={this.state.xp}
                      onChange={(e) => this.setState({
                          xp: e.target.value
                      })}
                  />
                </Table.Data>
                <Table.Data border="none" width="10%">
                  <Button height="100%" width="100%" maxWidth="70px" onClick={this.handleAddLog} disabled={this.renderHiddenDisabled()}>Add</Button>
                </Table.Data>
                <Table.Data border="none" width="4%" cursor="pointer">
                     <FontAwesomeIcon icon={Icons.faTrash} onClick={this.handleToggleRemove} size="2x" color="#7F54A5" /> 
                </Table.Data>
            </Table.Row>
            {this.renderDeeds()}
          </Table.Body>
        </Table>
    )
  }
}


export default withRouter(connect(
  (state) => ({
    // Map state to props
    log: state.authenticationReducer.currentLog
  }),
  {
    updateCurrentLogAction
  }
)(XpLogTable));