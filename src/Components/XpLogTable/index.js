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
        <Table>
          <Table.Row>
              <Table.Head>Col 1</Table.Head>
              <Table.Head>Col 2</Table.Head>
              <Table.Head>Col 3</Table.Head>
              <Table.Head>Col 4</Table.Head>
          </Table.Row>
          <Table.Row>
              <Table.Cell>Data 1</Table.Cell>
              <Table.Cell>Data 2</Table.Cell>
              <Table.Cell>Data 3</Table.Cell>
              <Table.Cell>Data 1</Table.Cell>
          </Table.Row>
          <Table.Row>
              <Table.Cell>Data 1</Table.Cell>
              <Table.Cell>Data 2</Table.Cell>
              <Table.Cell>Data 3</Table.Cell>
              <Table.Cell>Data 1</Table.Cell>
          </Table.Row>
          <Table.Row>
              <Table.Cell>Data 1</Table.Cell>
              <Table.Cell>Data 2</Table.Cell>
              <Table.Cell>Data 3</Table.Cell>
              <Table.Cell>Data 1</Table.Cell>
          </Table.Row>
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