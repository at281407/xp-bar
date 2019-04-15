import styled from 'styled-components';

export const Quote = styled.q`
    font-size: 1em;
    width: ${props => props.width || "100%"};
    text-align: ${props => props.textAlign || "left"};
    margin: ${props => props.margin || "0 auto"};
`;