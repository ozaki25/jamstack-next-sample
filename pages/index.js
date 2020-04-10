import { useEffect } from 'react'
import { useRouter } from 'next/router'

function Home() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/items')
  }, [])

  return (
    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  )
}

export default Home
