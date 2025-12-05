import { useState } from 'react'
import { Button } from '../atoms/button'
import { Paragraph } from '../atoms/paragraph'
import { Title } from '../atoms/titles'
import { MyTemplate } from '../templates/myTemplate'
import styles from './tanksPage.module.css'
import { ModalNewTask } from '../organisms/modalNewTask'
import { Select } from '../atoms/select'
import { EllipsisVertical } from 'lucide-react'

function TanksPage() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Reunión con equipo',
      description: 'Planificación del proyecto Q1',
      hour: '11:30',
      category: 'Reuniones',
      priority: 'Alta',
      completed: false
    },
    {
      id: 2,
      title: 'Actualizar documentación',
      description: 'Documentar nuevas funcionalidades',
      hour: '14:00',
      category: 'Trabajo',
      priority: 'Media',
      completed: false
    },
    {
      id: 3,
      title: 'Llamada con cliente',
      description: 'Seguimiento de proyecto actual',
      hour: '16:00',
      category: 'Clientes',
      priority: 'Media',
      completed: false
    }
  ])

  const [newTaskOpen, setNewTaskOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('hoy')
  const [showFilters, setShowFilters] = useState(false)
  const [taskMenuOpen, setTaskMenuOpen] = useState(null)
  const [editingTask, setEditingTask] = useState(null)
  const [filters, setFilters] = useState({
    priority: 'all',
    category: 'all'
  })

  const handleTaskOpen = (e) => {
    e.preventDefault()
    setNewTaskOpen(true)
  }

  const addTask = (newTask) => {
    const task = {
      id: Date.now(),
      ...newTask,
      completed: false
    }
    setTasks([...tasks, task])
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
    setTaskMenuOpen(null)
  }

  const editTask = (updatedTask) => {
    setTasks(tasks.map(task =>
      task.id === updatedTask.id ? { ...task, ...updatedTask } : task
    ))
    setEditingTask(null)
  }

  const handleMenuToggle = (id, e) => {
    e.stopPropagation()
    setTaskMenuOpen(taskMenuOpen === id ? null : id)
  }

  const handleEditClick = (task, e) => {
    e.stopPropagation()
    setEditingTask(task)
    setNewTaskOpen(true)
    setTaskMenuOpen(null)
  }

  const handleDeleteClick = (id, e) => {
    e.stopPropagation()
    if (window.confirm('¿Estás seguro de eliminar esta tarea?')) {
      deleteTask(id)
    }
  }

  const getFilteredTasks = () => {
    let filtered = tasks

    if (activeTab === 'completadas') {
      filtered = filtered.filter(task => task.completed)
    } else if (activeTab === 'hoy') {
      filtered = filtered.filter(task => !task.completed)
    }

    if (filters.priority !== 'all') {
      filtered = filtered.filter(task => task.priority === filters.priority)
    }
    if (filters.category !== 'all') {
      filtered = filtered.filter(task => task.category === filters.category)
    }

    return filtered
  }

  const getPriorityClass = (priority) => {
    return `${styles.taskPriority} ${styles['priority-' + priority.toLowerCase()]}`
  }

  const filteredTasks = getFilteredTasks()
  const pendingTasks = tasks.filter(t => !t.completed).length
  const completedTasks = tasks.filter(t => t.completed).length
  const totalTasks = tasks.length

  return (
    <MyTemplate className={styles.tasks}>
      {newTaskOpen && (
        <ModalNewTask
          setNewTaskOpen={setNewTaskOpen}
          addTask={editingTask ? editTask : addTask}
          editingTask={editingTask}
          onClose={() => {
            setNewTaskOpen(false)
            setEditingTask(null)
          }}
        />
      )}
      <div className={styles.header}>
        <div className={styles.containerTitles}>
          <Title level='h3' align='left' text={'Tareas'} />
          <Paragraph size='medium' text={'Gestiona tus tareas diarias'} />
        </div>
        <Button
          variant='default'
          text={'+ Nueva Tarea'}
          onClick={handleTaskOpen}
          className={styles.btnTasks}
        />
      </div>

      <div className={styles.tabsContainer}>
        <div className={styles.tabsHeader}>
          <div className={styles.tabs}>
            <Button
              className={`${styles.tab} ${activeTab === 'hoy' ? styles.active : ''}`}
              onClick={() => setActiveTab('hoy')}
              text={'Hoy'}
            />
            <Button
              className={`${styles.tab} ${activeTab === 'semana' ? styles.active : ''}`}
              onClick={() => setActiveTab('semana')}
              text={'Esta Semana'}
            />
            <Button
              className={`${styles.tab} ${activeTab === 'completadas' ? styles.active : ''}`}
              onClick={() => setActiveTab('completadas')}
              text={' Completadas'}
            />
          </div>
          <Button
            className={styles.btnFilters}
            onClick={() => setShowFilters(!showFilters)}
            text={'Filtros'}
          />
        </div>

        {showFilters && (
          <div className={styles.filtersPanel}>
            <div className={styles.filterGroup}>
              <Paragraph
                text={'Prioridad'}
                size='medium'
              />
              <Select
                value={filters.priority}
                onChange={(e) => setFilters({ ...filters, priority: e.target.value })}
                options={[
                  { value: 'all', label: 'Todas' },
                  { value: 'Alta', label: 'Alta' },
                  { value: 'Media', label: 'Media' },
                  { value: 'Baja', label: 'Baja' }
                ]}
                variant='secondary'
                size='small'
              />
            </div>
            <div className={styles.filterGroup}>
              <Paragraph
                text={'Categoría'}
                size='medium'
              />
              <Select
                value={filters.category}
                onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                options={[
                  { value: 'all', label: 'Todas' },
                  { value: 'Trabajo', label: 'Trabajo' },
                  { value: 'Personal', label: 'Personal' },
                  { value: 'Reuniones', label: 'Reuniones' },
                  { value: 'Clientes', label: 'Clientes' }
                ]}
                variant='secondary'
                size='small'
              />
            </div>
          </div>
        )}
      </div>

      {/* Lista de Tareas */}
      <div className={styles.tasksListContainer}>
        <div className={styles.tasksList}>
          {filteredTasks.length === 0 ? (
            <div className={styles.emptyState}>
              <small>No hay tareas para mostrar</small>
            </div>
          ) : (
            filteredTasks.map(task => (
              <div key={task.id} className={styles.taskCard}>
                <div className={styles.taskContent}>
                  <div className={styles.contentCard}>
                    <input
                      type="checkbox"
                      className={styles.taskCheckbox}
                      checked={task.completed}
                      onChange={() => toggleTask(task.id)}
                    />
                    <div className={styles.taskInfo}>
                      <Title
                        className={` ${task.completed ? styles.completed : ''}`}
                        text={task.title}
                        level='h4'
                      />
                      <Paragraph
                        className={` ${task.completed ? styles.completed : ''}`}
                        text={task.description}
                        size='small'
                      />
                      <div className={styles.taskMeta}>
                        <span className={styles.taskHour}> {task.hour}</span>
                        <span className={styles.taskCategory}>{task.category}</span>
                        <span className={getPriorityClass(task.priority)}>
                          {task.priority === 'Alta' && '🔴'}
                          {task.priority}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.taskMenuContainer}>
                    <span
                      className={styles.taskMenu}
                      onClick={(e) => handleMenuToggle(task.id, e)}
                    >
                    <EllipsisVertical size={16} color='var(--color-blue)'/>
                    </span>
                    
                    {taskMenuOpen === task.id && (
                      <div className={styles.taskMenuDropdown}>
                        <Button
                          variant='secondary'
                          text={'Editar'}
                          onClick={(e) => handleEditClick(task, e)}
                        />
                        <Button
                        variant='secondary'
                          text={'Eliminar'}
                          onClick={(e) => handleDeleteClick(task.id, e)}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Estadísticas */}
      <div className={styles.statsContainer}>
        <div className={`${styles.statCard} ${styles.pending}`}>
          <div className={styles.statInfo}>
            <h3>Tareas Pendientes</h3>
            <p>{pendingTasks}</p>
          </div>
        </div>
        <div className={`${styles.statCard} ${styles.completed}`}>
          <div className={styles.statInfo}>
            <h3>Completadas</h3>
            <p>{completedTasks}</p>
          </div>
        </div>
        <div className={`${styles.statCard} ${styles.total}`}>
          <div className={styles.statInfo}>
            <h3>Total</h3>
            <p>{totalTasks}</p>
          </div>
        </div>
      </div>
    </MyTemplate>
  )
}

export { TanksPage }