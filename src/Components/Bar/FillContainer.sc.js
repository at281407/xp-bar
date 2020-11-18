import styled from 'styled-components';

export const FillContainer = styled.div`
    position: relative;
    width: ${props => props.percent || "100%"};
    margin: 0 auto;
    height: 50px;
    border: 3px solid ${props => props.theme.borderColor};
    border-radius: 5px;
`;