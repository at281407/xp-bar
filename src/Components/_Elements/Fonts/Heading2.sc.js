import styled from 'styled-components';
import {rem} from '../../../Services/remConverter';

export const H2 = styled.h2`
    color: ${props => props.theme.baseFontColor};
    font-size: ${rem('24px')};
    width: ${props => props.width || "100%"};
    text-align: ${props => props.textAlign || "center"};
    margin: ${props => props.margin || "0 auto"};
    b {
        font-weight: bold;
    }
`;