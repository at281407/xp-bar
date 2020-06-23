import React, { Component } from 'react'
import {connect} from 'react-redux';
import styled from 'styled-components';

import LogSelection from './LogSelection';

class XPLogSelectionsComp extends Component {
    
    render() {
        return (
            <XPLogSelections>
                <LogSelection imgSrc="/images/logoSmall.png" name="Call of the Deep" />
                <LogSelection imgSrc="/images/logoSmall.png" name="Call of the Deep" />
                <LogSelection imgSrc="/images/logoSmall.png" name="Call of the Deep" />
                <LogSelection imgSrc="/images/logoSmall.png" name="Call of the Deep" />
            </XPLogSelections>
        )
    }
}

const XPLogSelections = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    width: 100%;
    & > div {
        margin-right: 36px;
    }
`;

export default XPLogSelectionsComp;