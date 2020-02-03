enum Stage {
  Pre = 'PRE',
  Reg = 'REG',
  Post = 'POST'
}

export interface Prediction {
  gameKey: string
  week: number
  leagueId: string
  createdBy: string
  predictedWinner: number
  season: string
  stage: Stage
}
