import styled from 'styled-components';

export const Button = styled.button`
    width: ${props => props.width || "100%"};
    height: 40px;
    max-width: 300px;
    margin: 1em auto;
    color: #ffffff;
    font-size: 1em;
    font-weight: bold;
    border-radius: 5px;
    background-color: #ffc22a;
    border: 1px solid #ffc22a;
    margin: ${props => props.margin || "0 auto"}
`;