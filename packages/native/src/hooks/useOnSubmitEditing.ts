import {useRef} from 'react'
import {TextInput} from 'react-native'

type Screen = 'login' | 'register'

export const useOnSubmitEditing = (screen: Screen) => {
  const isRegister = screen === 'register'
  const nameInput = useRef<TextInput>()
  const emailInput = useRef<TextInput>()
  const passwordInput = useRef<TextInput>()
  const confirmPasswordInput = useRef<TextInput>()

  const handleNextInput = () => {
    if (nameInput.current) {
      if (nameInput.current.isFocused()) {
        if (emailInput.current) {
          return emailInput.current.focus()
        }
      }
    }

    if (emailInput.current) {
      if (emailInput.current.isFocused()) {
        if (passwordInput.current) {
          return passwordInput.current.focus()
        }
      }
    }

    if (passwordInput.current) {
      if (passwordInput.current.isFocused()) {
        if (isRegister) {
          if (confirmPasswordInput.current) {
            return confirmPasswordInput.current.focus()
          }
        }
      }
    }
  }

  return {
    handleNextInput,
    emailInput,
    passwordInput,
    nameInput: isRegister ? nameInput : undefined,
    confirmPasswordInput: isRegister ? confirmPasswordInput : undefined
  }
}
