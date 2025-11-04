"use client"

import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

export default function page() {
  const [profile, setProfile] = useState()
  const id = useSearchParams().get('id')

  async function getProfile() {
    const response = await fetch(`/api/profile?id=${id}`)
    const result = await response.json()

    if (result && result.id) {
      setProfile(result)
    }

  }

  useEffect(() => {
    getProfile()
  }, [])

  return (
    <div>{profile ? JSON.stringify(profile) : 'User not found'}</div>
  )
}
