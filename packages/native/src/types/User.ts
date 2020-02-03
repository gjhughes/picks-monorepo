import {ILeague} from './League'

export interface IUser {
  uuid: string
  name: string
  email: string
  leagues: ILeague[]
}
