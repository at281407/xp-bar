import React, { Component } from 'react'
import {connect} from 'react-redux';
import {routes} from "../../Routes";
import { compose } from 'redux'
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import {rem} from '../../Services/remConverter';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import {Input} from '../_Elements/Form/Input.sc';
import {Button} from '../_Elements/Form/Button.sc';
import {Label} from '../_Elements/Form/Label.sc';

import {SvgIcon} from '../_Elements/Icon.sc';
import {ReactComponent as Logo} from '../../Assets/images/dndxpbar_logox2.svg';
import { FlexRow } from '../_Elements/Flex/FlexRow.sc';

import { setCurrentLogAction} from '../../Redux/actions/Authentication/setCurrentLogAction';

class BarLinkComp extends Component {

  barLinkRef = React.createRef()

  state = {
    barLink: "",
    isCopySuccess: false
  }
  
  handleCopy = e => {
    this.input.select();
    document.execCommand("copy");
    e.target.focus();
  }

  handleCopySuccess = () =>{
    return this.state.isCopySuccess ? 'Copied!' : '';
  }

  generateLink = () => {
    this.setState({
      barLink: window.location.origin + "/xp-bar/" + this.props.log._id
    });
  }

  componentWillMount() {
    this.generateLink()
  }

  render () {
    return (
        <BarLink>
          <Label>Provide below is your xp bar!  Do with it what you'd like.</Label>  
          <FlexRow justifyContent="flex-start">
            <Input ref={(input) => this.input = input}  value={this.state.barLink} disabled />
            <CopyToClipboard text={this.state.barLink} onCopy={() => this.setState({isCopySuccess: true})}><button>Copy</button></CopyToClipboard>
            <span className="barLink__success">{this.handleCopySuccess()}</span>
          </FlexRow>
          <a href={this.state.barLink} target="_blank">View xp bar</a>
        </BarLink>
    )
  }
}

export const BarLink = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    margin-top: 20px;
    input {
        max-width: calc(70% - 70px);
        height: 20px;
        margin: 0 16px 0 0;
        border: 3px solid #e7e7e7;
        border-radius: 3px;
        font-style: italic;
        font-size:1rem;
        padding: 9px 18px;
        overflow-x: hidden;
    }
    a { 
      color: #7F54A5;
      margin-top: 10px;
    }
    button {
        width: 100%;
        max-width: 70px;
        height: 40px;
        color: #ffffff;
        font-size: 1em;
        font-weight: bold;
        border-radius: 5px;
        background-color: #7F54A5;
        cursor: pointer;
        border: 1px solid #7F54A5;
    }
    span {
      color: green;
      margin-left: 15px;
    }
`;



export default compose (
  withRouter,
  connect(
  (state) => ({
      log: state.authenticationReducer.currentLog
  }),
  {
      setCurrentLogAction
  })
)(BarLinkComp);