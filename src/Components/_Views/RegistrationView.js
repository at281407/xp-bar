import React, { Component } from 'react'
import {connect} from 'react-redux';
import styled from 'styled-components';
import axios from "axios";
import {routes} from "../../Routes";
import {validation} from '../../Services/validation';

import sideImage from '../../Assets/images/103-fafnir.png';
import backgroundText from '../../Assets/images/natural_paper.png';

import {toggleModalAction} from '../../Redux/actions/toggleModalAction';
import {setErrorsAction} from '../../Redux/actions/Authentication/setErrorsAction'; 
import {showErrorPopupAction} from '../../Redux/actions/Errors/showErrorPopupAction';

import BackArrow from '../BackArrow';
import {ViewWrapper} from '../_Elements/View.sc';
import { H1 } from '../_Elements/Fonts/Heading1.sc';
import { Form } from '../_Elements/Form/Form.sc';
import { P } from '../_Elements/Fonts/Paragraph.sc';
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

const SlantedDiv = styled(FlexCol)`
    &:before {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 0 25px 25px;
        border-color: transparent transparent #F8F8F8 transparent;
    }
`

const Title = styled.span`
    font-family: 'Girassol', cursive;
    font-size: 4rem;
    color: #f3f3f3;
    letter-spacing: 5px;
    margin: 30px 0;
`
const Description = styled(P)`
    margin: 30px 0 20px 0;
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

    validateRegistration = () => {
        let errors = [];
        const usernameCheck = validation["username"](this.state.username);
        if(usernameCheck.length > 0){
            errors.push(usernameCheck);
            this.setState({
                usernameError: usernameCheck
            })
        }
        const passwordCheck = validation["password"](this.state.password);
        if(passwordCheck.length > 0) {
            errors.push(passwordCheck);
            this.setState({
                passwordError: passwordCheck
            })
        }
        const emailCheck = validation["email"](this.state.email);
        if(emailCheck.length > 0){
            errors.push(emailCheck);
            this.setState({
                emailError: emailCheck
            });
        }
        console.log(errors);
        return errors.length > 0;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const hasErrors = this.validateRegistration();
        if(hasErrors) {
               return;
        }
        else {
            const newUser = {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            }

            axios.post("/api/users/register", newUser)
            .then(res => {
                if(res.data.Errors){
                    this.props.showErrorPopupAction(res.data.Errors)
                }
                else{
                    this.props.history.push(routes.signIn);
                }
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
        const backgroundImg = `url(${sideImage}) no-repeat left center fixed`;
        const backgroundTexture = `url(${backgroundText});`;
        return (
            <ViewWrapper background={backgroundTexture}>
                <FlexRow height="100%">
                    <SlantedDiv height="100%" maxWidth="50%" background={backgroundImg}>
                        <Title>SLAY MONSTERS</Title>
                        <Title>LOG YOUR DEEDS</Title>
                        <Title>LEVEL UP</Title>
                    </SlantedDiv>
                    <Registration>
                        <Box padding="25px" minWidth="500px">
                            <Form width="90%" padding="20px 0 25px 0" onSubmit={this.handleSubmit}>
                                <FlexRow justifyContent="flex-start">
                                    <BackArrow link="/"/>
                                </FlexRow>
                                <Error textAlign="center">{this.props.errors}</Error>
                                <H1>Register</H1>
                                <p>Create your account to get started.</p>
                                <FlexCol id="email" margin="0.25em 0">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        hasErrors={this.state.emailError.length > 0}
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
                                        hasErrors={this.state.usernameError.length > 0}
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
                                        hasErrors={this.state.passwordError.length > 0}
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
           
                </FlexRow>
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
        setErrorsAction,
        showErrorPopupAction
    }
)(RegistrationView);