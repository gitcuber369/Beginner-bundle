import React, { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0);

  const handleCountup = () => {
    setCount(count + 1);
  }
  const handleCountdown = () => {
    setCount(count - 1);
  }
  return (
    <div className='flex items-center justify-center pt-10'>
      <div className=' rounded-lg shadow-lg shadow-gray-900 dark:bg-gray-800/35 backdrop:blur-xl  text-center max-w-lg w-full'>
        <h1 className='text-4xl font-bold text-white pt-5'>Counter App</h1>
        <div className='text-6xl p-10 m-8 bg-black/30 backdrop-blur-sm text-white rounded-lg'>{count}</div>
        <div className='flex gap-20 justify-center p-10'>
        <button onClick={handleCountup} className='text-xl px-4 py-2 border-sm text-white bg-gray-500/30 backdrop-blur-xl rounded-full flex flex-wrap p-1 hover:shadow-lg'>UP</button>
        <button onClick={handleCountdown} className='text-xl px-4 py-2 border-sm text-white bg-gray-500/30 backdrop-blur-xl rounded-full flex flex-wrap p-1 hover:shadow-lg'>DOWN</button>

        </div>
      </div>
    </div>
  )
}

export default Counter;
