import React, { Component } from 'react'
import {connect} from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

import {Circle} from '../_Elements/Shapes/Circle.sc';
import {CircleImage} from '../_Elements/Shapes/CircleImage.sc';

import {label} from '../_Variables/fonts.sc';

class LogSelectionComp extends Component {

    renderCircle() {
        var firstLetter = this.props.symbol ? this.props.symbol : this.props.name.charAt(0).toUpperCase();
        console.log(this.props.variant);
        if(this.props.variant === "addLog"){
            return <Circle color="#7F54A5" backgroundColor="#fff" border="2px solid #7F54A5">{firstLetter}</Circle>
        } 
        else{
            return this.props.imgSrc ? 
                 <CircleImage src={this.props.imgSrc} onerror="this.style.display='none'" /> : 
                 <Circle >{firstLetter}</Circle>
        }
    }
    
    render() {
        return (
            <LogSelection onClick={this.props.onClick}>
                <Link to={this.props.link}>
                    {this.renderCircle()}
                    <label>{this.props.name}</label>
                </Link>
            </LogSelection>
        )
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
    cursor: pointer;
    a {
        text-decoration: none;
    }
    label {
        ${label};
        margin-top: 6px;
        cursor: pointer;
    }
`;

export default LogSelectionComp;
