import React from 'react'
import { TextField, CustomBtn } from '..'

const ProfileUpdate = () => {
  return (
    <form className='md:w-[40%] mt-[60px] w-[70%] mx-auto min-h-[450px] flex flex-col gap-[25px]'>
            <TextField 
              rest={{ id: "username", type: "text", placeholder: "username" }}
              styles=''
              htmlFor='username'
            />
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
            <CustomBtn 
                title='Update' 
                parentStyles='mt-[20px] w-[30%]' 
                btnStyles='w-full font-patrick font-semibold tracking-[1.5px] md:text-[18px] text-[16px] bg-secondary text-[#fff]' 
            />
    </form>
  )
}

export default ProfileUpdate