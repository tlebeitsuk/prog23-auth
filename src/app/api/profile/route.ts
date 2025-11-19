import { users, sessions } from "../db"
import { cookies } from "next/headers"

export async function GET(req: Request) {
  const cookieStore = await cookies()
  const sessionId = cookieStore.get('session')?.value

  if (sessionId) {
    const session = sessions.find((session) => session.id == sessionId)

    // Session and not expired
    if (session && session.expiresAt > Date.now()) {
      const user = users.find((user) => user.id === session.userId)

      if (user) {
        return Response.json({
          id: user.id,
          password: user.password,
          username: user.username,
          createdAt: user.createdAt
        })
      }
    }

    // If expired, delete session from db
    if (session && session.expiresAt < Date.now()) {
      const index = sessions.indexOf(session)
      sessions.splice(index, 1)
      return Response.json({ error: "Session expired" })
    }

    return Response.json({ error: "User not found" })
  }
}