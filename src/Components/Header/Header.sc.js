import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    width: 100%;
    padding: 36px;
    max-width: 189px;
    height: calc(100vh - 72px);
    background-color: #fff;
    box-shadow: inset -2px 0px 2px rgba(51, 51, 51, 0.25);
    svg {
        max-width: 100%;
    }
    nav {
        font-size: 16px;
        line-height: 19px;
        margin-top: 26px;
        font-weight: bold;
        color: #333333;
        cursor: pointer;
        a:hover,
        a:active {
            text-decoration: underline;
        }
    }
`;