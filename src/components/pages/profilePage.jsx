import { MyTemplate } from '../templates/myTemplate'
import styles from './profilePage.module.css'

function ProfilePage() {
  return (
    <MyTemplate className={styles.profile}>
      <h2>My perfil</h2>
    </MyTemplate>
  )
}

export { ProfilePage }