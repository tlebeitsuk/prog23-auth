"use client"

import React, { useEffect, useState } from 'react'

export default function page() {
  const [profile, setProfile] = useState()

  async function getProfile() {
    const response = await fetch("/api/profile")
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
