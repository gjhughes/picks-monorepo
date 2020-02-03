import gql from 'graphql-tag'

const mutation = gql`
  mutation Register(
    $email: String!
    $name: String!
    $password: String!
    $passwordConfirmation: String!
  ) {
    register(
      email: $email
      name: $name
      password: $password
      passwordConfirmation: $passwordConfirmation
    ) {
      user {
        uuid
        name
        email
      }
      accessToken
    }
  }
`

export default mutation
