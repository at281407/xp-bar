import styled from 'styled-components';

export const Fill = styled.div`
    width: ${props => props.percent || "0"};
    height: 100%;
    background: linear-gradient(to left, rgb(142, 45, 226), rgb(74, 0, 224));
    -webkit-transition: width 2s; /* For Safari 3.1 to 6.0 */
    transition: width 1s
    ${props => !props.isReseting ? `
        -webkit-transition: width 2s; /* For Safari 3.1 to 6.0 */
         transition: width 1s
    ` : `
         -webkit-transition: width 0s; /* For Safari 3.1 to 6.0 */
         transition: width 0s
    `}
`;