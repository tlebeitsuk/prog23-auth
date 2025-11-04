import { users } from "../db"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')

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