import * as keychain from 'react-native-keychain'

export const setItem = async (uuid: string, accessToken: string) => {
  try {
    await keychain.setGenericPassword(uuid, accessToken)
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

export const getItem = async () => {
  try {
    const credentials = await keychain.getGenericPassword()
    return credentials
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

export const clear = async () => {
  await keychain.resetGenericPassword()
}
