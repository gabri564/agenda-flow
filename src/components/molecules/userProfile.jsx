import { UserRound } from 'lucide-react'
import styles from './userProfile.module.css'
import { Link } from '../atoms/customLink'

function UserProfile() {
return (
    <Link 
      href='/profile'
      className={styles.profile}
    >
      <div className={styles.profileUser}>
        <UserRound size={'35px'}/>
      </div>
      <small 
        className={styles.ProfileName}
      >
        Wynsley Durán Salazar
      </small>
    </Link>
    )
}

export { UserProfile }