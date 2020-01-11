import styled from 'styled-components';

export const Input = styled.input`
    width: ${props => props.width || "calc(100% - 3px)"};
    height: 30px;
    margin: ${props => props.margin || "0"};
    color: #333333;
    border: 3px solid #e7e7e7;
    border-radius: 3px;
`;