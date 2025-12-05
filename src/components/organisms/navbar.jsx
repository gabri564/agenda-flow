import { Logo } from '../molecules/Logo'
import { NavMenu } from '../molecules/navMenu'
import { UserProfile } from '../molecules/userProfile'
import styles from './navbar.module.css'

function Navbar({ navOpen }) {
  return (
    <nav className={`${styles.navbar} ${navOpen ? styles.open : ''}`}>
      <Logo/>
      <NavMenu/>
      <UserProfile/>

    </nav>
  )
}

export { Navbar }
