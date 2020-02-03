export interface GameResponse {
  GameKey: string
  HomeTeam: string
  AwayTeam: string
  GlobalHomeTeamID: number
  GlobalAwayTeamID: number
  HomeScore: number | null
  AwayScore: number | null
  Status: GameStatus
}

export enum GameStatus {
  Final = "Final",
  Scheduled = "Scheduled",
  InProgress = "InProgress"
}

export interface IGame {
  gameKey: string,
  homeTeam: string,
  homeTeamId: number,
  awayTeam: string,
  awayTeamId: number,
  homeScore: number | null,
  awayScore: number | null,
  status: string
}
