import { Omgang } from "../api/LiveResultsResponse";
import { Heat } from "./Heat";

interface RoundProps {
  round: Omgang;
}

export const Round = (props: RoundProps) => {
  return (
    <div>
      <h3>
        {props.round.kon} {props.round.namn}
      </h3>
      {props.round.heat.map((heat, j) => (
        <Heat round={props.round} heat={heat} key={j}></Heat>
      ))}
    </div>
  );
};
