import React, { Component } from 'react'
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from "@fortawesome/free-solid-svg-icons";
import {withRouter } from 'react-router-dom';

import {Input} from '../_Elements/Form/Input.sc';
import {Button} from '../_Elements/Form/Button.sc';
import {Table} from '../_Elements/Tables/Table.sc';


class XpLogTable extends Component {

  state = {
    isRemoveVisible: false,
    description: "",
    xp: ""
  }
  
  handleCopy = e => {
    console.log(e.target.value);
  }

  handleAddLog = () => {
    alert("adding");
  }

  handleToggleRemove = () => {
    this.setState({
      isRemoveVisible: !this.state.isRemoveVisible
    })
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
            <Table.Row>
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
            <Table.Row>
                <Table.Data textAlign="left" width="60%" padding="8px 4px">Slayed a bunch of Gerblins</Table.Data>
                <Table.Data textAlign="right" width="20%" padding="8px 4px">800</Table.Data>
                <Table.Data border="none" padding="15px 0" style={this.renderHiddenStyles()}>
                  <FontAwesomeIcon icon={Icons.faTimes} onClick={this.handleClose} size="lg" color="#7F54A5"/> 
                </Table.Data>
                <Table.Data border="none" padding="15px 0"></Table.Data>
            </Table.Row>
            <Table.Row>
                <Table.Data textAlign="left" width="60%" padding="8px 4px">Slayed a bunch of Gerblins</Table.Data>
                <Table.Data textAlign="right" width="20%" padding="8px 4px">800</Table.Data>
                <Table.Data border="none" padding="15px 0" style={this.renderHiddenStyles()}>
                  <FontAwesomeIcon icon={Icons.faTimes} onClick={this.handleClose} size="lg" color="#7F54A5"/> 
                </Table.Data>
                <Table.Data border="none" padding="15px 0"></Table.Data>
            </Table.Row>
          </Table.Body>
        </Table>
    )
  }
}


export default withRouter(connect(
  (state) => ({
    // Map state to props
  }),
  {

  }
)(XpLogTable));