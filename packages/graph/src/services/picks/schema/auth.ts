import {gql} from 'apollo-server'

export default gql`
  type Auth {
    accessToken: String!
    user: User!
  }
`
