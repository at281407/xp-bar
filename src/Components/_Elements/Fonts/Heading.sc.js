import styled from 'styled-components';

export const Heading = styled.h1`
    font-size: 20px;
    width: ${props => props.width || "100%"};
    text-align: ${props => props.textAlign || "left"};
    margin: ${props => props.margin || "0 auto"};
`;