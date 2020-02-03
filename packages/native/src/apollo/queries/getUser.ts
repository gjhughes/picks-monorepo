import gql from 'graphql-tag'

const getUserQuery = gql`
  query GetUser($uuid: String!) {
    user(uuid: $uuid) {
      uuid
      name
      email
      leagues {
        uuid
        name
        accessCode
        members {
          name
          uuid
        }
      }
    }
  }
`

export default getUserQuery
