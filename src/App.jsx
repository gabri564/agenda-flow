import { Header } from './components/organisms/header'
import { Navbar } from './components/organisms/navbar'
import { MyTemplate } from './components/templates/myTemplate'
import { Routes, Route} from 'react-router'
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

//STYLES
import './App.css'
import { useState } from 'react'

function App() {
  const [modalIsOpen, setModalIsOpen]= useState (false)
  const [ notifyOpen , setNotifyOpen] = useState(false)
  const [modalRegisterOpen, setModalRegisterOpen] = useState(false)
  const [navOpen, setNavOpen] = useState(false);

  const pages =[
    {
      element: DashboardPage,
      path: '/'
    },
    {
      element:TanksPage ,
      path: '/tanks'
    },
    {
      element: CalendarPage,
      path: '/calendar'
    },
    {
      element:RemindersPage ,
      path: '/reminders'
    },
    {
      element:StatisticsPage ,
      path: '/statistics'
    },
    {
      element:SettingsPage ,
      path: '/settings'
    },
    {
      element: HelpPage,
      path: '/help'
    },
    {
      element: ProfilePage,
      path: '/profile'
    },
  ]

  return (
    <div className='layout'>
      <Navbar navOpen={navOpen} setNavOpen={setNavOpen}/>
      <Header setNavOpen={setNavOpen} setModalIsOpen={setModalIsOpen} setNotifyOpen={setNotifyOpen}/>
      {modalIsOpen ? <Login setModalIsOpen={setModalIsOpen} setModalRegisterOpen={setModalRegisterOpen} /> : ''}
      {notifyOpen ? <Notifications setNotifyOpen={setNotifyOpen} /> : ''}
      {modalRegisterOpen? <Register setModalRegisterOpen={setModalRegisterOpen}/> : ''}
      <MyTemplate>
        <Routes>
          {
            pages.map((page)=>{
              return(
                <Route
                  path={page.path}
                  element={<page.element />}
                />
              )
            })
          }
        </Routes>
      </MyTemplate>
    </div>
  )
}

export default App
