import React, { Component } from 'react'
import {connect} from 'react-redux';

import Header from './Components/Header/index';
import XpBar from './Components/Bar/XpBar';
import Modal from './Components/Modal/index';

class XpDashboard extends Component {
  render () {
    return (
        <React.Fragment>
            <Header />
            <XpBar />
            {this.props.isActive ? <Modal /> : null}
        </React.Fragment>
    )
  }
}

export default connect(
    (state) => ({
        isActive: state.modalReducer.isActive,
    }),
    {
        // Map actions/middleware to props
    }
)(XpDashboard);