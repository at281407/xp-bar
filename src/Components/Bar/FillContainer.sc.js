import styled from 'styled-components';
import gold from '../../Assets/images/gold.jpg';

export const FillContainer = styled.div`
    width: ${props => props.percent || "80%"};
    margin: 0 auto;
    height: 101%;
    border: 3px solid rgba(241,231,103,1);
    border-image: url(${gold}) 30;
`;