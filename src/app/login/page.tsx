import React from 'react'
import { TextField, CustomBtn } from '@/components'
import Link from "next/link"

const Login = () => {
  return (
    <div className='signin_bg flex h-screen w-full flex-col justify-center'>
        <form 
        className='flex flex-col h-[400px] gap-[15px] lg:w-[40%] min-h-[250px] w-[60%] border-[1px] border-secondary hover:shadow-lg transition-shadow duration-500 rounded-[20px] mx-auto overflow-hidden p-[20px] form'>
            <TextField 
              rest={{ id: "email", type: "email", placeholder: "email" }}
              styles=''
              htmlFor='email'
              />
            <TextField 
              rest={{ id: "password", type: "password", placeholder: "password" }}
              styles=''
              htmlFor='password'
              />

              <div className="flex flex-col gap-[15px]">
                <CustomBtn 
                  title='Signin' 
                  parentStyles='mt-[20px] w-[30%]' 
                  btnStyles='w-full font-patrick font-semibold tracking-[1.5px] md:text-[18px] text-[16px] bg-secondary text-[#fff]' 
                />
                <p className='font-patrick md:text-[16px] text-[14px] font-normal'> 
                  Don't  have an account? 
                  <Link href="/signup" className='font-patrick font-semibold italic text-secondary underline'> Signup </Link> 
                </p>
              </div>
      </form>
    </div>
  )
}

export default Login