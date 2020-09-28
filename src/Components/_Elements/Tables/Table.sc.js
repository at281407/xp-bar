import styled from 'styled-components';
import {TableBody} from "./TableBody.sc";
import {TableHead} from "./TableHead.sc";
import {TableHeader} from "./TableHeader.sc";
import {TableRow} from "./TableRow.sc";
import {TableData} from "./TableData.sc";

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin: ${props => props.margin || "0"};
    th, td {
        &::nth-child(1) { 
            text-align: left;
            width: 65%;
        }
    }
`;

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Head = TableHead;
Table.Row = TableRow;
Table.Data = TableData;