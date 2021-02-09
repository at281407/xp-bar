import styled from 'styled-components';
import {rem} from '../../../Services/remConverter';

export const H1 = styled.h1`
     font-family: 'Girassol', cursive;
    color: ${props => props.theme.baseFontColor};
    font-size: ${rem('32px')};
    width: ${props => props.width || "auto"};
    text-align: ${props => props.textAlign || "center"};
    margin: ${props => props.margin || "0"};
    b {
        font-weight: bold;
    }
`;