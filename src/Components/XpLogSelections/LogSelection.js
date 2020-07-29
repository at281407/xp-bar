import React, { Component } from 'react'
import {connect} from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

import {CircleImage} from '../_Elements/Shapes/CircleImage.sc';

import {label} from '../_Variables/fonts.sc';

class LogSelectionComp extends Component {
    
    render() {
        return (
            <LogSelection>
                <Link to="https://google.com">
                    <CircleImage src={this.props.imgSrc} />
                    <label>{this.props.name}</label>
                </Link>
            </LogSelection>
        )
    }
}

const LogSelection = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
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
