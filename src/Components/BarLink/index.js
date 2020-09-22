import React, { Component } from 'react'
import {connect} from 'react-redux';
import {routes} from "../../Routes";
import { compose } from 'redux'
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import {rem} from '../../Services/remConverter';

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
    barLink: ""
  }
  
  handleCopy = e => {
    const link = this.barLinkRef.current;
    console.log(link);
    link.select();
    link.setSelectionRange(0,99999);
    document.execCommand("copy");
  }

  generateLink = () => {
    this.setState({
      barLink: "https://www.dndxpbar.com/xpbar/" + this.props.log._id
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
            <a ref={this.barLinkRef} href={this.state.barLink} target="_blank">{this.state.barLink}</a>
            <Button onClick={this.handleCopy}>Copy</Button>
          </FlexRow>
        </BarLink>
    )
  }
}

export const BarLink = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    margin-top: 20px;
    a {
        max-width: calc(70% - 70px);
        margin: 0 16px 0 0;
        border: 3px solid #e7e7e7;
        border-radius: 3px;
        padding: 9px 18px;
        overflow-x: hidden;
    }
    button {
        max-width: 70px;
        margin: 0;
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