import {ILeague} from '../types/League'

function userIsLeagueMember(user: string, league?: ILeague) {
  return (
    league?.members.filter((member) => {
      return member.uuid === user
    }).length === 1
  )
}

export default userIsLeagueMember
