import styled from 'styled-components';

export const Emblem = styled.div`
    position: relative;
    width: 100px;
    height: 100px;
    top: 14.5px;
    background-image: url(${props => props.theme.emblem});
    background-repeat: no-repeat;
    background-position: center;
    margin: 0 auto;
    z-index: 100;
`;