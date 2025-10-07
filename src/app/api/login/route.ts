const users = [
  { id: 100, username: "bob", password: "password123", admin: false, createdAt: 1758619750586 }
]

export default function handler(req, res) {
  const data = req.body
  console.log(data)
  res.status(200).json({ message: 'Hello from Next.js!' })
}