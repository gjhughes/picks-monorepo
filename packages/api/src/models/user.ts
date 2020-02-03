import {Document, Schema, model, Types} from "mongoose"
import {NextFunction} from "express"
import bcrypt from "bcrypt"

import {ILeague} from './league'
import {HTTP401Error} from "../utils/httpErrors"

export interface IUser extends Document {
  _id: Types.ObjectId
  uuid: string
  name: string
  email: string
  password: string
  _passwordConfirmation: string
  leagues: ILeague[] | [],
  validatePassword(password: string): boolean
}

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    leagues: [{
      type: Schema.Types.ObjectId,
      ref: "League"
    }]
  },
  {
    timestamps: true
  }
)

function validatePassword(this: IUser, password: string) {
  return bcrypt.compareSync(password, this.password)
}

userSchema
  .set('toJSON', {
    virtuals: true,
    getters: true,
    transform(doc, json) {
      delete json.__v
      delete json._id
      delete json.id
    }
  })

userSchema
  .set('toObject', {
    virtuals: true,
    transform(doc, json) {
      delete json.__v
      delete json._id
      delete json.id
    }
  });

userSchema
  .virtual("passwordConfirmation")
  .set(function setPasswordConfirmation(this: IUser, passwordConfirmation: string) {
    this._passwordConfirmation = passwordConfirmation
  })

userSchema
  .virtual("uuid")
  .get(function(this: IUser) {
    return this._id.toHexString()
  })

userSchema
  .pre("validate", function checkPassword(this: IUser, next: NextFunction) {
    if(!this._passwordConfirmation || this._passwordConfirmation !== this.password) {
      throw new HTTP401Error
    }
    next(); 
  })

userSchema
  .pre("validate", function hashPassword(this: IUser, next: NextFunction) {
    if (this.isModified('password')) {
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8))
    }
    next()
  })

userSchema.methods.validatePassword = validatePassword

export const User = model<IUser>(
  "User",
  userSchema
)
