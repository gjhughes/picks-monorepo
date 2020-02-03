import React, {useCallback} from 'react'
import {FlatList} from 'react-native'
import {ApolloQueryResult} from 'apollo-client'

import styles from './styles'
import {Empty} from './Empty'
import MatchRow from '../MatchRow'
import {Game, WeeklySchedule} from '../../apollo/types'
import {Prediction} from '../../types/Prediction'

interface Props {
  games: Game[]
  isFetching: boolean
  predictions: Prediction[]
  isMatchUpdating: string | null
  onPrediction(gameId: string, teamId: number): void
  refetch(): Promise<ApolloQueryResult<WeeklySchedule>>
}

const renderItem = ({
  item,
  onPrediction,
  predictions,
  isMatchUpdating
}: any) => {
  return (
    <MatchRow
      game={item}
      isMatchUpdating={isMatchUpdating}
      predictions={predictions.find(
        (game: Game) => game.gameKey === item.gameKey
      )}
      onPrediction={onPrediction}
    />
  )
}

function ScheduleList({
  games,
  refetch,
  predictions,
  onPrediction,
  isFetching,
  isMatchUpdating
}: Props) {
  const renderItemCall = useCallback(
    ({item}) => {
      return renderItem({item, onPrediction, predictions, isMatchUpdating})
    },
    [isMatchUpdating, onPrediction, predictions]
  )

  if (!predictions) {
    return null
  }

  return (
    <FlatList<Game>
      data={games}
      refreshing={isFetching}
      style={styles.container}
      onRefresh={() => refetch()}
      renderItem={renderItemCall}
      ListEmptyComponent={<Empty />}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.gameKey}
      contentContainerStyle={styles.contentContainer}
    />
  )
}

export default ScheduleList
