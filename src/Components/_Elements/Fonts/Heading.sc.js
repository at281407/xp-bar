import styled from 'styled-components';

export const Heading = styled.h1`
    color: ${props => props.theme.borderColor};
    font-size: 40px;
    width: ${props => props.width || "100%"};
    text-align: ${props => props.textAlign || "center"};
    margin: ${props => props.margin || "0 auto"};
    b {
        font-weight: bold;
    }
`;