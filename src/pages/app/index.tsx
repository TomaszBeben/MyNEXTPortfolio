import { useSession, getSession } from "next-auth/react"
import AppHomePage from "../../components/app/AppHomePage"
import { useRouter } from "next/router"

const ProtectPageFunction = () => {
  const { data: session } = useSession()
  if (typeof window === "undefined") return null

  if (session) {
    return (
      <>
        <AppHomePage/>
      </>
    )
  }
}

export const getServerSideProps = async(context) => {
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