import styled from 'styled-components';

export const Svg = styled.svg`
    margin: ${props => props.margin || "0 auto"};
    display: ${props => props.display || "block"}; 
    mask: ${props => props.mask || "none"};
    #path12357{
        mask: url('/images/gold.jpg') no-repeat 100% 100%;;
    }
`;