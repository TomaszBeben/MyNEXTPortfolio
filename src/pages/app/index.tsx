import { useSession, getSession } from "next-auth/react"
import AppHomePage from "../../components/app/AppHomePage"
import { useRouter } from "next/router"
import { NextPage, NextPageContext } from "next"

const ProtectPageFunction: NextPage = () => {
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