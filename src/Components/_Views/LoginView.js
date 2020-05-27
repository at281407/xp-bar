import React, { Component } from 'react'
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

import {toggleModalAction} from '../../Redux/actions/toggleModalAction';

import {ViewWrapper} from '../_Elements/View.sc';
import { Heading } from '../_Elements/Fonts/Heading.sc';
import { Form } from '../_Elements/Form/Form.sc';
import { FlexRow } from '../_Elements/Flex/FlexRow.sc';
import { Box } from '../Modal/Box.sc';
import { Input } from '../_Elements/Form/Input.sc';
import { FlexCol } from '../_Elements/Flex/FlexCol.sc';
import { Label } from '../_Elements/Form/Label.sc';
import { Button } from '../_Elements/Form/Button.sc';
import { Quote } from '../_Elements/Fonts/Quote.sc';

const Login = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

class LoginView extends Component {
    
    state = {
        username: "",
        password: ""
    }

    handleClose = () => {
        this.props.toggleModalAction(null, false);
    }

    handleClick = () => {
        alert(this.state.username);
    }

    handleInputChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    componentDidMount() {
        this.props.toggleModalAction("login", true);
    }

    render() {
        return (
            <ViewWrapper background="linear-gradient(to left, rgb(142, 45, 226), rgb(74, 0, 224))">
                <Login>
                    <Box padding="25px">
                        <Form width="90%" padding="20px 0 25px 0" onSubmit={this.handleSubmit}>
                        <FlexRow>
                            {/*<Close margin="1em 0 0 auto" width="20px" height="20px" padding="5px" onClick={this.handleClose} />*/}
                        </FlexRow>
                        <Heading>Sign In</Heading>
                        <p>Log In to create your own XP Bar for D&D 5e.</p>
                        <FlexCol id="username" margin="0.25em 0">
                            <Label htmlFor="username">Username</Label>
                            <Input
                                id="username"
                                name="username"
                                type="input"
                                value={this.state.username}
                                onChange={(e) => this.setState({
                                    username: e.target.value
                                })}
                            />
                        </FlexCol>
                        <FlexCol id="password" margin="0.25em 0">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                value={this.state.password}
                                onChange={(e) => this.setState({
                                    password: e.target.value
                                })}
                            />
                        </FlexCol>
                        <Button margin="20px 0 0 0">Sign In</Button>
                        <p>Or, <Link to="/register">Register to get started!</Link></p>
                    </Form>
                    </Box>
                </Login>
            </ViewWrapper>
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