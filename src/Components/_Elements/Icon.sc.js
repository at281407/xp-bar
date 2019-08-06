import styled from 'styled-components';

export const SvgIcon = styled.img`
    width: ${props => props.width || "auto"};
    height: ${props => props.height || "auto"};
    margin: ${props => props.margin || "0"};
    padding: ${props => props.padding || "0"};
    display: ${props => props.display || "block"};
    .fas {
        color: black;
    }
`;