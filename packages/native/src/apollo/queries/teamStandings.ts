import gql from 'graphql-tag'

const teamStandingsQuery = gql`
  query TeamStandings($season: String!) {
    teamStandings(season: $season) {
      teamId
      wins
      losses
      ties
      name
      team
    }
  }
`

export default teamStandingsQuery
