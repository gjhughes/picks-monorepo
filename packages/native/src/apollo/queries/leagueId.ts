import gql from 'graphql-tag'

const localLeagueIdQuery = gql`
  query LocalLeagueId {
    leagueId @client
  }
`

export default localLeagueIdQuery
