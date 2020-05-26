import React, { Component } from 'react'
import {connect} from 'react-redux';

import {toggleModalAction} from '../../Redux/actions/toggleModalAction';


import Modal from '../Modal/'
import LogInModal from '../Modal/LoginModal';

class LoginView extends Component {

    componentDidMount() {
        this.props.toggleModalAction("login", true);
    }

    render() {
        return (
            <Modal />
        )
    }
}

export default connect(
    (state) => ({
        // STate
    }),
    {
        toggleModalAction
    }
)(LoginView);