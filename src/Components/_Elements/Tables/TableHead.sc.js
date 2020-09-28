import styled from 'styled-components';

export const TableHead = styled.th`
   width: ${props => props.width || "auto"};
   text-align: ${props => props.textAlign || "center"}
`;