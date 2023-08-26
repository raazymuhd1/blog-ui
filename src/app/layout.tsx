"use client"
import { Profiler } from "react"
import { Footer, Header } from '@/components'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { usePathname } from "next/navigation"
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// PROFILE USE TO IDENTIFY PARTS OF AN APP THAT SLOW DOWN THE APP

export const metadata: Metadata = {
  title: 'GraphBlog',
  description: 'building a simple blog using mern stack and grapqhl api',
}

// INITIALIZE APOLLO CLIENT
const client = new ApolloClient({
   uri: "http://localhost:8000/graphql",
   cache: new InMemoryCache()
})

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
        <ApolloProvider client={client}>
            { !(path == signup || path == login) && (
              <Profiler 
                id="header" 
                onRender={(id,
                phase,
                actualDuration,
                baseDuration, 
                startTime, 
                commitTime, 
                interactions) => console.log(actualDuration)}
                >
                <Header />
              </Profiler>
            ) }
                <main>
                  {children}
                </main>

            { !(path == signup || path == login) && (
              <Footer />
              ) }
        </ApolloProvider>   
      </body>
    </html>
  )
}
