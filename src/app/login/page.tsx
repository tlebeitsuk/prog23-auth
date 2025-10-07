import React from 'react'

export default function LoginPage() {
	function HandleSubmit() {

	}
	return (
		<div className='bg-gray-400 h-svh flex justify-center items-center'>
			<form action="" className="flex flex-col gap-2.5">
				<label htmlFor="username" className="">Username</label>
				<input type="text" name="username" className='border border-black' />
				<label htmlFor="password">Password</label>
				<input type="password" name="password" className='border border-black' />
				<button type='submit' className='bg-white mt-2 border rounded-xl'>Login</button>
			</form>
		</div>
	)
}