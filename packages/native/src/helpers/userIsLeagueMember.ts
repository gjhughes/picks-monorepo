import {League} from "../generated/types"

function userIsLeagueMember(user: string, league?: League) {
  return (
    league?.members.filter((member) => {
      return member.uuid === user
    }).length === 1
  )
}

export default userIsLeagueMember
