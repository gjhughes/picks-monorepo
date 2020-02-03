import React from 'react'
import {View} from 'react-native'
import {
  Card,
  Button,
  Surface,
  Headline,
  Chip,
  Divider
} from 'react-native-paper'

import styles from './styles'
import {User} from '../../types/User'
import {ILeague} from '../../types/League'

interface Props {
  league: ILeague
  onPress?: () => void
  isMyLeaguesList?: boolean
  loading?: boolean
  isMember: boolean | undefined
}

function LeagueTile({onPress, league, isMember, loading}: Props) {
  const {name, members} = league
  const buttonText = isMember ? 'View' : 'Join'
  return (
    <Surface style={styles.container}>
      <Card>
        <Card.Content>
          <Headline style={styles.headline}>{name}</Headline>
          <View style={styles.chipContainer}>
            {members.map((user: User, index: number) => (
              <Chip
                key={index}
                mode="flat"
                icon="account-circle"
                style={styles.chip}>
                {user.name}
              </Chip>
            ))}
          </View>
        </Card.Content>
        <Divider />
        <View style={styles.actionsContainer}>
          <Card.Actions style={styles.actions}>
            <Button onPress={onPress} loading={loading}>
              {buttonText}
            </Button>
          </Card.Actions>
        </View>
      </Card>
    </Surface>
  )
}

export default LeagueTile
