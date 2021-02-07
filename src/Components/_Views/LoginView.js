import React, { Component } from 'react'
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import axios from "axios";
import {routes} from "../../Routes";
import {setAuthToken} from '../../Services/setAuthToken'

import sideImage from '../../Assets/images/103-fafnir.png';
import backgroundText from '../../Assets/images/natural_paper.png';
import {ReactComponent as Logo} from '../../Assets/images/dndxpbar_logox2.svg';
import ReactGA from "react-ga";

import {toggleModalAction} from '../../Redux/actions/toggleModalAction';
import {setCurrentUserAction} from '../../Redux/actions/Authentication/setCurrentUserAction';
import {setErrorsAction} from '../../Redux/actions/Authentication/setErrorsAction'; 
import {setIsLoadingAction} from '../../Redux/actions/Loading/setIsLoadingAction';
import {showErrorPopupAction} from '../../Redux/actions/Errors/showErrorPopupAction';

import {ViewWrapper} from '../_Elements/View.sc';
import { P } from '../_Elements/Fonts/Paragraph.sc';
import { Form } from '../_Elements/Form/Form.sc';
import { FlexRow } from '../_Elements/Flex/FlexRow.sc';
import { Box } from '../Modal/Box.sc';
import { Input } from '../_Elements/Form/Input.sc';
import { FlexCol } from '../_Elements/Flex/FlexCol.sc';
import { Label } from '../_Elements/Form/Label.sc';
import { Button } from '../_Elements/Form/Button.sc';
import { Error } from '../_Elements/Form/Error.sc';

const Login = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 50;
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
        this.props.setIsLoadingAction(true);
        e.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password
        }

        axios.post("/api/users/login", user)
          .then(res => {
              if(res.data.Errors){
                  this.props.showErrorPopupAction(res.data.Errors);
                  this.props.setIsLoadingAction(false);
              }
              else {
                const token = res.data.token;
                localStorage.setItem("token", res.data.token);
                // Set token to Auth header
                setAuthToken(token);
                // Set current user
                this.props.history.push(routes.dashboard);
              }
          }) // re-direct to login on successful register
          .catch(err => {
                this.props.showErrorPopupAction([err.Errors])
                this.props.setIsLoadingAction(false);
            }
          );
    }

    componentDidMount() {
        
        ReactGA.pageview(window.location.pathname);
        console.log("Page view ", window.location.pathname);

        if(localStorage.getItem("token")){
            this.props.history.push(routes.dashboard);
        }
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
                    <SlantedDiv>
                        <Login>
                            <Box padding="35px" maxWidth="425px">
                                <Form width="90%" max-width="420px" padding="20px 0 25px 0" onSubmit={this.handleSubmit}>
                                    <Error textAlign="center">{this.props.errors}</Error>
                                    <Logo  width="60%" margin="0" />
                                    <Description>Sign In to create an XP Bar for your game and share it with your party.</Description>
                                    <FlexCol id="username" margin="0.5em 0">
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
                                    <Button margin="20px 0 0 0" onClick={this.handleSubmit}>Sign In</Button>
                                    <P margin="30px 0 0 0">Need an account? <Link to={routes.registration}>Register to get started!</Link></P>
                                </Form>
                            </Box>
                        </Login>
                    </SlantedDiv> 
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
        setCurrentUserAction,
        setErrorsAction,
        setIsLoadingAction,
        showErrorPopupAction
    }
)(LoginView);