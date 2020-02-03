import {User} from './User'
import {Prediction} from './Prediction'

export interface ILeague {
  uuid: string
  members: User[]
  createdBy: User
  name: string
  accessCode: number
  predictions: Prediction[]
}
