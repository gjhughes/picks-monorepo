import React from 'react'
import {View} from 'react-native'
import {Card, Title, Subheading} from 'react-native-paper'

import getStyles from './styles'
import Score from './Score'
import Record from './Record'
import Predictions from './Predictions'
import {getTeamColors} from '../../../helpers/getTeamColors'
import {Prediction} from '../../../types/Prediction'
import {useTeamRecord} from '../../../hooks/useTeamRecord'

interface Props {
  preGame: boolean
  teamKey: string
  teamId: number
  gameKey: string
  score: number | null
  isHomeTeam: boolean
  predictions: Prediction | undefined
  onPrediction(gameKey: string, teamId: number): void
}

function TeamTile({
  preGame,
  predictions,
  gameKey,
  teamId,
  teamKey,
  score,
  isHomeTeam,
  onPrediction
}: Props) {
  const {teamName, wins, losses, ties} = useTeamRecord(teamKey)
  const {backgroundColor, footerColor} = getTeamColors(teamId)
  const {container, footer, text, innerContainer} = getStyles(isHomeTeam)
  return (
    <Card style={container} onPress={() => onPrediction(gameKey, teamId)}>
      <View style={[innerContainer, {backgroundColor}]} pointerEvents="none">
        <Title style={text}>{teamKey}</Title>
        <Subheading style={text}>{teamName}</Subheading>
        <Record wins={wins} losses={losses} ties={ties} />
      </View>
      <View style={[footer, {backgroundColor: footerColor}]}>
        {/* {!preGame ? (
          <Score score={score} />
        ) : ( */}
        <Predictions
          gameKey={gameKey}
          teamId={teamId}
          predictions={predictions}
        />
        {/* )} */}
      </View>
    </Card>
  )
}

export default TeamTile
