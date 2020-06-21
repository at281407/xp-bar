import React, { Component } from 'react'
import styled from 'styled-components';
import { compose } from 'redux'
import {connect} from 'react-redux';
import {routes} from "../../Routes";
import { withRouter } from "react-router";

import {ViewWrapper} from '../_Elements/View.sc';
import Header from '../Header';


class DashboardView extends Component {
    

    render() {
        return (
            <ViewWrapper background="linear-gradient(to left, rgb(142, 45, 226), rgb(74, 0, 224))">
                <Header />
                <Dashboard>
                    <h1>XP Logs</h1>
                    <p>Select a table below to get started, or create a new table!</p>
                </Dashboard>
            </ViewWrapper>
        )
    }

    componentDidMount() {
        if(localStorage.getItem("jwtToken") === null){
            this.props.history.push(routes.signIn);
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
        // STate
    }),
    {
        
    })
)(DashboardView);