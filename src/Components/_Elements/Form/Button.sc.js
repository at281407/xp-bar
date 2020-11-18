import styled from 'styled-components';

export const Button = styled.button`
    width: ${props => props.width || "100%"};
    max-width: ${props => props.maxWidth || "100%"};
    height: 40px;
    margin: 1em auto;
    color: #ffffff;
    font-size: 1em;
    font-weight: bold;
    border-radius: 5px;
    background-color: #7F54A5;
    cursor: pointer;
    border: 1px solid #7F54A5;
    margin: ${props => props.margin || "0 auto"};
    &:disabled {
        background-color: grey;
        border: grey;
        cursor: default;
    }
`;