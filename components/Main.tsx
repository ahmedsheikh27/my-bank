import React from 'react'

const Main = () => {
    // const [amount, setAmount] = useState()
    return (
        <div className='flex w-full m-[30px] bg-slate-400 justify-between'>
            <div className='flex flex-col bg-gray-100 h-[200px] w-[300px] justify-between items-center p-3 m-5 rounded-md'>  {/*Deposit Cash */}
                <input
                    placeholder='Enter Amount...' />
                <button>Deposit Amount </button>
            </div>
            <div>  {/*Withdraw Cash */}
                <input
                    placeholder='Enter Amount...' />
                <button>WithDraw Amount </button>
            </div>
        </div>
    )
}

export default Main