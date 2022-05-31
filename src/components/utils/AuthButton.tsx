import { useSession, signIn, signOut } from "next-auth/react"
import { NextPage } from "next"

const AuthButton: NextPage = () => {
    const { data: session } = useSession()
    const user = session?.user
    return (
        <>
            {user
                ? <button onClick={() => {signOut(); global.localStorage.clear() }} >Sign Out</button>
                : <button onClick={() => signIn()} >Sign In</button>
            }
        </>
    )
}

export default AuthButton