import React from 'react'
import {Card, Surface, Subheading, Headline, Button} from 'react-native-paper'

import styles from './styles'

interface Props {
  leagueCode: string
  onNavigate: () => void
  onCopyLeagueCode: () => void
}

function LeagueCodeTile({leagueCode, onCopyLeagueCode, onNavigate}: Props) {
  return (
    <Surface>
      <Card>
        <Card.Content style={styles.cardContent}>
          <Headline style={styles.headline}>{leagueCode}</Headline>
          <Subheading style={styles.subtitle}>League Code</Subheading>
        </Card.Content>
        <Card.Actions style={styles.cardActions}>
          <Button icon="link" onPress={onCopyLeagueCode}>
            COPY
          </Button>
          <Button onPress={onNavigate}>VIEW</Button>
        </Card.Actions>
      </Card>
    </Surface>
  )
}

export default LeagueCodeTile
