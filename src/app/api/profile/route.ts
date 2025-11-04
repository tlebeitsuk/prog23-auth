const users = [
  { id: 100, username: "bob", password: "password123", admin: false, createdAt: 1758619750586 }
]

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')

  if (id) {
    const user = users.find((user) => user.id == id)

    if (user) {
      return Response.json(user)
    }

    return Response.json({ error: "User not found" })
  }
}