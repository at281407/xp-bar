import styled from 'styled-components';

export const FlexRow = styled.div`
    display: flex;
    width: 100%;
    flex-flow: row nowrap;
    margin: ${props => props.margin || "0"};
    justify-content: ${props => props.justifyContent || "center"};
    align-items: ${props => props.alignItems || "center"};
`;