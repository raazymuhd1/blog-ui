"use client"
import { FC, useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import bgBlog from "@/assets/images/bg-blog.jpg"
import styles from "./NavLists.module.scss"

interface ILinks {
   id: number;
   active: boolean;
   title: string;
   url: string
}

const NavLists: FC = ()  => {
    const [links, setLinks] = useState<ILinks[]>([
      { id: 0, active: false, title: "Explore", url: "/" },
      { id: 1, active: false, title: "Create Post", url: "/create-post" },
      { id: 2, active: false, title: "Signup", url: "/signup" },
      { id: 3, active: false, title: "Signin", url: "/login" },
    ])

    /**
     * @dev handle active link based on state
     */
    const handleActiveLink = (linkId: number, idx: number) => {
       if(linkId === idx) {
         setLinks((prevLink: ILinks[]): ILinks[] => {
            const activeLink = prevLink[linkId];
            activeLink.active = true;
            console.log(activeLink)
            return prevLink;
          })
       }
    }

  return (
    <ul className={styles.lists_container}>
       { links.map((link, idx) => (
          <Link 
            key={link.id} href={link.url} 
            className={styles.list_item}
            onClick={() => handleActiveLink(link.id, idx)}
            > 
            { link.title }
           </Link>
       )) }
       {/* <Link href="/" className={styles.list_item}> Explore </Link>
       <Link href="/create-post" className={styles.list_item}> Create Post </Link>
       <Link href="/signup" className={styles.list_item}> Signup </Link>
       <Link href="/login" className={styles.list_item}> Login </Link> */}
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