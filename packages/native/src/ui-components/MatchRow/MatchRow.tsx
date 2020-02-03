import React from 'react'
import {View, Text} from 'react-native'
import {Surface} from 'react-native-paper'

import styles from './styles'
import TeamTile from './TeamTile'
import {Game, GameStatus} from '../../apollo/types'
import {Prediction} from '../../types/Prediction'

interface Props {
  game: Game
  isMatchUpdating: string | null
  predictions: Prediction | undefined
  onPrediction: (gameId: string, teamId: number) => void
}

function shouldNotUpdate(prevProps: Props, nextProps: Props) {
  return (
    (prevProps.predictions &&
      nextProps.predictions &&
      prevProps.predictions.predictedWinner ===
        nextProps.predictions.predictedWinner) ||
    prevProps.game.status === GameStatus.Final
  )
}

const MatchRow = ({
  game,
  onPrediction,
  predictions,
  isMatchUpdating
}: Props) => {
  const loadingStyles =
    isMatchUpdating && isMatchUpdating === game.gameKey
      ? styles.loadingText
      : {}

  return (
    <Surface style={styles.container}>
      <TeamTile
        isHomeTeam={false}
        gameKey={game.gameKey}
        teamKey={game.awayTeam}
        teamId={game.awayTeamId}
        predictions={predictions}
        onPrediction={onPrediction}
        score={game.awayScore}
        preGame={game.status === GameStatus.Scheduled}
      />
      <TeamTile
        isHomeTeam={true}
        gameKey={game.gameKey}
        teamKey={game.homeTeam}
        teamId={game.homeTeamId}
        predictions={predictions}
        onPrediction={onPrediction}
        score={game.homeScore}
        preGame={game.status === GameStatus.Scheduled}
      />
      <View style={styles.atContainer} pointerEvents="none">
        <Text style={[styles.text, loadingStyles]}>@</Text>
      </View>
    </Surface>
  )
}

export default MatchRow
