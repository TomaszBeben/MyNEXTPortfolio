import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

import { mainPageData } from '../temporaryDataToFetch/mainPageData'
import Footer from '../components/main/footer/footer'
import Header from '../components/main/header/Header'


const Home: NextPage = () => {
  const [user, setUser] = useState<string>('{user}')
  const { data: session } = useSession<boolean>()

  useEffect(() => {
    return session !== null ? setUser(session?.user?.name) : setUser('{user}')
  }, [session])

  return (
    <div className={styles.container}>
      <Head>
        <title>TB</title>
      </Head>
      <Header/>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome<br />
          {user}
        </h1>

        <p className={styles.description}>
          To My NEXT Portfolio
        </p>

        <div className={styles.grid}>

          {mainPageData.map((elem) => {
            return (
              <Link key={elem.id} href={elem.href} >
                <a className={styles.card}>
                  <h2>{elem.name} &rarr;</h2>
                  <p>{elem.description}</p>
                </a>
              </Link>
            )
          })}
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default Home
