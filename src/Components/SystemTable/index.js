import React, { Component } from 'react'
import {connect} from 'react-redux';
import {withRouter } from 'react-router-dom';

import {Table} from '../_Elements/Tables/Table.sc';

class SystemTable extends Component {

  state = {
    isRemoveVisible: false,
    description: "",
    xp: 0
  }

  renderSystemRows = () => {
      const table = this.props.table.table;
      const currXp = this.props.log.xpBars[0].currentXp;
      return table.map(level => {
          let background = currXp >= level.xpFloor ? "rgba(166, 131, 197, 0.25);" : "none";
          let fontWeight = currXp >= level.xpFloor && currXp < level.nextLevel ? "bold" : "normal";
          return (
            <Table.Row className="xpLogTable__addTableRow" backgroundColor={background} key={level.level}>
                <Table.Data textAlign="left" padding="8px 0 8px 5px" fontWeight={fontWeight}>{level.xpFloor}</Table.Data>
                <Table.Data textAlign="right" padding="8px 5px 8px 0" fontWeight={fontWeight}>{level.level}</Table.Data>
            </Table.Row>
          )
      })
  }

  render () {
    return (
        <Table margin="36px 0 0 40px" maxWidth="250px">
          <Table.Header>
            <Table.Row>
                <Table.Head textAlign="left">Experience Points</Table.Head>
                <Table.Head textAlign="right">Level</Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.renderSystemRows()}
          </Table.Body>
        </Table>
    )
  }
}


export default withRouter(connect(
  (state) => ({
    // Map state to props
    log: state.authenticationReducer.currentLog.xpLog,
    isLoading: state.loadingReducer.isLoading,
    table: state.authenticationReducer.currentLog.table
  }),{})(SystemTable));