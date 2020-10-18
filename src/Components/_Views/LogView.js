import React, { Component } from 'react'
import styled from 'styled-components';
import { compose } from 'redux'
import {connect} from 'react-redux';
import axios from "axios";
import { withRouter } from "react-router";

import BarLink from '../BarLink';
import XpLogTable from '../XpLogTable';
import Loading from '../Loading'

import {ViewWrapper} from '../_Elements/View.sc';
import Modal from '../Modal/index';
import Header from '../Header';
import {H1} from '../_Elements/Fonts/Heading1.sc'
import {FlexRow} from '../_Elements/Flex/FlexRow.sc';
import {FlexCol} from '../_Elements/Flex/FlexCol.sc';

import { setCurrentUserAction } from '../../Redux/actions/Authentication/setCurrentUserAction';
import { setCurrentLogAction} from '../../Redux/actions/Authentication/setCurrentLogAction';


class LogView extends Component {

    renderLogView = () => {
        return (
            <ViewWrapper>
                <Modal />
                <Header />
                <Log>
                    <FlexRow margin="36px 0 0 0" justifyContent="space-apart" alignItems="flex-start">
                        <FlexCol className="log--headings" justifyContent="flex-end" alignItems="flex-start">
                            <H1>{this.props.log.name}</H1>
                            <p>Add your party's latest exploints to the table below, and your changes will save to your xp table.</p>
                        </FlexCol>
                        <FlexCol className="log--summary" justifyContent="flex-end" alignItems="flex-end">
                            <span className="log--totalXp"><b>Total XP:</b> { this.props.log.xpBars[0].currentXp}</span>
                            <span className="log--currentLevel"><b>Current Level:</b> {this.props.log.xpBars[0].currentLevel} </span>
                        </FlexCol>
                    </FlexRow>
                    <BarLink />
                    <XpLogTable />
                </Log>
            </ViewWrapper>
        )
    }

    render() {
        return this.props.log.xpBars ? this.renderLogView() : (
            <Loading static={true} />
        )
    }

    componentDidMount() {
        let url = window.location.href;
        let currentLogId = url.split('/').pop();
        const payload = {
            id: currentLogId
        }
        axios.post("/api/logs/getLog", payload)
            .then(log => {
                console.log(log);
                this.props.setCurrentLogAction(log.data.xpLog);
        })
    }
}

const Log = styled.div`
     width: 100%;
     max-width: 1000px;
     height: 100%;
     background: #fff;
     padding: 0 36px 0 300px;
     align-items: flex-start;
     .log--summary {
         font-size: 16px;
     }
`;

export default compose (
    withRouter,
    connect(
    (state) => ({
        user: state.authenticationReducer.user,
        log: state.authenticationReducer.currentLog
    }),
    {
        setCurrentLogAction,
        setCurrentUserAction
    })
)(LogView);