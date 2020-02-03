import gql from 'graphql-tag'

const mutation = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
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
