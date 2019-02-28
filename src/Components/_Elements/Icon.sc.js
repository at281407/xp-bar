import styled from 'styled-components';

export const SvgIcon = styled.img`
    margin: ${props => props.margin || "0"};
    display: ${props => props.display || "block"};
    .fas {
        color: black;
    }
`;