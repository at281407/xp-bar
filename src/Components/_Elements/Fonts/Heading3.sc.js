import styled from 'styled-components';
import {rem} from '../../../Services/remConverter';

export const H3 = styled.h3`
    color: ${props => props.theme.baseFontColor};
    font-size: ${rem('18.72px')};
    width: ${props => props.width || "100%"};
    text-align: ${props => props.textAlign || "center"};
    margin: ${props => props.margin || "0 auto"};
    b {
        font-weight: bold;
    }
`;