import React from 'react'
import {ScrollView, SafeAreaView, View} from 'react-native'
import {TextInput, Button, Subheading, HelperText} from 'react-native-paper'

import styles from './styles'
import colors from '../../theme/colors'
import {useForm} from '../../hooks/useForm'
import {useOnSubmitEditing} from '../../hooks/useOnSubmitEditing'
import {useLogin} from '../../apollo/hooks'
import writeToCache from '../../apollo/helpers/writeToCache'
import {handleRedirect} from '../../helpers/handleRedirect'
import {AuthNavigatorProps} from '../../navigation/AuthNavigator'

function Login({navigation}: AuthNavigatorProps) {
  const {values, handleChange} = useForm({
    email: '',
    password: ''
  })

  const {emailInput, passwordInput, handleNextInput} = useOnSubmitEditing(
    'login'
  )

  const {login, authLoading, authError} = useLogin()

  const handleLogin = async () => {
    const {data} = await login({
      variables: {...values}
    })

    writeToCache('loggedInUser', data.login.user.uuid)

    handleRedirect(data.login, navigation)
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
        {authError && <HelperText type="error">{authError.message}</HelperText>}
        <Button
          mode="contained"
          style={styles.button}
          onPress={handleLogin}
          loading={authLoading}>
          Login
        </Button>
        <Button
          color={colors.nfl.primary}
          style={styles.button}
          onPress={() => navigation.navigate('Register')}>
          Create an account
        </Button>
      </View>
    </SafeAreaView>
  )
}

Login.navigationOptions = {
  headerTitle: () => <Subheading style={styles.title}>LOGIN</Subheading>
}

export default Login
