import React, { Component } from 'react'
import {connect} from 'react-redux';
import styled from 'styled-components';

import LogSelection from './LogSelection';

class XPLogSelectionsComp extends Component {

    renderLogs = () => {
        if(this.props.isAuthenticated){
            return this.props.user.xpLogs.map(xpLog => {
                return <LogSelection imgSrc={xpLog.imgSrc} name={xpLog.name} />
            })
        }
    }
    
    render() {
        return (
            <XPLogSelections>
                {this.renderLogs()}
                <LogSelection imgSrc="/images/logoSmall.png" name="Add New Log" />
            </XPLogSelections>
        )
    }
}

const XPLogSelections = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    width: 100%;
    & > div {
        margin-right: 36px;
    }
`;

export default connect(
    (state) => ({
        user: state.authenticationReducer.user,
        isAuthenticated: state.authenticationReducer.isAuthenticated
    }),
    {
        
    }
)(XPLogSelectionsComp);