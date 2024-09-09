'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export const Page = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
        name: '',
    });
    const [message, setMessage] = useState('');
    const [oldUser, setOldUser] = useState<null | { email: string; name: string }>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setOldUser(JSON.parse(storedUser));
        }
    }, []); // Add dependency array to run only once on mount

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { email, name, password } = user;
        if (!email || !password || !name) {
            setMessage('Please fill all inputs');
            alert('Please fill all inputs');
        } else {
            const newUser = localStorage.getItem('user');
            if (newUser) {
                const objUser = JSON.parse(newUser);
                if (objUser.email === email) {
                    setMessage('Email already exists');
                    alert(message);
                }
            }
            localStorage.setItem('user', JSON.stringify(user));
            setOldUser(user);
            setMessage('User is signed up');
            alert('User is signed up');
        }
        window.location.href = '/'
    };

    // const signOut = () => {
    //     setOldUser(null)
    //     // localStorage.removeItem('user')
    //     alert('User is Signed Out')
    // }

    return (
        <>
            <div className='h-screen w-full bg-white items-center flex justify-center py-3'>
                {oldUser ?

                    <div>
                        <h2>Welcome, {oldUser.name}!</h2>
                        <p>Your email: {oldUser.email}</p>
                        {/* <button
                onClick={signOut}
                type='submit'
                className='w-[220px] px-3 h-[40px] 0 rounded-2xl bg-blue-600 text-white  border-none mt-3 '>
                    SignOut</button> */}

                    </div>
                    :

                    <form onSubmit={handleRegister}>
                        <div className='w-80 h-auto bg-white items-center m-3 flex flex-col p-3 rounded-md border-gray-300  border-solid border-[1px]'>
                            <h1>
                                Sign Up
                            </h1>
                            <div className='gap-5 mt-5 m-3  flex flex-col justify-between  '>
                                <label> Name:
                                    <input type="text" placeholder='name' name='name' onChange={handleChange} className='w-[300px] px-3 h-[50px] 0 rounded-md border-black  border-solid border-[1px]  ' />
                                </label>
                                <label> Email:
                                    <input type="email" placeholder='your@gmail.com' name='email' onChange={handleChange} className='w-[300px] px-3 h-[50px]  rounded-md border-black  border-solid border-[1px] ' />
                                </label>
                                <label>Password:
                                    <input type="password" placeholder='password' name='password' onChange={handleChange} className='w-[300px] px-3 h-[50px]  rounded-md border-black  border-solid border-[1px] ' />
                                </label>
                            </div>

                            <button
                                type='submit'
                                className='w-[220px] px-3 h-[40px] 0 rounded-2xl bg-blue-600 text-white  border-none mt-3 '>Register</button>
                            <div className='flex mt-6'>
                                <p>Already have an account:</p>
                                <Link href='/login' className='text-blue-600'>LogIn</Link>
                                <p>here</p>
                            </div>
                        </div>

                    </form>
                }
            </div>
        </>
    )
}
export default Page