import axios from "axios"

import endpoints from "./endpoints"
import {parseTeamStandings} from "./helpers/standings"

export const getTeamStandings = async (season: string) => {
  const {data} = await axios.get(endpoints.teamStandings(season))
  const teamStandings = parseTeamStandings(data)
  return teamStandings
}
