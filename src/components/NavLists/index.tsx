import { FC } from 'react'
import Image from "next/image"
import Link from "next/link"
import bgBlog from "@/assets/images/bg-blog.jpg"
import styles from "./NavLists.module.scss"

interface IProps {
   mobile: boolean;
}

const NavLists: FC = ()  => {
  return (
    <ul className={styles.lists_container}>
       <Link href="/" className={styles.list_item}> Explore </Link>
       <Link href="/create-post" className={styles.list_item}> Create Post </Link>
       <Link href="/signup" className={styles.list_item}> Signup </Link>
       <Link href="/login" className={styles.list_item}> Login </Link>
        <Link href="/profile" className=''>
            <Image 
                src={bgBlog} width={50} 
                height={50} className='w-[40px] h-[40px] object-cover rounded-[50%]' 
                alt="profile-img" />
        </Link>
    </ul>
  )
}

export default NavLists