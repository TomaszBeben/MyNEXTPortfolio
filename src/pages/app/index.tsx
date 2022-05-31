import { useState, useEffect } from "react"
import { useSession, getSession } from "next-auth/react"
import AppHomePage from "../../components/app/AppHomePage"
import { NextPage, NextPageContext } from "next"

const ProtectPageFunction: NextPage = () => {
  const [mounted, setMounted] = useState(false);
  const { data: session } = useSession()
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;


  if (session) {
    return (
      <>
        <AppHomePage user={session.user?.name}/>
      </>
    )
  }
}

export const getServerSideProps = async(context: NextPageContext) => {
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