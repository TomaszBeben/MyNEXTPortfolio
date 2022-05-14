import Image from 'next/image'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <a href="https://github.com/TomaszBeben">
          Created by{' '}
          <span className={styles.logo}>
            <Image src="/logo.svg" alt="Logo" width={18} height={18} />
          </span>
        </a>
      </footer>
  )
}

export default Footer