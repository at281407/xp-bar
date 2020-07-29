import React, { Component } from 'react'
import styled from 'styled-components';
import { compose } from 'redux'
import {connect} from 'react-redux';
import axios from "axios";
import {routes} from "../../Routes";
import jwt_decode from "jwt-decode";
import { withRouter } from "react-router";

import {ViewWrapper} from '../_Elements/View.sc';
import Header from '../Header';
import XpLogSelection from '../XpLogSelections';
import { setCurrentUserAction } from '../../Redux/actions/Authentication/setCurrentUserAction';


class DashboardView extends Component {
    

    render() {
        return (
            <ViewWrapper background="linear-gradient(to left, rgb(142, 45, 226), rgb(74, 0, 224))">
                <Header />
                <Dashboard>
                    <h1>XP Logs</h1>
                    <p>Select a table below to get started, or create a new table!</p>
                    <XpLogSelection />
                </Dashboard>
            </ViewWrapper>
        )
    }

    componentDidMount() {
        const token = localStorage.getItem("token");
        if(!token){
            this.props.history.push(routes.signIn);
        }
        else {
            const decoded = jwt_decode(token)
            console.log(decoded);
            const payload = {
                userId: decoded.id
            }
            console.log(payload);
            axios.post("/api/users/getAccountInfo", payload)
            .then(user => {
                console.log(user);
                this.props.setCurrentUserAction(user);
            }) // re-direct to login on successful register
            .catch(err =>
                console.log(err)
            );
        }
    }
}

const Dashboard = styled.div`
     width: 100%;
     height: 100%;
     background: #fff;
     padding: 0 36px;
     h1 {
         margin-top: 36px;
     }
`;

export default compose (
    withRouter,
    connect(
    (state) => ({
        user: state.authenticationReducer.user,
        isAuthenticated: state.authenticationReducer.isAuthenticated
    }),
    {
        
    })
)(DashboardView);