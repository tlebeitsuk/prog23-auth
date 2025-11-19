import { sessions } from "../db"
import { cookies } from "next/headers"

export async function POST(req: Request) {
  // TODO: Delete session from "db"

  // TODO: Delete cookie
  (await cookies()).delete('session')
}