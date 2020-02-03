import mongoose from "mongoose"

import config from "../config"

import scores from './scores'
import {User, IUser} from "../models/user"
import {League, ILeague} from "../models/league"
import {Prediction, IPrediction, Stage} from "../models/prediction"

const users = [
  {name: "Gavin", email: "gavin@gavin.com", password: "password", passwordConfirmation: "password"},
  {name: "Alex", email: "alex@alex.com", password: "password", passwordConfirmation: "password"}
]

function leagueFactory(users: IUser[]) {
  return [
    {name: "Hermon Hill", accessCode: "12345", createdBy: users[0].uuid}
  ]
}

function createUsers() {
  return User.create(users)
}

function createLeagues(users: IUser[]) {
  return League.create(leagueFactory(users))
}

mongoose.connect(config.dbUri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
  .then(({connection}) => connection.db.dropDatabase())
  .then(() => createUsers().then((createdUsers) => {
    console.log(`${createdUsers.length} users created`, createdUsers.map((user) => user.leagues))
    return createLeagues(createdUsers).then((newLeagues) => {
      console.log(`${newLeagues.length} leagues created`, newLeagues.map((league) => league._id))
      return newLeagues
    })
  }))
  .catch((e) => console.log(e))
  .finally(() => mongoose.connection.close())
