import React from 'react'
import { PostCard } from '..'

const UserPosts = () => {
  return (
    <section className='max-h-[450px] w-[90%] mt-[40px] mx-auto border-[2px] border-secondary rounded-[15px] p-[15px] overflow-y-scroll'>
        <div className='w-full grid lg:grid-cols-3 justify-items-center
         sm:grid-cols-2 grid-cols-1 items-center gap-y-[35px] gap-x-[35px]'>
           { [1,2,3,4,5,6,7,8].map(item => (
                <PostCard styles="min-h-[200px] w-[300px]" />
           )) }
        </div>
    </section>
  )
}

export default UserPosts