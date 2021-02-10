import React, { Component } from 'react'
import ReactGA from "react-ga";

import backgroundImg from "../../Assets/images/20-ymir-1920-1080-2.png"

import XpBar from '../Bar/XpBar';
import Modal from '../Modal/index';
import {ViewWrapper} from '../_Elements/View.sc';

export default class BarView extends Component {

    componentDidMount(){
        ReactGA.pageview(window.location.pathname);
    }

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
