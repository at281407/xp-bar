import styled from 'styled-components';
import {rem} from '../../Services/remConverter';

export const Header = styled.header`
    position: fixed;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    width: 100%;
    padding: ${rem(36)};
    max-width: 189px;
    height: calc(100vh - 72px);
    background-color: #fff;
    box-shadow: inset -2px 0px 2px rgba(51, 51, 51, 0.25);
    svg {
        max-width: 100%;
        height: auto;
    }
    nav {
        font-size: ${rem(16)};
        line-height: 19px;
        margin-top: ${rem(36)};
        font-weight: bold;
        color: #333333;
        cursor: pointer;
        a:hover,
        a:active {
            text-decoration: underline;
        }
    }
`;