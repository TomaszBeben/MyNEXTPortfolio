import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../../styles/Home.module.scss'
import Link from 'next/link'
import Header from '../main/header/Header'
import Footer from '../main/footer/footer'

const AppHomePage: NextPage = () => {
  return (
    <div className={styles.container}>

      <Header/>

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

      <Footer/>
    </div>
  )
}

export default AppHomePage