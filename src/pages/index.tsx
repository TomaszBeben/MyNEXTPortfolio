import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>TB</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome
        </h1>

        <p className={styles.description}>
          To My Portfolio
        </p>

        <div className={styles.grid}>
          <a href="/app" className={styles.card}>
            <h2>Share Board &rarr;</h2>
            <p>Share your info with your friends</p>
          </a>

          <a href="https://showyourself-tb.web.app" className={styles.card}>
            <h2>Show Yourself &rarr;</h2>
            <p>Create Your ultimate CV</p>
          </a>

          <a
            href="https://github.com/TomaszBeben"
            className={styles.card}
          >
            <h2>Github &rarr;</h2>
            <p>Check my Github</p>
          </a>

          <a
            href="https://www.linkedin.com/in/tomasz-bęben-1944021a2/"
            className={styles.card}
          >
            <h2>LinkedIn &rarr;</h2>
            <p>
              Reach me out if you want
            </p>
          </a>
          <a
            href="https://tbebenportfolio.web.app/#/"
            className={styles.card}
          >
            <h2>Portfolio &rarr;</h2>
            <p>
              my first deployed app
            </p>
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

export default Home
