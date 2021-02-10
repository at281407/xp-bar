import React, { Component } from 'react'
import styled from 'styled-components';
import {connect} from 'react-redux';

import {toggleModalAction} from '../../Redux/actions/toggleModalAction';


export const Loading = styled.div`
    position: fixed;
    display: ${props => props.isLoading ? "flex" : "none"};
    visibility: visible;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    z-index: 1000;
`;

class LoadingComp extends Component {

  handleIsLoading = () => {
      if(this.props.static){
          return true;
      }
      else {
          return this.props.isLoading;
      }
  }

  render () {
    return (
        <Loading isLoading={this.handleIsLoading()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="150px" height="150px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
              <path d="M20 25L80 25L80 75L20 75Z" fill="#a683c5" stroke="#65368e" strokeWidth="2"></path><path d="M50 25L80 25L80 75L50 75" fill="#a683c5" stroke="#65368e" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
                <animate attributeName="d" dur="1s" repeatCount="indefinite" begin="0s" keyTimes="0;0.5;0.501;1" values="M50 25L80 25L80 75L50 75;M50 25L50 20L50 80L50 75;M50 25L80 25L80 75L50 75;M50 25L80 25L80 75L50 75"></animate>
                <animate attributeName="opacity" dur="1s" repeatCount="indefinite" begin="0s" keyTimes="0;0.5;0.5001;1" values="1;1;0;0"></animate>
              </path><path d="M50 25L80 25L80 75L50 75" fill="#a683c5" stroke="#65368e" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
                <animate attributeName="d" dur="1s" repeatCount="indefinite" begin="-0.166s" keyTimes="0;0.5;0.501;1" values="M50 25L80 25L80 75L50 75;M50 25L50 20L50 80L50 75;M50 25L80 25L80 75L50 75;M50 25L80 25L80 75L50 75"></animate>
                <animate attributeName="opacity" dur="1s" repeatCount="indefinite" begin="-0.166s" keyTimes="0;0.5;0.5001;1" values="1;1;0;0"></animate>
              </path><path d="M50 25L80 25L80 75L50 75" fill="#a683c5" stroke="#65368e" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
                <animate attributeName="d" dur="1s" repeatCount="indefinite" begin="-0.33s" keyTimes="0;0.5;0.501;1" values="M50 25L80 25L80 75L50 75;M50 25L50 20L50 80L50 75;M50 25L80 25L80 75L50 75;M50 25L80 25L80 75L50 75"></animate>
                <animate attributeName="opacity" dur="1s" repeatCount="indefinite" begin="-0.33s" keyTimes="0;0.5;0.5001;1" values="1;1;0;0"></animate>
              </path><path d="M50 25L80 25L80 75L50 75" fill="#a683c5" stroke="#65368e" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
                <animate attributeName="d" dur="1s" repeatCount="indefinite" begin="-0.33s" keyTimes="0;0.499;0.5;1" values="M50 25L20 25L20 75L50 75;M50 25L20 25L20 75L50 75;M50 25L50 20L50 80L50 75;M50 25L20 25L20 75L50 75"></animate>
                <animate attributeName="opacity" dur="1s" repeatCount="indefinite" begin="-0.33s" keyTimes="0;0.4999;0.5;1" values="0;0;1;1"></animate>
              </path><path d="M50 25L80 25L80 75L50 75" fill="#a683c5" stroke="#65368e" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
                <animate attributeName="d" dur="1s" repeatCount="indefinite" begin="-0.166s" keyTimes="0;0.499;0.5;1" values="M50 25L20 25L20 75L50 75;M50 25L20 25L20 75L50 75;M50 25L50 20L50 80L50 75;M50 25L20 25L20 75L50 75"></animate>
                <animate attributeName="opacity" dur="1s" repeatCount="indefinite" begin="-0.166s" keyTimes="0;0.4999;0.5;1" values="0;0;1;1"></animate>
              </path><path d="M50 25L80 25L80 75L50 75" fill="#a683c5" stroke="#65368e" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
                <animate attributeName="d" dur="1s" repeatCount="indefinite" begin="0s" keyTimes="0;0.499;0.5;1" values="M50 25L20 25L20 75L50 75;M50 25L20 25L20 75L50 75;M50 25L50 20L50 80L50 75;M50 25L20 25L20 75L50 75"></animate>
                <animate attributeName="opacity" dur="1s" repeatCount="indefinite" begin="0s" keyTimes="0;0.4999;0.5;1" values="0;0;1;1"></animate>
              </path>
            </svg>
        </Loading>
    )
  }
}

export default connect(
  (state) => ({
    isLoading: state.loadingReducer.isLoading
  }),
  {
    toggleModalAction
  }
)(LoadingComp);