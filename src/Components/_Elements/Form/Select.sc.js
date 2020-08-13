import styled from 'styled-components';

export const Select = styled.select`
    width: ${props => props.width || "calc(100% - 3px)"};
    height: 38px;
    margin: ${props => props.margin || "0"};
    color: #333333;
    border: 3px solid #e7e7e7;
    border-radius: 3px;
`;