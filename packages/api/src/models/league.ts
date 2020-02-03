import {Document, Schema, Types, model} from "mongoose"

import {User} from "./user"
import {generateAccessCode} from "../utils/generateAccessCode"

export interface ILeague extends Document {
  name: string
  accessCode: string
  members: Types.ObjectId[]
  createdBy: Types.ObjectId
}

const leagueSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    accessCode: {
      type: String,
      required: true
    },
    members: [{
      type: Schema.Types.ObjectId,
      ref: "User"
    }],
    createdBy: {
      type: Schema.Types.ObjectId
    }
  },
  {
    timestamps: true
  }
)

leagueSchema
  .set('toJSON', {
    virtuals: true,
    getters: true,
    transform(doc, json) {
      delete json.__v
      delete json._id
      delete json.id
    }
  })

leagueSchema
  .virtual('uuid')
  .get(function(this: ILeague) {
    return this._id
  })

leagueSchema
  .pre("validate", function(this: ILeague, next) {
    this.accessCode = generateAccessCode()
    next()
  })

leagueSchema
  .pre("save", function(this: ILeague, next) {
    this.members.push(this.createdBy)
    next()
  })

leagueSchema
  .post("save", async function(this: ILeague, _, next) {
    console.log("Post Save hook::", this)
    await User.findByIdAndUpdate(this.createdBy, {
      $push: {"leagues": this._id}
    })
    next()
  })

export const League = model<ILeague>(
  "League",
  leagueSchema
)
