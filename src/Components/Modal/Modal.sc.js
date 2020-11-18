import styled from 'styled-components';
import {animations} from "../_Variables/animations.sc"

import { Overlay } from './Overlay.sc';
import { Box } from './Box.sc';
import { Form } from '../_Elements/Form/Form.sc';
import { FlexRow } from '../_Elements/Flex/FlexRow.sc';
import { SvgIcon } from '../_Elements/Icon.sc';
import { Input } from '../_Elements/Form/Input.sc';
import { FlexCol } from '../_Elements/Flex/FlexCol.sc';
import { Label } from '../_Elements/Form/Label.sc';
import { Button } from '../_Elements/Form/Button.sc';
import { Quote } from '../_Elements/Fonts/Quote.sc';
import { Select } from '../_Elements/Form/Select.sc';

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
    z-index: 100;
    font-family: gris
`;

const ModalHeading = styled.h1`
    font-family: 'Girassol', cursive;
    font-size: 2.4rem;
    text-align: center;
    margin: 0.25em 0px;
    line-height: 2.5rem;
`

Modal.Overlay = Overlay
Modal.Box = Box
Modal.Close = SvgIcon
Modal.Icon = SvgIcon
Modal.H1 = ModalHeading
Modal.Quote = Quote;
Modal.Form = Form;
Modal.FormRow = FlexRow;
Modal.FieldGroup = FlexCol;
Modal.Input = Input;
Modal.Select = Select;
Modal.Label = Label;
Modal.Button = Button;