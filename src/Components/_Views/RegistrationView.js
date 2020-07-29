import React, { Component } from 'react'
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import axios from "axios";
import {routes} from "../../Routes";
import {validation} from '../../Services/validation';

import {toggleModalAction} from '../../Redux/actions/toggleModalAction';
import {setErrorsAction} from '../../Redux/actions/Authentication/setErrorsAction'; 

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
import { Error } from '../_Elements/Form/Error.sc';


const Registration = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

class RegistrationView extends Component {
    
    state = {
        email: "",
        emailError: "",
        username: "",
        usernameError: "",
        password: "",
        passwordError: "",
        showFieldErrors: false
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
        if(this.state.emailError.length > 0 || 
           this.state.usernameError.length > 0 ||
           this.state.passwordError.length > 0) {

        }
        else {
            const newUser = {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            }

            axios.post("/api/users/register", newUser)
            .then(res => {
                alert("Registration Success!");
                this.props.history.push(routes.signIn);
            }) // re-direct to login on successful register
            .catch(err =>
                this.props.setErrorsAction(err)
            );
        }
    }

    componentDidMount() {
        if(localStorage.getItem("token")){
            this.props.history.push(routes.dashboard);
        }
    }

    handleChange=  (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleBlur = (e) => {
        let errors = validation[e.target.name](e.target.value);
        
        let stateKey = e.target.name + "Error";
        this.setState({
            [stateKey]: errors 
        })
    }

    handleErrors = () => {
        this.props.errors.forEach(error => {
            console.log(error);
            return error;
        })
    }
    render() {
        return (
            <ViewWrapper background="linear-gradient(to left, rgb(142, 45, 226), rgb(74, 0, 224))">
                <Registration>
                    <Box padding="25px">
                        <Form width="90%" padding="20px 0 25px 0" onSubmit={this.handleSubmit}>
                            <FlexRow justifyContent="flex-start">
                                <Link to="sign-in">Back</Link>
                            </FlexRow>
                            <Error textAlign="center">{this.props.errors}</Error>
                            <Heading>Register</Heading>
                            <p>Create your account to get started.</p>
                            <FlexCol id="email" margin="0.25em 0">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    onBlur={this.handleBlur}
                                />
                                <Error showError={this.state.showFieldErrors}>{this.state.emailError}</Error>
                            </FlexCol>
                            <FlexCol id="username" margin="0.25em 0">
                                <Label htmlFor="username">Username</Label>
                                <Input
                                    id="username"
                                    name="username"
                                    type="input"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                    onBlur={this.handleBlur}
                                />
                                <Error showError={this.state.showFieldErrors}>{this.state.usernameError}</Error>
                            </FlexCol>
                            <FlexCol id="password" margin="0.25em 0">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    onBlur={this.handleBlur}
                                />
                                <Error showError={this.state.showFieldErrors}>{this.state.passwordError}</Error>
                            </FlexCol>
                            <Button margin="20px 0 0 0" onSubmit={this.handleSubmit}>Register</Button>
                        </Form>
                    </Box>
                </Registration>
            </ViewWrapper>
        )
    }
}

export default connect(
    (props) => ({
        errors: props.authenticationReducer.errors
    }),
    {
        toggleModalAction,
        setErrorsAction
    }
)(RegistrationView);