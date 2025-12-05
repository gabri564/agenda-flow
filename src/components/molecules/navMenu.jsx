import { NavLInk } from '../atoms/navLink';
import styles from './navMenu.module.css'
import {
  LayoutDashboard,
  CheckSquare,
  CalendarDays,
  AlarmClock,
  BarChart3,
  Settings,
  HelpCircle,
} from "lucide-react";

function NavMenu() {
  const menu =[
    {
      text: 'Inicio',
      href:'/',
      icon: <LayoutDashboard/>
    },
    {
      text: 'Tareas',
      href:'/tanks',
      icon: <CheckSquare/>
    },
    {
      text: 'Calendario',
      href:'/calendar',
      icon: <CalendarDays/>
    },
    {
      text: 'Recordatorios',
      href:'/reminders',
      icon: <AlarmClock/>
    },
    {
      text: 'Estadísticas',
      href:'/statistics',
      icon: <BarChart3/>
    },
    {
      text: 'Configuración',
      href:'/settings',
      icon: <Settings/>
    },
    {
      text: 'Ayuda',
      href:'/help',
      icon: <HelpCircle/>
    },
  ]
  return (
    <ul className={styles.menu}>
      {
        menu.map((item, i) =>{
          return (
            <li key={i}>
              <NavLInk
                href={item.href}
                className={styles.item}
              >
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </NavLInk>
            </li>
          )
        })
      }
    </ul>
  )
}

export { NavMenu }