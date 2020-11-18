import React, { Component } from 'react'
import PropTypes from 'prop-types'

import backgroundImg from "../../Assets/images/20-ymir-1920-1080-2.png"

import Header from '../Header/index';
import XpBar from '../Bar/XpBar';
import Modal from '../Modal/index';
import {ViewWrapper} from '../_Elements/View.sc';

export default class BarView extends Component {

    render() {
        const background = `url(${backgroundImg}) no-repeat center center fixed`;
        return (
            <ViewWrapper
            background={background}>
                <XpBar />
                <Modal />
            </ViewWrapper>
        )
    }
}
