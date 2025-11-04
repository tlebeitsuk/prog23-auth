const users = [
  { id: 100, username: "bob", password: "password123", admin: false, createdAt: 1758619750586 }
]

export async function POST(req: Request) {
  const { username, password } = await req.json()

  const user = users.find((user) => user.username === username && user.password === password)

  if (user) {
    return Response.json({ id: user.id })
  }

  return Response.json({ error: "User not found" })
}