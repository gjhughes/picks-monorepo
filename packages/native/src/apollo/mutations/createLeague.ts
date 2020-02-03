import gql from 'graphql-tag'

const createLeagueMutation = gql`
  mutation CreateLeague($name: String!) {
    createLeague(name: $name) {
      uuid
      accessCode
      name
    }
  }
`

export default createLeagueMutation
