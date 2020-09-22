import styled from 'styled-components';
import {TableHead} from "./TableHead.sc";
import {TableRow} from "./TableRow.sc";
import {TableCell} from "./TableCell.sc";

export const Table = styled.table`
    width: 100%;
`;

Table.Head = TableHead;
Table.Row = TableRow;
Table.Cell = TableCell;