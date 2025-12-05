import { MyTemplate } from '../templates/myTemplate'
import styles from './settingsPage.module.css'

function SettingsPage() {
  return (
    <MyTemplate className={styles.home}>
      <h2>Configuraciones</h2>
    </MyTemplate>
    )
}

export { SettingsPage }