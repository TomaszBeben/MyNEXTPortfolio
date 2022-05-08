import { useSession, signIn, signOut } from "next-auth/react"

const AuthButton = () => {
    const {data: session} = useSession()
    const user = session?.user
    console.log(user);
    return (
        <>
           {user && (
               <>
                <button onClick={() => signOut()} >Sign Out</button>
               </>
           )}
           {!user && (
               <>
               <button onClick={() => signIn()} >Sign In</button>
               </>
           )}
        </>
    )
}

export default AuthButton