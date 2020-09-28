import styled from 'styled-components';

export const TableData = styled.td`
    width: ${props => props.width || "auto"};
    border-top: ${props => props.border || "1px solid black"};
    border-bottom: ${props => props.border || "1px solid black"};
    text-align: ${props => props.textAlign || "center"};
    padding: ${props => props.padding || "0"};
`;