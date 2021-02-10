import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactGA from "react-ga";
import { useHistory } from "react-router-dom";

import {ReactComponent as NatOne} from '../../Assets/images/nat-one.svg';
import {routes} from "../../Routes";

import {ViewWrapper} from '../_Elements/View.sc';
import { Box } from '../Modal/Box.sc';
import {H1} from '../_Elements/Fonts/Heading1.sc';
import { P } from '../_Elements/Fonts/Paragraph.sc';
import { Button } from '../_Elements/Form/Button.sc';

function NotFoundView(props) {

    useEffect(() => {
        ReactGA.pageview(window.location.pathname);
    })

    const history = useHistory();

    const handleClick = () => {
        history.push(routes.dashboard)
    }

    return (
        <ViewWrapper>
            <NotFound>
                <Box padding="25px" margin="0 10px" flexFlow="column nowrap">
                    <NatOne />
                    <H1>You attempt to find page...but get a 404!</H1>
                    <Button maxWidth="300px" margin="25px 0 25px 0" onClick={handleClick}>Go Home</Button>
                </Box>
            </NotFound>
        </ViewWrapper>
    )
}

const NotFound = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column nowrap;
    justify-content: center;
    align-items: center;
    background: url("/static/media/natural_paper.1fa5de4f.png");
`;

export default NotFoundView;