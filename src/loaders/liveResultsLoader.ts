import { LiveResultsResponse } from "../api/LiveResultsResponse";
import { getLiveResults } from "../api/LiveResultsService";

export const resultatLoader = async (): Promise<LiveResultsResponse> => {
  try {
    const results = await getLiveResults({
      date: "2099-12-31",
      type: "json",
    });
    return results;
  } catch (error) {
    console.error("Error fetching live results:", error);
    throw error;
  }
};
