import { useSession, signIn, signOut } from "next-auth/react"

const AuthButton = () => {
    const { data: session } = useSession()
    const user = session?.user
    return (
        <>
            {user
                ? <button onClick={() => signOut()} >Sign Out</button>
                : <button onClick={() => signIn()} >Sign In</button>
            }
        </>
    )
}

export default AuthButton