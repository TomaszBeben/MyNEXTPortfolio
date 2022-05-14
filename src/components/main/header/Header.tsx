import AuthButton from '../../utils/AuthButton'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
        <AuthButton />
      </header>
  )
}

export default Header