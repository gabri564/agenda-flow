import { Header } from './components/organisms/header'
import { Navbar } from './components/organisms/navbar'
import { MyTemplate } from './components/templates/myTemplate'
import { Routes, Route, useNavigate } from 'react-router-dom'
//PAGES
import { DashboardPage } from './components/pages/dashboardPage'
import { TanksPage } from './components/pages/tanksPage'
import { CalendarPage } from './components/pages/calendarPage'
import { RemindersPage } from './components/pages/remindersPage'
import { StatisticsPage } from './components/pages/statisticsPage'
import { SettingsPage } from './components/pages/settingsPage'
import { HelpPage } from './components/pages/helpPage'
import { ProfilePage } from './components/pages/profilePage'
import { Register } from './components/organisms/modaRegister'
import { Login } from './components/organisms/modalLogin'
import { Notifications } from './components/organisms/modalNotifications'
import { AuthService } from './services/authService'

//STYLES
import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [notifyOpen, setNotifyOpen] = useState(false)
  const [modalRegisterOpen, setModalRegisterOpen] = useState(false)
  const [navOpen, setNavOpen] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const navigate = useNavigate()

  // Cargar usuario al iniciar la app
  useEffect(() => {
    const user = AuthService.getCurrentUser()
    if (user) {
      (user)
    }
  }, [])

  // Callback cuando se hace login exitoso
  const handleLoginSuccess = (user) => {
    setCurrentUser(user)
    setModalIsOpen(false)
  }

  // Callback cuando se hace registro exitoso
  const handleRegisterSuccess = (user) => {
    setCurrentUser(user)
    setModalRegisterOpen(false)
  }

  // Callback para cerrar sesión
  const handleLogout = () => {
    AuthService.logout()
    setCurrentUser(null)
    navigate('/')
  }

  // Callback para actualizar usuario
  const handleUpdateUser = (updatedUser) => {
    setCurrentUser(updatedUser)
  }

  const pages = [
    {
      component: DashboardPage,
      path: '/'
    },
    {
      component: TanksPage,
      path: '/tanks'
    },
    {
      component: CalendarPage,
      path: '/calendar'
    },
    {
      component: RemindersPage,
      path: '/reminders'
    },
    {
      component: StatisticsPage,
      path: '/statistics'
    },
    {
      component: SettingsPage,
      path: '/settings'
    },
    {
      component: HelpPage,
      path: '/help'
    }
  ]

  return (
    <div className='layout'>
      <Navbar
        navOpen={navOpen}
        currentUser={currentUser}
        setNavOpen={setNavOpen} />
      <Header
        setNavOpen={setNavOpen}
        setModalIsOpen={setModalIsOpen}
        setNotifyOpen={setNotifyOpen}
        currentUser={currentUser}   
      />

      {modalIsOpen ? (
        <Login
          setModalIsOpen={setModalIsOpen}
          setModalRegisterOpen={setModalRegisterOpen}
          onLoginSuccess={handleLoginSuccess}
        />
      ) : ''}
      {notifyOpen ? <Notifications setNotifyOpen={setNotifyOpen} /> : ''}
      {modalRegisterOpen ? (
        <Register
          setModalRegisterOpen={setModalRegisterOpen}
          setModalIsOpen={setModalIsOpen}
          onRegisterSuccess={handleRegisterSuccess}
        />
      ) : ''}
      <MyTemplate>
        <Routes>
          {pages.map((page, index) => {
            return (
              <Route
                key={index}
                path={page.path}
                Component={page.component}
              />
            )
          })}
          <Route
            path="/profile"
            element={
              <ProfilePage
                currentUser={currentUser}
                onUpdateUser={handleUpdateUser}
                onLogout={handleLogout}
              />
            }
          />
        </Routes>
      </MyTemplate>
    </div>
  )
}

export default App