import { useState } from 'react'
import { useRouter } from 'next/router'
import type { NextPage, NextRouter } from 'next'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { useSession, signIn, signOut } from "next-auth/react"
import AuthButton from './_authButton'

const homepage: NextPage = () => {

  // const router: NextRouter = useRouter()//TEST
  const [user, setUser] = useState < string > ('{user}')

  return (
    <div className={styles.container}>

      <header className={styles.header}>
        <AuthButton/>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome {user}
        </h1>

        <div className={styles.grid}>
          <a href="/" className={styles.card}>
            <h2>BACK</h2>
            <p></p>
          </a>

          <a href="" className={styles.card}>
            <h2></h2>
            <p></p>
          </a>
          <a href="" className={styles.card}>
            <h2></h2>
            <p></p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://github.com/TomaszBeben">
          Created by{' '}
          <span className={styles.logo}>
            <Image src="/logo.svg" alt="Logo" width={18} height={18} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default homepage