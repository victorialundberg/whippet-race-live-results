import { Starter } from "../api/LiveResultsResponse";

interface StartProps {
  starts: Starter;
}

export const Start = (props: StartProps) => {
  return (
    <tr>
      <td>{props.starts.farg}</td>
      <td>{props.starts.hundNamn}</td>
      <td>{props.starts.placering}</td>
      <td>{props.starts.tid}</td>
    </tr>
  );
};
