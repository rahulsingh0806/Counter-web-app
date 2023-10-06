import { useState } from 'react';

export default function Counter() {
    
    const [count, setCount] = useState(0);
    function decreaseHandler() {
        setCount(count - 1);
    }

    function increaseHandler() {
        setCount(count + 1);
    }

    function resetCount() {
        setCount(0);
    }
    return (
        <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center gap-10 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 ...">
            <div className="text-[white] text-5xl font-medium ">Increment && Decrement</div>
            <div className="flex flex-row justify-center items-center rounded-md bg-white py-2 gap-12 text-[25px] text-[black]">
                <button onClick={decreaseHandler} className='border-r-2 text-center w-20 border-[black] text-5xl pb-2'>-</button>
                <div className='font-bold gap-12 text-4xl text-center'>{count}</div>
                <button onClick={increaseHandler} className='border-l-2 text-center w-20 border-[black] text-5xl pb-2'>+</button>
            </div>
            <button onClick={resetCount} className='w-50 bg-[black] text-white px-6 py-2 text-2xl rounded-md font-medium'>Reset</button>
        </div>
    )
}