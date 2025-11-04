import { users } from "../db"
const bcrypt = require('bcrypt')

export async function POST(req: Request) {
  const { username, password } = await req.json()

  // Return if username OR password if not included in body
  if (!username || !password) {
    return Response.json({ error: "User not found" })
  }

  // Find user by username from "db"
  const user = users.find((user) => user.username === username)

  if (user) {
    // Check password hash match
    const match = await bcrypt.compare(password, user.password)

    if (match) {
      return Response.json({ id: user.id })
    }

    return Response.json({ error: "user or password is wrong" })
  }

  return Response.json({ error: "User not found" })
}