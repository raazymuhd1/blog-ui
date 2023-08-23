import React from 'react'
import {Search, PostCard, Categories} from "@/components"

const headingStyle = 'lg:text-[35px] text-[26px] font-chibold font-semibold text-center md:text-left text-secondary'

const postParentStyle = 'mt-[30px] w-full flex flex-wrap items-center justify-center md:justify-start gap-[25px]'


const Explore = () => {
  return (
    <section className='h-full w-[90%] mx-auto'> 
        <header className='w-[100%]'>
            <Search />
        </header>
        <article className='flex md:flex-row flex-col justify-between items-start gap-[20px] p-[20px] mt-[40px] w-full'>
            {/* display posts */}
            <div className='w-[80%]'>
                <h2 className={`${headingStyle}`}> Newest Posts </h2>
                
                <div className={`${postParentStyle}`}>
                    { [0,1,2,3,4].map(item => (
                        <PostCard />
                    )) }
                </div>

                <h2 className={`${headingStyle} mt-[60px]`}> Last Week Posts </h2>
                <div className={`${postParentStyle}`}>
                    { [0,1,2,3,4].map(item => (
                        <PostCard />
                    )) }
                </div>
            </div>

            {/* categories posts */}
            <aside className='sticky w-[20%] top-[200px] right-0'>
                <h2 className='lg:text-[18px] text-[16px] font-chibold font-semibold text-secondary'> * Categories </h2>

                <div 
                    className='flex flex-col gap-[10px] outline w-full mt-[20px] min-h-[350px] outline-offset-[8px] outline-[#f1eaea] bg-[#ebdfdf] outline-[2px] rounded-[10px] p-[15px]'>
                    { [0,1,2,3,].map(item => (
                        <Categories />
                    )) }
                </div>

            </aside>
        </article>

    </section>
  )
}

export default Explore