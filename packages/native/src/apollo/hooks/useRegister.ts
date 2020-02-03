import {useMutation} from 'react-apollo'

import registerMutation from '../mutations/register'

function useRegister() {
  const [register, {error, loading}] = useMutation(registerMutation)

  return {
    register,
    registerError: error,
    registerLoading: loading
  }
}

export default useRegister
