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
import XpLogSelection from '../XpLogSelections';
import { FlexRow } from '../_Elements/Flex/FlexRow.sc';
import { FlexCol } from '../_Elements/Flex/FlexCol.sc';
import { H1 } from '../_Elements/Fonts/Heading1.sc';

import backgroundText from '../../Assets/images/natural_paper.png';

import { setCurrentUserAction } from '../../Redux/actions/Authentication/setCurrentUserAction';
import { setIsLoadingAction } from '../../Redux/actions/Loading/setIsLoadingAction';
import { toggleLogRemoveActiveAction } from '../../Redux/actions/Dashboard/toggleLogRemoveActiveAction';


const Dashboard = styled.div`
     width: 100%;
     height: 100%;
     background: #fff;
     margin: 0 5vw 0 calc(5vw + 261px);
     padding: 0 25px 0 25px;
     h1 {
         margin-top: 36px;
     }
`;

class DashboardView extends Component {

    state = {
        isRemoveVisible: false
    }

    toggleRemoveDisplay = () => {
        this.props.toggleLogRemoveActiveAction(this.props.isLogRemoveActive);
    }

    render() {
        const backgroundTexture = `url(${backgroundText});`;
        return (
            <ViewWrapper background={backgroundTexture}>
                <Modal />
                <Header position="fixed" />
                <Dashboard>
                    <FlexRow>
                        <FlexCol justifyContent="flex-start" alignItems="flex-start" width="100%" padding="0 20% 0 0" >
                            <H1>XP Logs</H1>
                            <p>Begin recording your party's epic deeds by adding a new log below.  Or, select an existing Log to update your party's progress.</p>
                        </FlexCol>
                        <FlexCol alignItems="flex-end" fontSize="1rem" width="auto">
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