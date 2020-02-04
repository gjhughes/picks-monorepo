import React from 'react'
import {ScrollView, SafeAreaView, View} from 'react-native'
import {NavigationStackProp} from 'react-navigation-stack'
import {Button, TextInput, HelperText} from 'react-native-paper'

import styles from './styles'
import {useForm} from '../../hooks/useForm'
import {useOnSubmitEditing} from '../../hooks/useOnSubmitEditing'
import {handleRedirect} from '../../helpers/handleRedirect'
import writeToCache from '../../apollo/helpers/writeToCache'
import {useRegisterMutation} from "../../generated/hooks"

interface Props {
  navigation: NavigationStackProp
}

function Register({navigation}: Props) {
  const {values, handleChange} = useForm({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  })

  const {
    nameInput,
    emailInput,
    passwordInput,
    handleNextInput,
    confirmPasswordInput
  } = useOnSubmitEditing('register')

  const [register, {loading, error}] = useRegisterMutation()

  const handleRegister = async () => {
    const {data} = await register({
      variables: {...values}
    })

    writeToCache('loggedInUser', data?.register.user.uuid!)

    // todo: fix navigation type
    handleRedirect(data?.register!, navigation)
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        style={styles.scrollView}>
        <TextInput
          // https://github.com/callstack/react-native-paper/issues/1453
          // @ts-ignore
          ref={nameInput}
          mode="outlined"
          label="Name"
          placeholder="Name"
          style={styles.input}
          value={values.name}
          returnKeyType="next"
          autoCapitalize="none"
          blurOnSubmit={false}
          onSubmitEditing={handleNextInput}
          onChangeText={(value: string) => handleChange('name', value)}
        />
        <TextInput
          // https://github.com/callstack/react-native-paper/issues/1453
          // @ts-ignore
          ref={emailInput}
          mode="outlined"
          label="Email"
          placeholder="Email address"
          style={styles.input}
          value={values.email}
          returnKeyType="next"
          autoCapitalize="none"
          keyboardType="email-address"
          blurOnSubmit={false}
          onSubmitEditing={handleNextInput}
          onChangeText={(value: string) => handleChange('email', value)}
        />
        <TextInput
          // https://github.com/callstack/react-native-paper/issues/1453
          // @ts-ignore
          ref={passwordInput}
          secureTextEntry
          mode="outlined"
          label="Password"
          placeholder="Password"
          style={styles.input}
          value={values.password}
          returnKeyType="next"
          blurOnSubmit={false}
          autoCapitalize="none"
          onSubmitEditing={handleNextInput}
          onChangeText={(value: string) => handleChange('password', value)}
        />
        <TextInput
          // https://github.com/callstack/react-native-paper/issues/1453
          // @ts-ignore
          ref={confirmPasswordInput}
          mode="outlined"
          secureTextEntry
          label="Confirm password"
          placeholder="Confirm password"
          style={styles.input}
          value={values.passwordConfirmation}
          autoCapitalize="none"
          returnKeyType="done"
          onChangeText={(value: string) =>
            handleChange('passwordConfirmation', value)
          }
        />
      </ScrollView>
      <View style={styles.buttonWrapper}>
        {error && (
          <HelperText type="error">{error.message}</HelperText>
        )}
        <Button
          mode="contained"
          style={styles.button}
          loading={loading}
          onPress={handleRegister}>
          Register
        </Button>
        <Button
          style={styles.button}
          onPress={() => navigation.navigate('Login')}>
          Already signed up
        </Button>
      </View>
    </SafeAreaView>
  )
}

export default Register
