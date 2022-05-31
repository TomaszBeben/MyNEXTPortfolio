import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import type { NextPage } from 'next'
import styles from '../../styles/Home.module.scss'
import Link from 'next/link'
import Header from '../main/header/Header'
import Footer from '../main/footer/Footer'

const AppHomePage: NextPage = ({ user }) => {
  const {data} = useSession()
  const name = data?.user?.name?.toString()
  const email = data?.user?.email?.toString()
  useEffect(() => {
    const submitReq = async () => {
      const req = await fetch('http://localhost:3000/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }
    submitReq()
}, [name, email])
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

          <Link href="app/test">
            <a className={styles.card}>
              <h2>TEST</h2>
              <p></p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default AppHomePage

// export async function getServerSideProps() {
//   const res = await fetch('http://localhost:3000/api/users')
//   const data = await res.json()

//   return {
//     props: {
//       data: data.data
//     }
//   }
// }