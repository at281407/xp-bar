import styled from 'styled-components';
import { Overlay } from './Overlay.sc';
import { Box } from './Box.sc';

import {animations} from "../_Variables/animations.sc"

export const Modal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    transition: visibility ${animations.fadeIn.time} linear;
    animation: ${props => props.isVisible ? animations.fadeIn.keyframes : animations.fadeOut.keyframes} ${animations.fadeIn.time} linear;
    visibility: ${props => props.isVisible ? "visible" : "hidden"};
`;

Modal.Overlay = Overlay
Modal.Box = Box