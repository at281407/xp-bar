import styled from 'styled-components';

export const Circle = styled.div`
    width: ${props => props.width || "92px"};
    height: ${props => props.height || "92px"};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 48px;
    background-color: ${props => props.backgroundColor || "#7F54A5"};
    color: ${props => props.color || "#fff"};
    border: ${props => props.border || "2px solid #7F54A5"};
    text-align: center;
    cursor: pointer;
`;