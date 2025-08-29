import styled from "styled-components";

export const TableWrapper = styled.div`
  min-height: 150px;
  border-radius: 25px;
  padding-bottom: 3rem;
`;

export const ResultTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  thead {
    display: none;
  }
  tbody {
    td {
      border: 1px solid darkgray;
      padding: 0.3rem;
      text-align: center;
    }
    tr:nth-child(1) td:nth-child(1),
    tr:nth-child(2) td:nth-child(1),
    tr:nth-child(3) td:nth-child(1),
    tr:nth-child(4) td:nth-child(1) {
      width: 2rem;
      color: white;
      font-weight: bold;
    }
    tr:nth-child(1) td:nth-child(2),
    tr:nth-child(2) td:nth-child(2),
    tr:nth-child(3) td:nth-child(2),
    tr:nth-child(4) td:nth-child(2) {
      text-align: left;
    }
    tr:nth-child(1) td:nth-child(4),
    tr:nth-child(2) td:nth-child(4),
    tr:nth-child(3) td:nth-child(4),
    tr:nth-child(4) td:nth-child(4) {
      width: 40px;
    }
    tr:nth-child(1) td:nth-child(1) {
      background-color: red;
    }
    tr:nth-child(2) td:nth-child(1) {
      background-color: blue;
    }
    tr:nth-child(3) td:nth-child(1) {
      background-color: white;
      color: black;
    }
    tr:nth-child(4) td:nth-child(1) {
      background-color: black;
    }
  }
`;

export const ParticipantTable = styled.table``;
