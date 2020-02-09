import React, { Component } from 'react';
import {connect} from 'react-redux';

import CancelSvg from "../../Assets/images/cancel.svg";

import {ReactComponent as Book} from '../../Assets/images/book.svg';

import styled from 'styled-components';

const XpSummary = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin-bottom: auto;
    width: 20%;
    height: 100%;
    padding: 10px;
    h3,p {
        margin: 0;
    }
    h3 {
        margin-top: 5px;
    }
    p {
        font-weight: bold;
    }
`;

class XpSummaryModal extends Component {

  render () {
      return (
          <XpSummary>
              <Book />
              <h3>Total XP:</h3>
              <p>{this.props.xpTotal}</p>
          </XpSummary>
      )
  }
}

export default connect(
    (state) => ({
        xpTotal: state.xpTableReducer.xpTotal
    }),
    {
    }
)(XpSummaryModal);