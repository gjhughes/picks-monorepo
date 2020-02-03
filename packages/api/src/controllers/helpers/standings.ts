import {ITeamRecord} from "../../models/teamStandings"

export const parseTeamStandings = (teamStandings: ITeamRecord[]) => {
  return teamStandings.map((team) => ({
    season: team.Season,
    team: team.Team,
    name: team.Name,
    wins: team.Wins,
    losses: team.Losses,
    ties: team.Ties,
    teamId: team.GlobalTeamID
  }))
}
