import React, { Component } from 'react'
import { compose } from 'redux'
import {connect} from 'react-redux';
import {routes} from "../../Routes";
import { withRouter } from "react-router";

import {ViewWrapper} from '../_Elements/View.sc';


class DashboardView extends Component {
    

    render() {
        return (
            <ViewWrapper background="linear-gradient(to left, rgb(142, 45, 226), rgb(74, 0, 224))">
                <h1>DASHBOARD</h1>
            </ViewWrapper>
        )
    }

    componentDidMount() {
        if(localStorage.getItem("jwtToken") === null){
            this.props.history.push(routes.signIn);
        }
    }
}

export default compose (
    withRouter,
    connect(
    (state) => ({
        // STate
    }),
    {
        
    })
)(DashboardView);