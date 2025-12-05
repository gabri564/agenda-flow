import { Menu } from 'lucide-react';
import { HeaderSearch } from '../molecules/headerSearch'
import { HeaderUser } from '../molecules/headerUser'
import styles from './header.module.css'

function Header({ setModalIsOpen, setNotifyOpen, setNavOpen }) {

  return (
    <>
      <header className={styles.header}>
        
        {/* BOTÓN HAMBURGUESA */}
        <button 
          className={styles.hamburger}
          onClick={() => setNavOpen(prev => !prev)}
        >
          <Menu size={28}/>
        </button>

        <HeaderSearch />

        <HeaderUser
          setModalIsOpen={setModalIsOpen}
          setNotifyOpen={setNotifyOpen}
        />
      </header>
    </>
  )
}

export { Header }
