import {Prediction} from '../../types/Prediction'

import {ILeague} from '../../types/League'

export interface GlobalTeam {
  name: string
  teamId: number
  wins: number
  losses: number
  ties: number
}

export interface Game {
  homeTeamId: number
  awayTeamId: number
  homeTeam: string
  awayTeam: string
  status: GameStatus
  homeScore: number | null
  awayScore: number | null
  gameKey: string
}

export enum GameStatus {
  Final = 'Final',
  Scheduled = 'Scheduled',
  InProgress = 'InProgress'
}

export interface WeeklySchedule {
  weeklySchedule: Game[]
}

export interface TeamRecord {
  teamId: number
  team: string
  name: string
  wins: number
  losses: number
  ties: number
}

export interface WeeklyPredictions {
  predictionsForWeek: Prediction[]
}

export interface Leaderboard {
  leaderboard: {
    overall?: LeaderboardResults[]
    weeks?: [
      {
        week: number
        results: LeaderboardResults[]
      }
    ]
  }
}

interface LeaderboardUser {
  uuid: string
  name: string
}

export interface LeaderboardResults {
  user: LeaderboardUser
  score: number
}

export interface League {
  accessLeague: ILeague
}
