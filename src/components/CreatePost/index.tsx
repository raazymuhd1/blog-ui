import React from 'react'
import { CustomBtn, TextField } from '@/components'

const CreatePost = () => {
  return (
    <div className='w-[90%] mx-auto min-h-[450px] p-[30px]'>
        <h2 className='md:text-[35px] text-[25px] text-secondary font-chibold font-bold md:text-center text-left'> Create Post </h2>

        <form className='flex flex-col gap-[25px] md:w-[50%] mt-[70px] w-[70%] h-full mx-auto'>
            <TextField 
              rest={{ id: "title", type: "text", placeholder: "title" }}
              styles=''
              htmlFor='title'
            />
            <div className=''>
                <label htmlFor="desc" className='font-patrick font-semibold md:text-[16px] text-[14px] text-secondary'> Description: </label>
                <textarea 
                    id="desc" 
                    rows={10} 
                    className='w-full border-[1px] rounded-[15px] border-secondary focus:outline-secondary focus:shadow-lg transition-shadow duration-500 p-[15px] placeholder:font-patrick font-normal placeholder:tracking-[1.5px] tracking-[1.5px]'
                    placeholder='description ..'
                />
            </div>

            <div className='flex flex-col gap-[20px]'>
                <input 
                    type="file" 
                    className='rounded-[10px] text-main tracking-[1px] cursor-pointer overflow-hidden bg-secondary w-[240px]' 
                />
                <CustomBtn 
                  title='Post' 
                  parentStyles='mt-[20px] w-[30%] self-end' 
                  btnStyles='w-full font-patrick font-semibold tracking-[1.5px] md:text-[18px] text-[16px] bg-secondary text-[#fff]' 
                />
            </div>
        </form>
    </div>
  )
}

export default CreatePost