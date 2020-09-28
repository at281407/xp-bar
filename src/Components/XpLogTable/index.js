import React, { Component } from 'react'
import {connect} from 'react-redux';
import {routes} from "../../Routes";
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import {rem} from '../../Services/remConverter';

import {Input} from '../_Elements/Form/Input.sc';
import {Button} from '../_Elements/Form/Button.sc';
import {Label} from '../_Elements/Form/Label.sc';
import {Table} from '../_Elements/Tables/Table.sc';

import {SvgIcon} from '../_Elements/Icon.sc';
import {ReactComponent as Logo} from '../../Assets/images/dndxpbar_logox2.svg';
import { FlexRow } from '../_Elements/Flex/FlexRow.sc';

class XpLogTable extends Component {
  
  handleCopy = e => {
    console.log(e.target.value);
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
                <Table.Data textAlign="left" width="60%">
                  <Input margin="4px 0" width="95%" />
                </Table.Data>
                <Table.Data textAlign="right" width="20%">
                  <Input margin="4px 0" width="70%" />
                </Table.Data>
                <Table.Data border="none"></Table.Data>
                <Table.Data border="none"></Table.Data>
            </Table.Row>
            <Table.Row>
                <Table.Data textAlign="left" width="60%" padding="8px 4px">Slayed a bunch of Gerblins</Table.Data>
                <Table.Data textAlign="right" width="20%" padding="8px 4px">800</Table.Data>
                <Table.Data border="none" padding="8px 0">Data 3</Table.Data>
                <Table.Data border="none" padding="8px 0">Data 1</Table.Data>
            </Table.Row>
            <Table.Row>
                <Table.Data textAlign="left" width="60%" padding="8px 4px">Slayed a bunch of Gerblins</Table.Data>
                <Table.Data textAlign="right" width="20%" padding="8px 4px">800</Table.Data>
                <Table.Data border="none" padding="8px 0">Data 3</Table.Data>
                <Table.Data border="none" padding="8px 0">Data 1</Table.Data>
            </Table.Row>
            <Table.Row>
                <Table.Data textAlign="left" width="60%" padding="8px 4px">Slayed a bunch of Gerblins</Table.Data>
                <Table.Data textAlign="right" width="20%" padding="8px 4px">800</Table.Data>
                <Table.Data border="none" padding="8px 0">Data 3</Table.Data>
                <Table.Data border="none" padding="8px 0">Data 1</Table.Data>
            </Table.Row>
            <Table.Row>
                <Table.Data textAlign="left" width="60%" padding="8px 4px">Slayed a bunch of Gerblins</Table.Data>
                <Table.Data textAlign="right" width="20%" padding="8px 4px">800</Table.Data>
                <Table.Data border="none" padding="8px 0">Data 3</Table.Data>
                <Table.Data border="none" padding="8px 0">Data 1</Table.Data>
            </Table.Row>
            <Table.Row>
                <Table.Data textAlign="left" width="60%" padding="8px 4px">Slayed a bunch of Gerblins</Table.Data>
                <Table.Data textAlign="right" width="20%" padding="8px 4px">800</Table.Data>
                <Table.Data border="none" padding="8px 0">Data 3</Table.Data>
                <Table.Data border="none" padding="8px 0">Data 1</Table.Data>
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