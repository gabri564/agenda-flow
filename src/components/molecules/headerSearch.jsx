import { Search } from 'lucide-react'
import styles from './headerSearch.module.css'

function HeaderSearch() {
  return (
    <div className={styles.search}>
      <div className={styles.inputWrapper}>
        <Search className={styles.icon}/>
        <input 
          type="text" 
          placeholder='Buscar...'
          className={styles.input}
        />
      </div>
    </div>
  )
}

export { HeaderSearch }
