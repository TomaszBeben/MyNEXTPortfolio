import { useSession, getSession } from "next-auth/react"
import AppHomePage from "../../components/app/AppHomePage"

export default function ProtectPageFunction() {
  const { data: session } = useSession()

  if (typeof window === "undefined") return null

  if (session) {
    return (
      <>
        <AppHomePage/>
      </>
    )
  }
  return <p>Access Denied</p>
}

export const getServerSideProps = async(context) => {
  return {
    props: {
      session: await getSession(context),
    },
  }
}