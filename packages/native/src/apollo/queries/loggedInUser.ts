import gql from 'graphql-tag'

const query = gql`
  query LoggedInUser {
    loggedInUser @client
  }
`
export default query
