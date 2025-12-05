import { Paragraph } from '../atoms/paragraph'
import { Title } from '../atoms/titles'
import { MyTemplate } from '../templates/myTemplate'
import styles from './calendarPage.module.css'
import { Button } from '../atoms/button'
import { useState } from 'react'
import { Calendar } from '../organisms/calendarContent'
import { EnventDay } from '../organisms/calendarEventsDay'
import { ListEvents } from '../organisms/calendarListEvents'
import { NewEventModal } from '../organisms/modalNewEvent'

function CalendarPage() {
  const [formEventOpen, setFormEventOpen] = useState(false)
  const [fechaActual, setFechaActual] = useState(new Date(2025, 10, 25))
  const hoy = new Date().toISOString().split("T")[0]
  const [diaSeleccionado, setDiaSeleccionado] = useState(hoy)
  
  const [eventos, setEventos] = useState([
    {
      id: 1,
      titulo: "Workshop de desarrollo",
      fecha: "2025-11-25",
      horaInicio: "11:00",
      horaFin: "13:00",
      lugar: "Lab 2",
      categoria: "Capacitación"
    },
    {
      id: 2,
      titulo: "Reunión de equipo",
      fecha: "2025-11-15",
      horaInicio: "09:00",
      horaFin: "10:30",
      lugar: "Sala de conferencias",
      categoria: "Reunión"
    },
    {
      id: 3,
      titulo: "Presentación de proyecto",
      fecha: "2025-11-18",
      horaInicio: "15:00",
      horaFin: "17:00",
      lugar: "Auditorio principal",
      categoria: "Presentación"
    },
    {
      id: 4,
      titulo: "Almuerzo con cliente",
      fecha: "2025-11-22",
      horaInicio: "13:00",
      horaFin: "14:30",
      lugar: "Restaurante Central",
      categoria: "Social"
    }
  ])

  const handleEventOpen = (e) => {
    e.preventDefault()
    setFormEventOpen(true)
  }

  const agregarEvento = (nuevoEvento) => {
    const evento = {
      id: eventos.length + 1,
      ...nuevoEvento
    }
    setEventos([...eventos, evento])
  }

  const obtenerEventosDelDia = (dia) => {
    const fechaBuscada = typeof dia === 'number' 
      ? `${fechaActual.getFullYear()}-${String(fechaActual.getMonth() + 1).padStart(2, '0')}-${String(dia).padStart(2, '0')}`
      : dia
    return eventos.filter(evento => evento.fecha === fechaBuscada)
  }

  const tienEventos = (dia) => {
    return obtenerEventosDelDia(dia).length > 0
  }

  const eliminarEvento = (id) => {
    setEventos(eventos.filter(e => e.id !== id))
  }

  const eventosDelDia = obtenerEventosDelDia(diaSeleccionado)

  return (
    <MyTemplate className={styles.calendar}>
      {formEventOpen ? (
        <NewEventModal 
          setFormEventOpen={setFormEventOpen} 
          agregarEvento={agregarEvento}
          fechaActual={fechaActual}
        />
      ) : ''}
      
      <div className={styles.header}>
        <div className={styles.containerTitles}>
          <Title level='h3' align='left'>Calendario</Title>
          <Paragraph size='mediumm'>Visualiza tus eventos y reuniones</Paragraph>
        </div>
        <Button
          variant='default'
          text={'+ Nuevo Evento'}
          onClick={handleEventOpen}
          className={styles.btnEvents}
        />
      </div>
      <div className={styles.containerCalendar}>
        {/* CALENDARIO COMPONENTE */}
        <Calendar 
          fechaActual={fechaActual}
          setFechaActual={setFechaActual}
          diaSeleccionado={diaSeleccionado}
          setDiaSeleccionado={setDiaSeleccionado}
          tienEventos={tienEventos}
        />
        <EnventDay 
          diaSeleccionado={diaSeleccionado}
          eventosDelDia={eventosDelDia}
        />
        <ListEvents
          eventos={eventos}
          eliminarEvento={eliminarEvento}
        />
      </div>
    </MyTemplate>
  )
}

export { CalendarPage }