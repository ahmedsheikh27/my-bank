'use client'
import React, { useState } from 'react'
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
const Main = () => {
    const [cashInput, setCashInput] = useState(0)
    const [amount, setAmount] = useState('')
    const [withdraw, setWithdraw] = useState(0)
    const [deposit, setDeposit] = useState(0)
    const addAmount = () => {
        const cash = Number(amount)
        if (cash > 0) {
            setCashInput(balance => balance + cash)
                setDeposit(cash)
                setAmount('')
            } else {
                alert('Please enter a valid amount')
        }
    }
    const withdrawcash = () => {
        const cash = Number(amount)
        setCashInput(balance => {
            if (balance >= cash) {
                setWithdraw(cash)
                setAmount('')
                return balance - cash
            } else {
                alert('please enter a valid amount')
                return balance
            }
        })
    }
    return (
        <div className='flex flex-col w-full h-[400px] m-[30px]  justify-between items-center relative'>
            <h1 className='font-mono text-[40px] font-bold '>Ur Bank</h1>
            <h2 className='font-mono text-[20px] font-bold'>Cr Amount : ${cashInput}</h2>

            <div className='flex w-full m-[30px] justify-between '>
                {/*Deposit Cash */}
                <div className='flex flex-col shadow-md shadow-gray-400 bg-gray-100 h-[250px] w-[400px] justify-between items-center p-3 m-5 rounded-md'>
                    <h2 className='font-mono text-[20px] font-bold'>Deposit Cash</h2>
                    <input
                        className='w-full h-10 rounded-md px-2 text-gray-500 bg-gray-200'
                        type='number'
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder='Enter Amount...' />
                    <h2 className='font-mono text-[20px] font-bold'>Deposit Amount : ${deposit}</h2>

                    <button
                        onClick={addAmount}
                        className='w-full h-6 flex justify-center items-center bg-blue-800 rounded-xl py-4 text-white '>
                        Deposit Amount  <FaArrowTrendUp className='text-green-500' /> </button>
                </div>
                {/*Withdraw Cash */}
                <div className='flex flex-col shadow-md shadow-gray-400 bg-gray-100 h-[250px] w-[400px] justify-between items-center p-3 m-5 rounded-md'>
                    <h2 className='font-mono text-[20px] font-bold'>WithDraw Cash</h2>
                    <input
                        onChange={(e) => setAmount(e.target.value)}
                        type='number'
                        className='w-full h-10 rounded-md px-2 text-gray-500 bg-gray-200'
                        placeholder='Enter Amount...' />
                    <h2 className='font-mono text-[20px] font-bold'>WithDraw Amount :{withdraw} $</h2>

                    <button
                        onClick={withdrawcash}
                        className='w-full h-6 flex justify-center items-center bg-blue-800 rounded-xl py-4 text-white '>
                        WithDraw Amount  <FaArrowTrendDown className='text-red-500' /> </button>
                </div>
            </div>
        </div>
    )
}

export default Main