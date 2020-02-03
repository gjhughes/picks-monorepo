import gql from 'graphql-tag'

const joinLeagueMutation = gql`
  mutation JoinLeague($leagueId: String!) {
    joinLeague(leagueId: $leagueId) {
      uuid
      name
      accessCode
      members {
        uuid
        name
      }
    }
  }
`

export default joinLeagueMutation
