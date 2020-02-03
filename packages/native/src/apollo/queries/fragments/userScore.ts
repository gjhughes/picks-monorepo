import gql from 'graphql-tag'

const userScoreFragment = gql`
  fragment userScore on UserScore {
    user {
      uuid
      name
    }
    score
  }
`

export default userScoreFragment
