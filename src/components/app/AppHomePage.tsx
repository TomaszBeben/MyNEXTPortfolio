import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import type { NextPage } from 'next'
import styles from '../../styles/Home.module.scss'
import Link from 'next/link'
import Header from '../main/header/Header'
import Footer from '../main/footer/Footer'
import { submitReq } from '../utils/submitReq'

const AppHomePage: NextPage = ({ user }) => {
  const [posted, setPosted] = useState<boolean>(false)
  const {data} = useSession()
  const name: string | undefined = data?.user?.name?.toString()
  const email: string | undefined = data?.user?.email?.toString()
  useEffect(() => {
    if(!posted){
      setPosted(true)
      submitReq(name, email)
    }
}, [])
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome
        </h1>
        <h1 className={styles.title}>
          {user}
        </h1>

        <div className={styles.grid}>
          <Link href="/">
            <a className={styles.card}>
              <h2>BACK</h2>
              <p></p>
            </a>
          </Link>

          <Link href="app/main">
            <a className={styles.card}>
              <h2>MAIN</h2>
              <p></p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default AppHomePage