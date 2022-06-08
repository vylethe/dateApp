import React from 'react'
import LoginImage from '../assets/login.jpg'

export default function Login() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block'>
          <img className='w-full h-full object-cover' src={LoginImage} alt="" />
      </div>
      <div className='bg-gray-100 flex flex-col justify-center'>
          <form className='max-w-[400px] w-full mx-auto bg-white p-4'>
              <h2 className='text-4xl font-bold text-center'>SAVVY.</h2>
              <div className='flex flex-col py-2'>
                  <label>Phone</label>
                  <input className='border p-2' type="text" />
              </div>
              <div className='flex flex-col py-2'>
                  <label>Code</label>
                  <input className='border p-2' type="text" />
              </div>
              <button className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white'>Sign In</button>
          </form>
      </div>
    </div>
  )
}
