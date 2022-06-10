import { useState, useEffect } from "react"
import { useSession, getSession } from "next-auth/react"
import AppHomePage from "../../components/app/AppHomePage"
import { NextPage, NextPageContext } from "next"
import {submitReq} from '../../components/utils/submitReq'

const ProtectPageFunction: NextPage = () => {
  const [user, setUser] = useState()
  const [mounted, setMounted] = useState(false);
  const { data: session } = useSession()
  const [posted, setPosted] = useState<boolean>(false)
  const name: string | undefined = session?.user?.name?.toString()
  const email: string | undefined = session?.user?.email?.toString()

  useEffect(()=>{
    if(!posted){
      setPosted(true)
      submitReq(name, email)
    }else{
      setPosted(false)
    }
    setMounted(true)

    const fetchData = async () => {
      const data = await fetch(`http://localhost:3000/api/users`);
      const res = await data.json()
      setUser(res)
   }
   fetchData()
  }, [])

  if (!mounted) return null;
  if (session) {
    return (
      <>
        {
          (user !== undefined) ? user.data.map((e)=>{
            return(
              <div key={e._id}>
                <div>{e.name}</div>
                <div>{e.email}</div>
                <div>{e._id}</div>
              </div>
            )
          })
          :<div>no data to display</div>}
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
    props: {session}
  }
}

export default ProtectPageFunction