import React, { Component } from 'react'
import {connect} from 'react-redux';
import styled from 'styled-components';
import { withRouter } from "react-router";
import { compose } from 'redux'

import LogSelection from './LogSelection';

import {toggleModalAction} from '../../Redux/actions/toggleModalAction';

class XPLogSelectionsComp extends Component {

    handleCreateLog = () => {
        this.props.toggleModalAction("createLog", true);
    }

    handleLink = (link) => {
        if(!this.props.isLogRemoveActive){
            this.props.history.push(link);
        }
    }

    renderLogs = () => {
        if(this.props.isAuthenticated){
            return this.props.user.xpLogs.map(xpLog => {
                const link = "/account/log/" + xpLog._id;
                return <LogSelection key={xpLog._id} logId={xpLog._id} imgSrc={xpLog.imgSrc} name={xpLog.name}  onClick={() => this.handleLink(link)} onRemove={this.props.onRemove}/>
            })
        }
    }
    
    render() {
        return (
            <XPLogSelections>
                {this.renderLogs()}
                <LogSelection name="Add New Log" symbol="+" link="#" variant="addLog" onClick={this.handleCreateLog}  />
            </XPLogSelections>
        )
    }
}

const XPLogSelections = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 20px;
    & > div {
        margin: 0 45px 22px 0;
        min-height:50px;
    }
`;

export default compose (
    withRouter,
    connect(
    (state) => ({
        user: state.authenticationReducer.user,
        isAuthenticated: state.authenticationReducer.isAuthenticated,
        isLogRemoveActive: state.dashboardReducer.isLogRemoveActive
    }),
    {
        toggleModalAction
    })
)(XPLogSelectionsComp);