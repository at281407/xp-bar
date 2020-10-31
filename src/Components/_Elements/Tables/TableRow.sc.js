import styled from 'styled-components';

export const TableRow = styled.tr`
    padding: ${props => props.padding || "0"};
    background-color: ${props => props.backgroundColor || "none"};
    &:last-child {
        td{
            border-bottom: none;
        }
    }
`;

