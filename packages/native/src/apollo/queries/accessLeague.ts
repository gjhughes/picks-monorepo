import gql from 'graphql-tag'

const accessLeagueQuery = gql`
  query AccessLeague($accessCode: String!) {
    accessLeague(accessCode: $accessCode) {
      uuid
      members {
        uuid
        name
      }
      name
      accessCode
    }
  }
`

export default accessLeagueQuery
