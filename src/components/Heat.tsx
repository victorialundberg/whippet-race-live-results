import { Heat as HeatType, Omgang } from "../api/LiveResultsResponse";
import { TableWrapper, ResultTable } from "../styles/styled_components/Tables";
import { Start } from "./Start";

interface RoundProps {
  round: Omgang;
  heat: HeatType;
}

export const Heat = (props: RoundProps) => {
  return (
    <TableWrapper>
      <h4>
        {props.heat.nr ? `Heat ${props.heat.nr}` : `${props.heat.klass}-Final`}{" "}
        {props.heat.klass &&
          props.round.namn === "Semifinal" &&
          ` - Klass ${props.heat.klass}`}
      </h4>
      <ResultTable>
        <thead>
          <tr>
            <th>Färg</th>
            <th>Namn</th>
            <th>Placering</th>
            <th>Tid</th>
          </tr>
        </thead>
        <tbody>
          {props.heat.starter.map((start, i) => (
            <Start starts={start} key={i}></Start>
          ))}
        </tbody>
      </ResultTable>
    </TableWrapper>
  );
};
