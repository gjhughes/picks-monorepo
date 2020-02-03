import {gql} from 'apollo-server'

export default gql`
  type League {
    uuid: String!
    name: String!
    accessCode: String!
    members: [User!]!
    predictions: [Prediction]!
  }
`
