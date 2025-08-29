// import { useState } from "react";
// import { useLoaderData } from "react-router-dom";
import { Wrapper } from "../styles/styled_components/Wrappers";
// import { LiveResultsResponse } from "../api/LiveResultsResponse";
import { ParticipantTable } from "../styles/styled_components/Tables";

export const DeltagarlistaHanar = () => {
  // const [data] = useState(useLoaderData() as LiveResultsResponse);

  // const hanar = data.omgangar.flatMap((omgang) =>
  //   omgang.heat.flatMap((heat) =>
  //     heat.starter
  //       .filter((start) => start.kon === "H")
  //       .map((start) => start.hundNamn)
  //   )
  // );

  // const sorteradeHanar = [...new Set(hanar)].sort((a, b) =>
  //   a.localeCompare(b, "sv")
  // );

  // console.log(sorteradeHanar);

  return (
    <Wrapper>
      <h1>Deltagarlista Hanar</h1>
      <ParticipantTable>
        <thead>
          <tr>
            <td>Namn</td>
            <td>Försök 1</td>
            <td>Försök 2</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Namn</td>
            <td>1R</td>
            <td>2B</td>
          </tr>
        </tbody>
      </ParticipantTable>
    </Wrapper>
  );
};
