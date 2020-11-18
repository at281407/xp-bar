import styled from 'styled-components';

export const Box = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: ${props => props.width ? props.width : "auto"};
    max-width: ${props => props.maxWidth || "none"};
    min-width: ${props => props.minWidth ? props.minWidth : "0px"};
    height: auto;
    background-color: #fff;
    border: 3px solid ${props => props.theme.borderColor};
    border-radius: 5px;
    padding: ${props => props.padding ? props.padding : "0"};
    z-index: 200;

`;