import { users } from "../db"
const bcrypt = require('bcrypt')

export async function POST(req: Request) {
  const { username, password } = await req.json()

  // Get last id used in "db" (users)
  const newId = users[users.length - 1].id + 1

  // Hash password
  const hashedPassword = bcrypt.hashSync(password, 12)

  // Create new user object
  const newUser = {
    id: newId,
    username,
    password: hashedPassword,
    admin: false,
    createdAt: Date.now()
  }

  // Add user to "db"
  users.push(newUser)

  // Send back new user id
  return Response.json({ id: newUser.id })
}