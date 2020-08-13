import React, { Component } from 'react'
import {connect} from 'react-redux';
import styled from 'styled-components';

import LogSelection from './LogSelection';

import {toggleModalAction} from '../../Redux/actions/toggleModalAction';

class XPLogSelectionsComp extends Component {

    handleOpenLog = () => {
        
    }

    handleCreateLog = () => {
        this.props.toggleModalAction("createLog", true);
    }

    renderLogs = () => {
        if(this.props.isAuthenticated){
            return this.props.user.xpLogs.map(xpLog => {
                return <LogSelection key={xpLog._id} imgSrc={xpLog.imgSrc} name={xpLog.name}  link="#"/>
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
    & > div {
        margin: 0 45px 22px 0;
        min-height:50px;
    }
`;

export default connect(
    (state) => ({
        user: state.authenticationReducer.user,
        isAuthenticated: state.authenticationReducer.isAuthenticated
    }),
    {
        toggleModalAction
    }
)(XPLogSelectionsComp);