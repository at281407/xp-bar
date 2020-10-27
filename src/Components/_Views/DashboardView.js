import React, { Component } from 'react'
import styled from 'styled-components';
import { compose } from 'redux'
import {connect} from 'react-redux';
import axios from "axios";
import {routes} from "../../Routes";
import jwt_decode from "jwt-decode";
import { withRouter } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from "@fortawesome/free-solid-svg-icons";

import {ViewWrapper} from '../_Elements/View.sc';
import Modal from '../Modal/index';
import Header from '../Header';
import Loading from '../Loading'
import XpLogSelection from '../XpLogSelections';
import { FlexRow } from '../_Elements/Flex/FlexRow.sc';
import { FlexCol } from '../_Elements/Flex/FlexCol.sc';
import { H1 } from '../_Elements/Fonts/Heading1.sc';

import { setCurrentUserAction } from '../../Redux/actions/Authentication/setCurrentUserAction';
import { setIsLoadingAction } from '../../Redux/actions/Loading/setIsLoadingAction';
import { toggleLogRemoveActiveAction } from '../../Redux/actions/Dashboard/toggleLogRemoveActiveAction';


class DashboardView extends Component {

    state = {
        isRemoveVisible: false
    }

    toggleRemoveDisplay = () => {
        this.props.toggleLogRemoveActiveAction(this.props.isLogRemoveActive);
    }

    render() {
        return (
            <ViewWrapper background="linear-gradient(to left, rgb(142, 45, 226), rgb(74, 0, 224))">
                <Modal />
                <Header position="fixed" />
                <Dashboard>
                    <FlexRow>
                        <FlexCol justifyContent="flex-start" alignItems="flex-start">
                            <H1>XP Logs</H1>
                            <p>Select a table below to get started, or create a new table!</p>
                        </FlexCol>
                        <FlexCol alignItems="flex-end" margin="0 130px 0 0" fontSize="1rem">
                            <FontAwesomeIcon icon={Icons.faTrash} onClick={this.toggleRemoveDisplay} size="lg" color="#7F54A5" /> 
                        </FlexCol>
                    </FlexRow>
                    <XpLogSelection isRemoveVisible={this.state.isRemoveVisible} onRemove={this.getAccountInfo} />
                </Dashboard>
            </ViewWrapper>
        )
    }

    getAccountInfo = () => {
        if(!this.props.user._id){
            const token = localStorage.getItem("token");
            if(!token){
                this.props.history.push(routes.signIn);
            }
            else {
                this.props.setIsLoadingAction(true);
                const decoded = jwt_decode(token)
                const payload = {
                    userId: decoded.id
                }
                axios.post("/api/users/getAccountInfo", payload)
                .then(user => {
                    this.props.setCurrentUserAction(user.data);
                    this.props.setIsLoadingAction(false);
                    
                }) // re-direct to login on successful register
                .catch(err =>{
                    console.log(err)
                    this.props.setIsLoadingAction(false);
                });
            }
        }
    }

    componentDidMount() {
        this.getAccountInfo();
    }
}

const Dashboard = styled.div`
     width: 100%;
     height: 100%;
     background: #fff;
     padding: 0 36px 0 300px;
     h1 {
         margin-top: 36px;
     }
`;

export default compose (
    withRouter,
    connect(
    (state) => ({
        user: state.authenticationReducer.user,
        isAuthenticated: state.authenticationReducer.isAuthenticated,
        isLogRemoveActive: state.dashboardReducer.isLogRemoveActive,
        isLoading: state.loadingReducer.isLoading
    }),
    {
        setCurrentUserAction,
        toggleLogRemoveActiveAction,
        setIsLoadingAction
    })
)(DashboardView);