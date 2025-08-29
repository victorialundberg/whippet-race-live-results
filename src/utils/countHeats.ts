import { LiveResultsResponse } from "../api/LiveResultsResponse";

export const countHeats = (data: LiveResultsResponse) => {
  return data.omgangar.reduce((acc, omgangar) => acc + omgangar.heat.length, 0);
};
