import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
   

    return (
        <div className='bg-gray-100 py-3 justify-between px-5 items-center relative flex w-full '>
            {/* <div className='items-center flex justify-center'> */}
                <Link href="/"
                className='items-center flex justify-center'
                >
                <Image src='/navlogo.jfif' alt=''
                    className='bg-black rounded-lg ml-2'
                    width={30}
                    height={30} />
                <h1 className='font-mono text-[30px] font-bold text-red-600'>EasyBank</h1>
                    </Link>
            {/* </div> */}
                    <Link href='signup'> Sign Up</Link>
        </div>
    )
}

export default Navbar