import styled from 'styled-components';
import gold from '../../Assets/images/gold.jpg';

export const Svg = styled.svg`
    margin: ${props => props.margin || "0 auto"};
    display: ${props => props.display || "block"}; 
    mask: ${props => props.mask || "none"};
    #path12357{
        mask: url(${gold}) no-repeat 100% 100%;;
    }
`;