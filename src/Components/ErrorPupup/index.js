import React, { Component } from 'react'
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components';

import {removeErrorPopupAction} from '../../Redux/actions/Errors/removeErrorPopupAction';

const ErrorPopup = styled.div`
    display: ${props => props.isVisible ? 'flex' : 'none'};
    flex-flow: column nowrap;
    width: 100vw;
    height: auto;
    position: fixed;
    text-align: center;
    top: 20px;
    left:0;
    z-index: 1000;
    align-items: center;
    justify-content: center;
    .errorPopup--errorWrapper {
        position: relative;
        width: 90%;
        max-width: 1000px;
        height: auto;
        border: 2px solid red;
        background-color: #fff;
        border-radius: 1px;
        margin-bottom: 10px;
        .errorPopup--errorClose {
            position: absolute;
            top: 10px;
            right: 15px;
        }
    }
`;

class ErrorPupupComp extends Component {

  renderErrors = () => {
      return this.props.errors.map((error, i) => { 
        return (
            <div className="errorPopup--errorWrapper" key={i}>
                <FontAwesomeIcon  className="errorPopup--errorClose" icon={Icons.faTimes} onClick={() => this.props.removeErrorPopupAction(this.props.errors, i)} size="sm"/>
                <p><b>Error: </b>{error}</p>
            </div>
        )
      })
  }

  render () {
      
    return (
        <ErrorPopup isVisible={this.props.errors.length > 0}>
            {this.renderErrors()}
        </ErrorPopup>
    )
  }
}

export default connect(
  (state) => ({
    errors: state.errorReducer.messages
  }),
  {
    removeErrorPopupAction
  }
)(ErrorPupupComp);