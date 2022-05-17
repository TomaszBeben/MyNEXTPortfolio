import { useSession, getSession } from "next-auth/react"
import AppHomePage from "../../components/app/AppHomePage"
import { useRouter } from "next/router"

const ProtectPageFunction = () => {
  const router = useRouter()
  const { data: session } = useSession()

  if (typeof window === "undefined") return null

  if (session) {
    return (
      <>
        <AppHomePage/>
      </>
    )
  }
  return (
    <>
    
    </>
  )
}

export const getServerSideProps = async(context) => {

  console.log(context);

  return {
    props: {
      session: await getSession(context),
    },
  }
}

export default ProtectPageFunction