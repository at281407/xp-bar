import styled from 'styled-components';

import { Button } from '../_Elements/Form/Button.sc';

const XpTable = styled.table`
  width: 80%;
  height: auto;
  border-collapse: collapse
  td,th, {
    border: 1px solid rgba(0,0,0,0.5);
    border-collapse: collapse;
  }

  th,td,tr {
    border-top:  1px solid rgba(0,0,0,0.25);
    padding: 5px;
  }

  p {
    margin: 0;
  }
`;

var colOneWidth = "15%";
var colTwoWidth = "75%";
var colThreeWidth = "10%"

const Row = styled.tr`
    th, td{
      &:nth-child(1){ 
        width: ${colOneWidth};
        text-align: center; 
      }
      &:nth-child(2){ 
        ${colThreeWidth} 
        text-align: left;
        input {
          text-align: left;
        }
      }
      &:nth-child(3){ 
        width: ${colThreeWidth};
        border-bottom-style: hidden;
        border-top-style: hidden;
        border-right-style: hidden;
        border-left-style: hidden;
        //visibility: hidden; 
      }   
    } 
`;

const Head = styled.th`

`;

const Data = styled.td`
    input {
      width: calc(100% - 5px);
      text-align: center;
    }
`;

XpTable.Row = Row;
XpTable.Head = Head;
XpTable.Data = Data;
XpTable.AddButton = Button;

export default XpTable;

