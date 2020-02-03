import React, {useState} from 'react'
import {SafeAreaView, View} from 'react-native'
import {TextInput, Button} from 'react-native-paper'
import {NavigationStackProp} from 'react-navigation-stack'
import {useMutation} from '@apollo/react-hooks'

import createLeagueMutation from '../../apollo/mutations/createLeague'
import styles from './styles'
import {ScrollView} from 'react-native-gesture-handler'

interface Props {
  navigation: NavigationStackProp
}

function NewLeague({navigation}: Props) {
  const [leagueName, setLeagueName] = useState<string>('')
  const [createLeague, {loading, error}] = useMutation(createLeagueMutation, {
    variables: {name: leagueName},
    refetchQueries: ['GetUser']
  })

  function handleCreateLeague() {
    createLeague().then(({data}) => {
      navigation.navigate('NewLeagueSuccess', {
        league: data.createLeague,
        leagueCode: data.createLeague.accessCode
      })
    })
  }

  if (error) {
    console.log(error)
  }

  const isButtonDisabled = leagueName.length < 1

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <TextInput
            mode="outlined"
            label="League Name"
            style={styles.input}
            onChangeText={setLeagueName}
          />
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          loading={loading}
          mode="contained"
          icon="arrow-right"
          style={styles.button}
          disabled={isButtonDisabled}
          onPress={handleCreateLeague}>
          SUBMIT
        </Button>
      </View>
    </SafeAreaView>
  )
}

export default NewLeague
