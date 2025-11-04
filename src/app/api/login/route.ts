import { users } from "../db"
import { cookies } from "next/headers"
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
      // TODO: Set cookie that contain user.id
      const cookieStore = await cookies()
      cookieStore.set({
        name: 'session',
        value: user.id.toString(),
        // httpOnly: true
        // secure: true,
        // sameSite: 'Lax'
      })

      return Response.json({ id: user.id })
    }

    return Response.json({ error: "user or password is wrong" })
  }

  return Response.json({ error: "User not found" })
}