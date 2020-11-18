import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux';
import { withRouter } from "react-router";
import { compose } from 'redux'
import styled from 'styled-components';
import axios from "axios";
import {routes} from "../../Routes";
import jwt_decode from "jwt-decode";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from "@fortawesome/free-solid-svg-icons";

import {Circle} from '../_Elements/Shapes/Circle.sc';
import {CircleImage} from '../_Elements/Shapes/CircleImage.sc';

import {label} from '../_Variables/fonts.sc';

import { setCurrentUserAction } from '../../Redux/actions/Authentication/setCurrentUserAction';
import { setIsLoadingAction} from '../../Redux/actions/Loading/setIsLoadingAction';

class LogSelectionComp extends Component {

    handleRemovePointer = () => {
        return this.props.isLogRemoveActive ? "flex" : "none";
    }
    
    handleRemoveDisplay = () => {
        return this.props.isLogRemoveActive ? "flex" : "none";
    }

    handleCircleOpacity = () => {
        return this.props.isLogRemoveActive ? "50%" : "100%";
    }
    
    renderCircle() {
        var firstLetter = this.props.symbol ? this.props.symbol : this.props.name.charAt(0).toUpperCase();
        return this.props.imgSrc ? 
            <CircleImage src={this.props.imgSrc} onerror="this.style.display='none'" opacity={this.handleCircleOpacity()} /> : 
            <Circle opacity={this.handleCircleOpacity()}>{firstLetter}</Circle>
    }

    handleRemoveClick = () => {
        this.props.setIsLoadingAction(true);
        const payload = {
            id: this.props.logId
        }
        axios.post("/api/logs/deleteLog", payload)
        .then(user => {
            const token = localStorage.getItem("token");
            if(!token){
                this.props.history.push(routes.signIn);
            }
            else {
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
                    this.props.setIsLoadingAction(false);
                });
            }
        }) // re-direct to login on successful register
        .catch(err => {
            this.props.setIsLoadingAction(false);
        });
    }

    render() {
        if(this.props.variant === "addLog"){
            return (
                <LogSelection onClick={this.props.onClick} isLogRemoveActive={this.props.isLogRemoveActive}>
                    <Circle color="#7F54A5" backgroundColor="#fff" border="2px solid #7F54A5" opacity={this.handleCircleOpacity()}>+</Circle>
                    <label>{this.props.name}</label>
                </LogSelection>
            )
        }
        else {
            return (
                <LogSelection onClick={this.props.onClick} isLogRemoveActive={this.props.isLogRemoveActive}>
                    <Circle 
                            className="logSelection__closeCircle"
                            display={this.handleRemoveDisplay()}
                            width="35px" 
                            height="35px" 
                            backgroundColor="#fff" 
                            position="absolute" 
                            margin="0 0 0 80px" 
                            fontSize="1rem" 
                            zIndex="2"
                            onClick={this.handleRemoveClick}>
                        <FontAwesomeIcon icon={Icons.faTimes} size="lg" color="#7F54A5"/> 
                    </Circle>
                    <div onClick={this.props.onClick}>
                        {this.renderCircle()}
                        <label>{this.props.name}</label>
                    </div>
                </LogSelection>
            )
        }
    }
}

const LogSelection = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    max-width: 92px;
    height: auto;
    text-align: center;
    cursor: ${props => props.isLogRemoveActive ? "default" : "pointer"};
    div:not(.logSelection__closeCircle) * {
        cursor: ${props => props.isLogRemoveActive ? "default" : "pointer"} !important;
    }

    a {
        text-decoration: none;
    }
    label {
        ${label};
        margin-top: 6px;
        cursor: pointer;
    }
`;

export default compose (
    withRouter,
    connect(
    (state) => ({
        isLogRemoveActive: state.dashboardReducer.isLogRemoveActive
    }),
    {
        setCurrentUserAction,
        setIsLoadingAction
    })
)(LogSelectionComp);
