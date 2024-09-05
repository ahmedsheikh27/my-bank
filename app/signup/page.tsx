import React from 'react'

export const page = () => {
    return (
        <div className='h-screen w-full bg-white items-center flex justify-center py-3'>
            <div className='w-80 h-auto bg-white items-center m-3 flex flex-col p-3 rounded-md border-gray-300  border-solid border-[1px]'>
            <h1>
                Sign Up
            </h1>
                <div className='gap-5 mt-5 m-3  flex flex-col justify-between  '>
                    <label> Name:
                    <input type="text" placeholder='name' className='w-[300px] px-3 h-[50px] 0 rounded-md border-black  border-solid border-[1px]  ' />
                    </label>
                    <label> Email:
                <input type="email" placeholder='your@gmail.com'  className='w-[300px] px-3 h-[50px]  rounded-md border-black  border-solid border-[1px] ' />
                    </label>
                    <label>Password:
                <input type="password" placeholder='password'  className='w-[300px] px-3 h-[50px]  rounded-md border-black  border-solid border-[1px] ' />
                    </label>
                </div>
                <button className='w-[220px] px-3 h-[40px] 0 rounded-2xl bg-blue-600 text-white  border-none mt-3 '>Register</button>
            </div>

        </div>
    )
}
export default page