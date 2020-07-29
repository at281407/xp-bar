import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Header from '../Header/index';
import XpBar from '../Bar/XpBar';
import Modal from '../Modal/index';
import {ViewWrapper} from '../_Elements/View.sc';

export default class BarView extends Component {

    render() {
        return (
            <ViewWrapper
            background="rgba(0,0,0,0)">
                <XpBar />
                <Modal />
            </ViewWrapper>
        )
    }
}
