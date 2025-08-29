import { useEffect, useRef, useState } from "react";
import { LiveResultsResponse } from "../api/LiveResultsResponse";
import { useLoaderData } from "react-router-dom";
import { Wrapper } from "../styles/styled_components/Wrappers";
import { getLiveResults } from "../api/LiveResultsService";
// import { ScrollButton } from "../styles/styled_components/Buttons";
// import { scrollToBottom } from "../utils/scollToBottom";
import { countHeats } from "../utils/countHeats";
// import { isAtBottom } from "../utils/isAtBottom";
import { Round } from "../components/Round";

export const Liveresultat = () => {
  const [results, setResults] = useState(
    useLoaderData() as LiveResultsResponse
  );
  // const [hasNewData, setHasNewData] = useState(false);
  const prevHeatCount = useRef(countHeats(results));

  useEffect(() => {
    const getResults = async () => {
      try {
        const response = await getLiveResults({
          date: "2099-12-31",
          type: "json",
        });

        const newHeatCount = countHeats(response);
        if (newHeatCount > prevHeatCount.current) {
          console.log("ny data");
          // isAtBottom() && setHasNewData(true);
        }
        prevHeatCount.current = newHeatCount;
        setResults(response);

        // scrollToBottom();
        // setHasNewData(false);
        console.log("Hämtat!");
      } catch (error) {
        console.error("Error fetching live results:", error);
        throw error;
      }
    };

    getResults();
    const interval = setInterval(getResults, 500000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      {/* {!hasNewData && <ScrollButton>Det finns nya resultat!</ScrollButton>} */}

      <h1>Liveresultat</h1>
      <h2>{results?.sektion}</h2>
      <h2>{results?.datum}</h2>
      {results?.omgangar.map((round, i) => (
        <Round round={round} key={i}></Round>
      ))}
    </Wrapper>
  );
};
