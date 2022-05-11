import { useRouter } from 'next/router'
import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

const homepage: NextPage = () => {
  return (
    <div className={styles.container}>

      <header className={styles.header}>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome<br/>
          tomek
        </h1>

        <div className={styles.grid}>
          <Link href="/">
            <a className={styles.card}>
              <h2>BACK</h2>
              <p></p>
            </a>
          </Link>

          <Link href="/">
            <a className={styles.card}>
              <h2></h2>
              <p></p>
            </a>
          </Link>
          <Link href="/">
            <a className={styles.card}>
              <h2></h2>
              <p></p>
            </a>
          </Link>
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