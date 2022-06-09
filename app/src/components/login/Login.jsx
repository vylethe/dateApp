import React from 'react'
import { useSelector } from "react-redux"
import LoginImage from '../../assets/login.jpg'
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"

export default function Login({handleSubmitForm, handleVerfyForm}) {

  const code = useSelector((state) => state.auth.code)
  console.log("code -1", code)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    // resolver: yupResolver(schema),
  })

  
  const submitForm = (data) => {
    console.log(data);  
    if (code) {
      handleVerfyForm && handleVerfyForm(data);
    } else {
      handleSubmitForm && handleSubmitForm(data)
    }
    
  }

  
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block'>
          <img className='w-full h-full object-cover' src={LoginImage} alt="" />
      </div>
      <div className='bg-gray-100 flex flex-col justify-center'>
          <form className='max-w-[400px] w-full mx-auto bg-white p-4' onSubmit={handleSubmit(submitForm)}>
              <h2 className='text-4xl font-bold text-center'>SAVVY.</h2>
              {!code && <div className='flex flex-col py-2'>
                  <label>Phone</label>
                  <input className='border p-2' type="text" {...register("phone_number")} placeholder="phone"/>
              </div>
              }

              {code && <div className='flex flex-col py-2'>
                  <label>Code</label>
                  <input className='border p-2' type="text" {...register("code")} placeholder="code"/>
              </div>}
              
              {!code && <button className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white'>Sign In</button>}
              {code && <button className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white'>Verify</button>}
          </form>
      </div>
    </div>
  )
}
