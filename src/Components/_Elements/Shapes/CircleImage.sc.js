import styled from 'styled-components';

export const CircleImage = styled.img`
    width: ${props => props.width || "92px"};
    height: ${props => props.height || "92px"};
    border-radius: 50%;
    background: grey;
    text-align: center;
`;