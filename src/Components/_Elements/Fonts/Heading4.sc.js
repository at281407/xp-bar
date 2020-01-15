import styled from 'styled-components';

export const Heading4 = styled.h4`
    display: flex;
    min-height: 100%;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    width: ${props => props.width || "auto"};
    text-align: center;
    margin: ${props => props.margin || "0 auto"};
`;