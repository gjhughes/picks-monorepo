import client from '../index'

import loggedInUserQuery from '../queries/loggedInUser'

function useLoggedInUser() {
  const {loggedInUser} = client.readQuery({
    query: loggedInUserQuery
  })!

  return {loggedInUser}
}

export default useLoggedInUser
