import styled from 'styled-components';

export const Error = styled.span`
    width: 100%;
    color: red;
    text-align: ${props => props.textAlign ? props.textAlign : "left"};
`;