import { FC } from 'react'
import Link from "next/link"
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
    </ul>
  )
}

export default NavLists