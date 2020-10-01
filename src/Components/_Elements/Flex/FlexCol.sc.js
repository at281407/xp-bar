import styled from 'styled-components';

export const FlexCol = styled.div`
    display: flex;
    width: 100%;
    max-width: ${props => props.maxWidth || "100%" };
    flex-flow: column nowrap;
    font-size: ${props => props.fontSize || "auto"};
    margin: ${props => props.margin || "0"};
    justify-content: ${props => props.justifyContent || "center"};
    align-items: ${props => props.alignItems || "center"};
`;