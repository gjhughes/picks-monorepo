import jwt from "jsonwebtoken"

export const generateToken = (userId: string) => {
  return jwt.sign({
    userId
  },
    "secret",
  {
    expiresIn: "24h"
  })
}
