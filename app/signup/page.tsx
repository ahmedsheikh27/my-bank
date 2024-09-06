'use client'
import React, { useState } from 'react'

export const page = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
        name: '',
    })
    const [message, setMessage] = useState('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [event.target.name]: event.target.value })
    }


    const handleRegister = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault()
        const { email, name, password } = user
        if (!email || !password || !name) {
            setMessage('Please fill all inputs')
            console.log(message)
        } else {
            setUser(user)
            setMessage('User is signed up')
            console.log(user)
        }

    }


    return (
        <div className='h-screen w-full bg-white items-center flex justify-center py-3'>
        
                          <form onSubmit={handleRegister}>
                        <div className='w-80 h-auto bg-white items-center m-3 flex flex-col p-3 rounded-md border-gray-300  border-solid border-[1px]'>
                            <h1>
                                Sign Up
                            </h1>
                            <div className='gap-5 mt-5 m-3  flex flex-col justify-between  '>
                                <label> Name:
                                    <input type="text" placeholder='name' name='name'  onChange={handleChange} className='w-[300px] px-3 h-[50px] 0 rounded-md border-black  border-solid border-[1px]  ' />
                                </label>
                                <label> Email:
                                    <input type="email" placeholder='your@gmail.com' name='email'  onChange={handleChange} className='w-[300px] px-3 h-[50px]  rounded-md border-black  border-solid border-[1px] ' />
                                </label>
                                <label>Password:
                                    <input type="password" placeholder='password' name='password'  onChange={handleChange} className='w-[300px] px-3 h-[50px]  rounded-md border-black  border-solid border-[1px] ' />
                                </label>
                            </div>

                            <button
                                type='submit'
                                className='w-[220px] px-3 h-[40px] 0 rounded-2xl bg-blue-600 text-white  border-none mt-3 '>Register</button>
                        </div>

                    </form>
    
        </div>
    )
}
export default page