import { users } from "../db"
import { cookies } from "next/headers"

export async function GET(req: Request) {

  const cookieStore = await cookies()
  const id = cookieStore.get('session')?.value

  if (id) {
    const user = users.find((user) => user.id == id)

    if (user) {
      return Response.json({
        id: user.id,
        password: user.password,
        username: user.username,
        createdAt: user.createdAt
      })
    }

    return Response.json({ error: "User not found" })
  }
}