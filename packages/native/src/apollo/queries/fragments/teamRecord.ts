import gql from 'graphql-tag'

const fragment = gql`
  fragment record on TeamRecord {
    teamId
    wins
    losses
    ties
    name
    team
  }
`

export default fragment
