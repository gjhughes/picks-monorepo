import {useMutation} from 'react-apollo'

import loginMutation from '../mutations/login'

function useLogin() {
  const [login, {loading, error}] = useMutation(loginMutation)
  return {
    login,
    authLoading: loading,
    authError: error
  }
}

export default useLogin
