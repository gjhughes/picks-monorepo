import {AuthResponse} from "../types"
import {User, IUser} from "../models/user"
import {HTTP401Error, HTTP400Error, HTTP404Error} from '../utils/httpErrors'
import {generateToken} from "../utils/generateToken"

export const register = async (newUserData: Partial<IUser>): Promise<AuthResponse> => {
  const user = await User.create(newUserData)
  const accessToken = generateToken(user.uuid)

  return {
    accessToken,
    user
  }
}

export const login = async (email: string, password: string): Promise<AuthResponse> => {
  const user = await User
    .findOne({email})
    .exec()

  if (!user || !user.validatePassword(password)) {
    throw new HTTP401Error
  }

  const accessToken = generateToken(user.uuid)

  return {
    accessToken,
    user
  }
}

export const me = async (userId: string): Promise<IUser | HTTP400Error> => {
  const user = await User
    .findById(userId)
    .populate({
      path: 'leagues', select: 'name accessCode',
      populate: {
        path: 'members', select: 'uuid name'}
      })
    .exec()

  if (!user) {
    throw new HTTP400Error
  }

  return user
}
