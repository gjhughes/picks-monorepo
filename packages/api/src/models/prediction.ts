import {Document, Schema, Types, model} from "mongoose"

import {IUser} from "../models/user"

export enum Stage {
  Pre = "PRE",
  Post = "POST",
  Regular = "REG"
}

export interface IPrediction extends Document {
  _id: Types.ObjectId
  uuid: string
  season: string
  week: number
  stage: Stage
  gameKey: string
  predictedWinner: string,
  createdBy: IUser,
  leagueId: string
}

export const predictionScehma = new Schema(
  {
    season: {
      type: String,
      required: true
    },
    week: {
      type: Number,
      required: true
    },
    stage: {
      type: String,
      enum: ["PRE", "POST", "REG"],
      required: true
    },
    gameKey: {
      type: String,
      required: true
    },
    predictedWinner: {
      type: String,
      required: true
    },
    leagueId: {
      type: Types.ObjectId,
      required: true
    },
    createdBy: {
      type: Types.ObjectId,
      required: true,
      ref: "User"
    }
  },
  {
    timestamps: true
  }
)

predictionScehma
  .set('toJSON', {
    virtuals: true,
    getters: true,
    transform(doc, json) {
      delete json.__v
      delete json._id
      delete json.id
    }
  })

predictionScehma
  .virtual('uuid')
  .get(function(this: IPrediction) {
    return this._id.toHexString()
  })

export const Prediction = model<IPrediction>(
  "Prediction",
  predictionScehma
)
