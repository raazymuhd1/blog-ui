"use client"
import { useState } from 'react'
import { NavLists } from "@/components"
import styles from "./Header.module.scss"
import { FiMenu } from "react-icons/fi"
import { GrClose } from "react-icons/gr"

const Header = () => {
     const [open, setOpen] = useState(false)

  return (
    <header className={styles.header}>
        <nav className={styles.nav}>
           <h2 className={styles.heading}> GraphBlog </h2>
           <div className={styles.navlist}>
             <NavLists />
           </div>

          <FiMenu 
            className="font-[25px] text-white md:hidden cursor-pointer"
            onClick={() => setOpen(true)}
            />
        </nav>

        { open && (
          <div className={styles.mobileNav_container}>
              <div className={styles.mobile_top}>
                <h2 className={styles.heading}> GraphBlog </h2>
                <GrClose 
                  className="font-[25px] text-white"
                  onClick={() => setOpen(false)}
                  />
              </div>

              <NavLists />
          </div>
        ) }
    </header>
  )
}

export default Header