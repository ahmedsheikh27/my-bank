import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
    return (
        <div className='bg-gray-100 py-3 w-full flex '>
            <div className='items-center flex '>
                <Link href="/"
                className='items-center flex '
                >
                <Image src='/navlogo.jfif' alt=''
                    className='bg-transparent rounded-lg ml-2'
                    width={30}
                    height={30} />
                <h1 className='font-mono text-[30px] font-bold text-red-600'>EasyBank</h1>
                    </Link>
            </div>
        </div>
    )
}

export default Navbar