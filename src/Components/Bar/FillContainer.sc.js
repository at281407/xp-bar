import styled from 'styled-components';

export const FillContainer = styled.div`
    width: ${props => props.percent || "80%"};
    margin: 0 auto;
    height: 100%;
    border: 3px solid rgba(241,231,103,1);
    border-image: url('/images/gold.jpg') 30;
    border-radius: 25px;
`;