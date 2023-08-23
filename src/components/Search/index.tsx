import React from 'react'
import { BiSearch } from "react-icons/bi"

const Search = () => {
  return (
    <div className='flex lg:w-[50%] w-[70%] gap-[5px] mx-auto border-[2px] rounded-[15px] mt-[20px] overflow-hidden items-center focus:shadow-lg transition-shadow duration-[500] border-secondary'>
        <input 
            type="text" 
            placeholder='search post ..'
            className='w-[95%] h-full border-none outline-none p-[10px]' 
        />
        <BiSearch className="text-white text-[1rem]" />
    </div>
  )
}

export default Search