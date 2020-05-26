import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Header from '../Header/index';
import XpBar from '../Bar/XpBar';
import Modal from '../Modal/index';

export default class BarView extends Component {

    render() {
        return (
            <>
                <Header />
                <XpBar />
                <Modal />
            </>
        )
    }
}
