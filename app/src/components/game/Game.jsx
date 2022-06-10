import React from 'react'

export default function Game({playGameInit}) {

  const handleInit = () => {
    playGameInit && playGameInit();
  }

  return (
    <>
      <div className='border border-rose-600 grid grid-cols-1 h-60 w-full'>
          <button className='rounded-full w-40 h-12 bg-blue-300 font-semibold' onClick={handleInit}>Play</button>
          <button className='rounded-full w-40 h-12 bg-blue-300 font-semibold'>Search</button>
      </div>
      <div className='grid grid-cols-3 h-60 w-70'>
        <div className='border border-indigo-600'>
        </div>
        <div className='border border-indigo-600'>
        </div>
        <div className='border border-indigo-600'>
        </div>
      </div>
    </>
  )
}
