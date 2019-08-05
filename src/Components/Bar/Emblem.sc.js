import styled from 'styled-components';

export const Emblem = styled.div`
    width: 100px;
    height: 100px;
    background-image: url(${props => props.theme.emblem});
    background-repeat: no-repeat;
  background-position: center;
    margin: 0 auto;
`;