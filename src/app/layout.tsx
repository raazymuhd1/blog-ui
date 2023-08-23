"use client"
import { Footer, Header } from '@/components'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { usePathname } from "next/navigation"


export const metadata: Metadata = {
  title: 'GraphBlog',
  description: 'building a simple blog using mern stack and grapqhl api',
}

export default function RootLayout({ children }: {
  
  children: React.ReactNode
}) {
  const path = usePathname()
  const login: string = "/login"
  const signup: string = "/signup"

    console.log(path)

  return (
    <html lang="en">
      <body>
        
        { !(path == signup || path == login) && (
          <Header />
         ) }  
        <main>
            {children}
        </main>

         { !(path == signup || path == login) && (
            <Footer />
         ) }
      </body>
    </html>
  )
}
