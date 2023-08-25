"use client"
import React, { FC, useState } from 'react'
import Image from "next/image"
import profile from "@/assets/images/user-profile.jpg"
import { ProfileUpdate, ProfileTab, UserPosts } from '..'

const Profile: FC = () => {
    const [activeTab, setActiveTab] = useState<boolean>(false)
     const [leftTab, setLeftTab] = useState<boolean>(true)
     const [rightTab, setRightTab] = useState<boolean>(false)

  return (
    <section className='w-full flex flex-col'>

        <div className="flex flex-col items-center justify-center gap-[20px] w-full h-[450px] profile_banner bg-no-repeat bg-cover">
            <Image src={profile} width={100} 
              height={150} alt='profile-img' 
              className='w-[150px] h-[150px] shadow_box object-cover rounded-[50%] z-[1]'
              />
              <div className='flex flex-col items-center z-[1]'>
                 <h2 className='md:text-[30px] text-[16px] font-patrick font-bold text-secondary text_shadow'> Alina Zakharev </h2>
                 <p className='md:text-[20px] text-[14px] font-patrick font-medium text-[#9d9292] text_shadow'> Web Developer </p>
              </div>
        </div>

         <ProfileTab
            leftTab={leftTab}
            rightTab={rightTab}
            setLeftTab={setLeftTab}
            setRightTab={setRightTab}
          />

          { leftTab && !rightTab && (
            <ProfileUpdate />
          ) }

          { rightTab && !leftTab && (
             <UserPosts />
          ) }
    </section>
  )
}

export default Profile