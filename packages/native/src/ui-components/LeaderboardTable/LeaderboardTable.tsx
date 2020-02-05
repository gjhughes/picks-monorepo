import React from 'react'
import {DataTable, Surface} from 'react-native-paper'

import styles from './styles'
import {UserScore} from "../../generated/hooks"

interface Props {
  overallScore?: boolean
  week?: number
  results: UserScore[]
}

function LeaderboardTable({week, results, overallScore}: Props) {
  return (
    <Surface style={styles.container}>
      <DataTable>
        <DataTable.Header>
          {!overallScore && <DataTable.Title>WEEK {week}</DataTable.Title>}
          <DataTable.Title numeric>Score</DataTable.Title>
        </DataTable.Header>
        {results.map(({user, score}, index) => {
          return (
            <DataTable.Row key={index}>
              <DataTable.Cell>{user.name}</DataTable.Cell>
              <DataTable.Cell numeric>{score}</DataTable.Cell>
            </DataTable.Row>
          )
        })}
      </DataTable>
    </Surface>
  )
}

export default LeaderboardTable
