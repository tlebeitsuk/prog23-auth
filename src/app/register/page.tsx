'use client'
import React from 'react'
import { useRouter } from "next/navigation"

export default function LoginPage() {
	const router = useRouter()

	async function HandleSubmit(event) {
		// Prevent reload on submit
		event.preventDefault()

		const formData = {
			username: event.target.username.value,
			password: event.target.password.value
		}

		// Send to API (backend)
		const response = await fetch('/api/register', {
			method: "POST",
			body: JSON.stringify(formData),
		})

		const result = await response.json()

		if (!result.id) {
			alert('Fel lösenord eller användarnamn')
		} else {
			// Navigate to user profile
			router.push(`/profile?id=${result.id}`)
		}
	}
	return (
		<div className='bg-gray-400 h-svh flex justify-center items-center'>
			<form onSubmit={HandleSubmit} className="flex flex-col gap-2.5">
				<label htmlFor="username" className="">Username</label>
				<input type="text" name="username" className='border border-black' />
				<label htmlFor="password">Password</label>
				<input type="password" name="password" className='border border-black' />
				<button type='submit' className='bg-white mt-2 border rounded-xl'>Register</button>
			</form>
		</div>
	)
}