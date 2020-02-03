import React, {useState, useEffect} from 'react'
import {ScrollView, View, SafeAreaView} from 'react-native'
import {
  TextInput,
  Subheading,
  Button,
  HelperText
} from 'react-native-paper'
import {NavigationStackProp} from 'react-navigation-stack'

import {useAccessLeague, useJoinLeague, useLoggedInUser} from '../../apollo/hooks'
import writeToCache from "../../apollo/helpers/writeToCache"
import LeagueTile from '../../ui-components/LeagueTile'
import {AppRoute} from "../../navigation/enums"
import userIsLeagueMember from "../../helpers/userIsLeagueMember"

import styles from './styles'

interface Props {
  navigation: NavigationStackProp
}

function JoinLeague({navigation}: Props) {
  const [code, setCode] = useState<string>('')
  const [isMember, setIsMember] = useState(false)

  const {loggedInUser} = useLoggedInUser()

  const {
    getLeagueByAccessCode,
    accessLeagueData,
    accessLeagueLoading,
    accessLeagueError
  } = useAccessLeague()

  const {joinLeague, joinLeagueLoading, joinLeagueError} = useJoinLeague()

  useEffect(() => {
    setIsMember(userIsLeagueMember(loggedInUser, accessLeagueData))
  }, [accessLeagueData])

  const handleViewOrJoinLeague = () => {
    if (isMember) {
      writeToCache("leagueId", accessLeagueData.uuid)
      navigation.navigate(AppRoute.LEAGUE_TABS, {
        league: accessLeagueData
      })
    } else {
      joinLeague({
        variables: {
          leagueId: accessLeagueData?.uuid
        }
      }).then(() => {
        writeToCache("leagueId", accessLeagueData.uuid)
        navigation.navigate(AppRoute.LEAGUE_TABS, {
          league: accessLeagueData
        })
      })
    }
  }

  const handleAccessLeague = () => {
    getLeagueByAccessCode({
      variables: {
        accessCode: code
      }
    })
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Subheading style={styles.text}>
          Enter the 6 digit code for the league you want to join
        </Subheading>
        <TextInput
          value={code}
          mode="outlined"
          label="League Code"
          style={styles.input}
          onChangeText={setCode}
        />
        <HelperText type="error" visible={!!accessLeagueError}>
          Couldn't find a league that matches that code
        </HelperText>
        {accessLeagueData && (
          <>
            <LeagueTile
              isMember={isMember}
              loading={joinLeagueLoading}
              league={accessLeagueData}
              onPress={handleViewOrJoinLeague}
            />
            {joinLeagueError && (
              <HelperText>{joinLeagueError.message}</HelperText>
            )}
          </>
        )}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          icon="arrow-right"
          style={styles.button}
          disabled={code.length < 6}
          loading={accessLeagueLoading}
          onPress={handleAccessLeague}>
          Search
        </Button>
      </View>
    </SafeAreaView>
  )
}

export default JoinLeague
