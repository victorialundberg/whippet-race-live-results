import { LiveResultsResponse } from "./LiveResultsResponse";

import axios from "axios";

export const API_URL = import.meta.env.VITE_API_URL;

interface GetLiveResultsParams {
  date: string;
  type?: string;
}

export const getLiveResults = async (
  params: GetLiveResultsParams
): Promise<LiveResultsResponse> => {
  const response = await axios.get<LiveResultsResponse>(API_URL, {
    params,
  });

  return response.data;
};
