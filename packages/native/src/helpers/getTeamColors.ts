import {colors} from '../theme'

export const getTeamColors = (teamId: number) => {
  const teamColor = colors.teamColors[teamId]
  return {
    backgroundColor: teamColor.primary,
    footerColor: teamColor.secondary
  }
}
