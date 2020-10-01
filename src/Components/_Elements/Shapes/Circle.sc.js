import styled from 'styled-components';

export const Circle = styled.div`
    width: ${props => props.width || "92px"};
    height: ${props => props.height || "92px"};
    position: ${props => props.position || "relative"};
    top: ${props => props.top || "auto"};
    margin: ${props => props.margin || "0"};
    display: ${props => props.display || "flex"};
    opacity: ${props => props.opacity || "100%"};
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: ${props => props.fontSize || "48px"};
    background-color: ${props => props.backgroundColor || "#7F54A5"};
    color: ${props => props.color || "#fff"};
    border: ${props => props.border || "2px solid #7F54A5"};
    text-align: center;
    z-index: ${props => props.zIndex || "0"};
    cursor: ${props => props.cursor || "pointer"};
    svg {
        cursor: ${props => props.cursor || "pointer"};
    }
`;