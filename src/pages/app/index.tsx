import { useState } from 'react'
import { useRouter } from 'next/router'
import { signIn } from "next-auth/react"
import type { NextPage, NextRouter } from 'next'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

const homepage: NextPage = () => {

  const router: NextRouter = useRouter()//TEST
  console.log(router);//TEST
  const [user, setUser] = useState < string > ('{user}')
  // console.log(signIn);

  return (
    <div className={styles.container}>

      <header className={styles.header}>
        <button onClick={()=>signIn()} >
          {'{login}'}
        </button>
        <button onClick={router.back} >{'{back}'}</button>
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