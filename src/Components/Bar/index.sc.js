import styled from 'styled-components';

import {FillContainer} from './FillContainer.sc';
import {CurrXp} from './CurrXp.sc';
import {Fill} from './Fill.sc';
import { Heading } from '../_Elements/Fonts/Heading.sc';

export const Bar = styled.div`
    width: 100%;
    height: 50px;
`;

Bar.Level = Heading
Bar.FillContainer = FillContainer;
Bar.CurrXp = CurrXp;
Bar.Fill = Fill;