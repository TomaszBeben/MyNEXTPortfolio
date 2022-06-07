import { useState, useEffect } from "react"
import { useSession, getSession } from "next-auth/react"
import AppHomePage from "../../components/app/AppHomePage"
import { NextPage, NextPageContext } from "next"

const ProtectPageFunction: NextPage = ({props}) => {
  const [mounted, setMounted] = useState(false);
  const { data: session } = useSession()
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  console.log(session);


  if (session) {
    return (
      <>
        {
          props.data.map((e)=>{
            return(
              <div key={e._id}>
                <div>{e.name}</div>
                <div>{e.email}</div>
                <div>{e._id}</div>
              </div>
            )
          })}
      </>
    )
  }
}

export const getServerSideProps = async(context: NextPageContext) => {
  const session = await getSession(context)
  const res = await fetch(`http://localhost:3000/api/users`)
  const data = await res.json()
  // const test = await fetch(`http://localhost:3000/api/users/${id}`)
  // console.log(test);

  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false,
      },
    }
  }

  return {
    props: {
      session,
      props: data,
    }
  }
}

export default ProtectPageFunction