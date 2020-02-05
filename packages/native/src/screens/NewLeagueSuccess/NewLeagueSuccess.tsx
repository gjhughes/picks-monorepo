import React, {useState} from 'react'
import {ScrollView, Clipboard, View} from 'react-native'
import {Snackbar, Subheading} from 'react-native-paper'

import writeToCache from '../../apollo/helpers/writeToCache'
import {AppRoute} from '../../navigation/enums'
import {LeagueCodeTile} from '../../ui-components'

import styles from './styles'

// todo: navigation types
function NewLeagueSuccess({navigation, route}: any) {
  const {league} = route.params
  const [snackVisible, setSnackVisible] = useState<boolean>(false)

  function copyLeagueCode() {
    Clipboard.setString(league.leagueCode)
    setSnackVisible(true)
  }

  function handleNavigateToLeague() {
    const league = route.params.league
    writeToCache('leagueId', league.uuid)
    navigation.navigate(AppRoute.LEAGUE_TABS, {league})
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.textContainer}>
        <Subheading style={styles.text}>
          Share this code with anyone you wish to join your league
        </Subheading>
      </View>
      <LeagueCodeTile
        leagueCode={league.accessCode}
        onCopyLeagueCode={copyLeagueCode}
        onNavigate={handleNavigateToLeague}
      />
      <View style={styles.snack}>
        <Snackbar
          visible={snackVisible}
          onDismiss={() => setSnackVisible(false)}
          action={{label: 'Close', onPress: () => setSnackVisible(false)}}>
          Code copied to clipboard
        </Snackbar>
      </View>
    </ScrollView>
  )
}

export default NewLeagueSuccess
