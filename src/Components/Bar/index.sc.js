import styled from 'styled-components';

import {FillContainer} from './FillContainer.sc';
import {CurrXp} from './CurrXp.sc';
import {Fill} from './Fill.sc';
import { H1 } from '../_Elements/Fonts/Heading1.sc';

export const Bar = styled.div`
    width: 80%;
    margin: 100px auto 0 auto;
    font-family: 'Girassol', cursive;
`;

const BarHeading = styled.h1`
    color: rgb(255, 193, 12);
    font-size: 40px;
    width: 100%;
    text-align: center;
    margin: 0px auto;
`

Bar.Level = BarHeading
Bar.FillContainer = FillContainer;
Bar.CurrXp = CurrXp;
Bar.Fill = Fill;