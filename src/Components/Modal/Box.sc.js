import styled from 'styled-components';

export const Box = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: auto;
    background-color: #fff;
    border: 3px solid ${props => props.theme.borderColor};
    border-radius: 5px;
    z-index: 200;

`;