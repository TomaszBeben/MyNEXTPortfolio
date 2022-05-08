import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { mainPageData } from '../temporaryDataToFetch/mainPageData'

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>TB</title>
      </Head>

      <header className={styles.header}>
        <button>{'{login}'}</button>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome
        </h1>

        <p className={styles.description}>
          To My NEXT Portfolio
        </p>

        <div className={styles.grid}>

          {mainPageData.map((elem) => {
            return (
              <a key={elem.id} href={elem.href} className={styles.card}>
                <h2>{elem.name} &rarr;</h2>
                <p>{elem.description}</p>
              </a>
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
