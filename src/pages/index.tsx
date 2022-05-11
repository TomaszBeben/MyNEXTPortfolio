import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import AuthButton from './app/_authButton'
import { useSession } from 'next-auth/react'

import { mainPageData } from '../temporaryDataToFetch/mainPageData'


const Home: NextPage = () => {
  const [user, setUser] = useState<string>('{user}')
  const { data: session } = useSession<boolean>()

  useEffect(() => {
    return session !== null ? setUser(session?.user?.name) : setUser('{user}')
  }, [session])

  console.log(session?.user?.name);

  return (
    <div className={styles.container}>
      <Head>
        <title>TB</title>
      </Head>

      <header className={styles.header}>
        <AuthButton />
      </header>

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

export default Home
