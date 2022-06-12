import { useState, useEffect } from "react"
import { useSession, getSession } from "next-auth/react"
import AppHomePage from "../../components/app/AppHomePage"
import { NextPage, NextPageContext } from "next"
import { submitReq } from '../../components/utils/submitReq'

const ProtectPageFunction: NextPage = () => {
  const [mounted, setMounted] = useState(false);
  const { data: session } = useSession()
  const [posted, setPosted] = useState < boolean > (false)
  const name: string | undefined = session?.user?.name?.toString()
  const email: string | undefined = session?.user?.email?.toString()
  const [user, setUser] = useState()

  useEffect(() => {
    if (!posted) {
      setPosted(true)
      submitReq(name, email)
    } else {
      setPosted(false)
    }
    setMounted(true)

    const fetchData = async () => {
      const data = await fetch(`http://localhost:3000/api/users`)
      const res = await data.json()
      setUser(res.data[0])
    }
    fetchData()
  }, [user])
  if (!mounted) return null;
  if (session) {
    return (
      <>
        {
          user === undefined
          ?<div>no data!</div>
          :<div>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user._id}</div>
          </div>
        }
      </>
    )
  }
}

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false,
      },
    }
  }

  return {
    props: { session }
  }
}

export default ProtectPageFunction