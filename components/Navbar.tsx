'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
    const [user, setUser] = useState<null | { email: string; name: string }>(null);


    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, [])

    const signOut = () => {
        setUser(null)
        localStorage.removeItem('user')
        alert('User is Sign Out')
    }

    return (
        <div className='bg-gray-100 py-3 justify-between px-5 items-center relative flex w-full '>
            {/* <div className='items-center flex justify-center'> */}
            <Link href="/"
                className='items-center flex justify-center'
            >
                <Image src='/navlogo.jfif' alt='image'
                    className='bg-black rounded-lg ml-2'
                    width={30}
                    height={30} />
                <h1 className='font-mono text-[30px] font-bold text-red-600'>EasyBank</h1>
            </Link>
            {/* </div> */}
            {user ?
                <button
                    onClick={signOut}
                    type='submit'
                    className=' p-2  rounded-md bg-red-600 text-white  border-none mt-3'>
                    Sign Out</button>

                :
                <div className='flex justify-between'> 
                <Link href='/signin'
                    className=' p-2 rounded-md bg-gray-400 mr-3 hover:bg-orange-400 text-white border-none mt-3'>
                    Log In</Link>
                <Link href='signup'
                    className=' p-2 rounded-md bg-blue-600 text-white  border-none mt-3'>
                    Sign Up</Link>
                        </div>
            }
        </div>
    )
}

export default Navbar