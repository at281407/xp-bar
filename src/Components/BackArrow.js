
import React, { Component } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'
import * as Icons from "@fortawesome/free-solid-svg-icons";

import { Label } from './_Elements/Form/Label.sc'

const BackArrow = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    a {
        text-decoration: none;
    }
`

const ArrowText = styled(Label)`
    color: #7F54A5;
    margin-left: 10px;
`;

export class BackArrowComp extends Component {
    render() {
        return (
            <BackArrow>
                <Link to={this.props.link}>
                 <FontAwesomeIcon icon={Icons.faAngleLeft} size="lg" color="#7F54A5"/> 
                 <ArrowText>BACK</ArrowText>
                 </Link>
            </BackArrow>
        )
    }
}

export default BackArrowComp
