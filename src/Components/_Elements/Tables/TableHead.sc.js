import styled from 'styled-components';

export const TableHead = styled.th`
   width: ${props => props.width || "auto"};
   padding: ${props => props.padding || "0 0 10px 0"};
   text-align: ${props => props.textAlign || "center"}
`;