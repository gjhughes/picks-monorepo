import React from 'react'
import {ScrollView, SafeAreaView, View} from 'react-native'
import {TextInput, Button, HelperText} from 'react-native-paper'

import styles from './styles'
import colors from '../../theme/colors'
import {useForm} from '../../hooks/useForm'
import {AppRoute} from "../../navigation/enums"
import {useLoginMutation} from "../../generated/hooks"
import {handleRedirect} from '../../helpers/handleRedirect'
import writeToCache from '../../apollo/helpers/writeToCache'
import {useOnSubmitEditing} from '../../hooks/useOnSubmitEditing'
import {AuthNavigatorProps} from '../../navigation/AuthNavigator'

function Login({navigation}: AuthNavigatorProps) {
  const {values, handleChange} = useForm({
    email: '',
    password: ''
  })

  const {emailInput, passwordInput, handleNextInput} = useOnSubmitEditing(
    'login'
  )

  const [login, {error, loading}] = useLoginMutation()

  const handleLogin = async () => {
    const {data} = await login({
      variables: {...values}
    })

    writeToCache('loggedInUser', data?.login.user!.uuid)
    
    // todo: fix navigation types
    handleRedirect(data?.login!, navigation)
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        style={styles.scrollView}>
        <TextInput
          // @ts-ignore
          ref={emailInput}
          label="Email"
          mode="outlined"
          autoCapitalize="none"
          placeholder="Email address"
          style={styles.input}
          value={values.email}
          returnKeyType="next"
          onSubmitEditing={handleNextInput}
          onChangeText={(value: string) => handleChange('email', value)}
        />
        <TextInput
          // @ts-ignore
          ref={passwordInput}
          mode="outlined"
          label="Password"
          style={styles.input}
          autoCapitalize="none"
          placeholder="Password"
          secureTextEntry
          value={values.password}
          onChangeText={(value: string) => handleChange('password', value)}
        />
      </ScrollView>
      <View style={styles.buttonWrapper}>
        {error && <HelperText type="error">{error.message}</HelperText>}
        <Button
          mode="contained"
          style={styles.button}
          onPress={handleLogin}
          loading={loading}>
          Login
        </Button>
        <Button
          color={colors.nfl.primary}
          style={styles.button}
          onPress={() => navigation.navigate(AppRoute.REGISTER)}>
          Create an account
        </Button>
      </View>
    </SafeAreaView>
  )
}

export default Login
