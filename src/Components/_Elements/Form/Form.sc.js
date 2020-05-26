import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    width: ${props => props.width || "100%"};
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: ${props => props.padding ? props.padding : 0}
`;