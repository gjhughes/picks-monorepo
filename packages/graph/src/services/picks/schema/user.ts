import {gql} from 'apollo-server'

export default gql`
  type User {
    uuid: String!
    leagues: [League]!
    name: String!
    email: String!
    password: String!
    createdAt: String!
    updatedAt: String!
  }
`
