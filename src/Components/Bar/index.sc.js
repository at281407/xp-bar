import styled from 'styled-components';

import {FillContainer} from './FillContainer.sc';
import {CurrXp} from './CurrXp.sc';
import {Fill} from './Fill.sc';
import { Heading } from '../_Elements/Fonts/Heading.sc';

export const Bar = styled.div`
    top: calc(50% - 50px);
    width: 80%;
    margin: 0 auto;
`;

Bar.Level = Heading
Bar.FillContainer = FillContainer;
Bar.CurrXp = CurrXp;
Bar.Fill = Fill;