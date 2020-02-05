import React, {useState, useEffect} from 'react'
import {ScrollView, View, SafeAreaView} from 'react-native'
import {
  TextInput,
  Subheading,
  Button,
  HelperText
} from 'react-native-paper'
import {NavigationStackProp} from 'react-navigation-stack'

import writeToCache from "../../apollo/helpers/writeToCache"
import LeagueTile from '../../ui-components/LeagueTile'
import {AppRoute} from "../../navigation/enums"
import userIsLeagueMember from "../../helpers/userIsLeagueMember"

import {League} from "../../generated/types"
import {useAccessLeagueLazyQuery, useLoggedInUserQuery, useJoinLeagueMutation} from "../../generated/hooks"

import styles from './styles'

interface Props {
  navigation: NavigationStackProp
}

function JoinLeague({navigation}: Props) {
  const [code, setCode] = useState<string>('')
  const [isMember, setIsMember] = useState(false)

  const {data: localData} = useLoggedInUserQuery()

  const [getLeagueByCode, {
    data: accessLeagueData,
    loading: accessLoading,
    error: accessError
  }] = useAccessLeagueLazyQuery()

  const [joinLeague, {
    loading: joinLoading,
    error: joinError
  }] = useJoinLeagueMutation()

  useEffect(() => {
    if (accessLeagueData?.accessLeague) {
      setIsMember(userIsLeagueMember(localData?.loggedInUser!, accessLeagueData?.accessLeague as League))
    }
  }, [accessLeagueData?.accessLeague])

  const handleViewOrJoinLeague = () => {
    if (accessLeagueData?.accessLeague) {
      if (isMember) {
        writeToCache("leagueId", accessLeagueData?.accessLeague?.uuid)
        navigation.navigate(AppRoute.LEAGUE_TABS, {
          league: accessLeagueData
        })
      } else {
        joinLeague({
          variables: {
            leagueId: accessLeagueData?.accessLeague.uuid
          }
        }).then(() => {
          writeToCache("leagueId", accessLeagueData?.accessLeague!.uuid)
          navigation.navigate(AppRoute.LEAGUE_TABS, {
            league: accessLeagueData
          })
        })
      }
    }
  }

  const handleAccessLeague = () => {
    getLeagueByCode({
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
        <HelperText type="error" visible={!!accessError}>
          Couldn't find a league that matches that code
        </HelperText>
        {accessLeagueData?.accessLeague && (
          <>
            <LeagueTile
              isMember={isMember}
              loading={joinLoading}
              league={accessLeagueData?.accessLeague as League}
              onPress={handleViewOrJoinLeague}
            />
            {joinError && (
              <HelperText>{joinError.message}</HelperText>
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
          loading={accessLoading}
          onPress={handleAccessLeague}>
          Search
        </Button>
      </View>
    </SafeAreaView>
  )
}

export default JoinLeague
