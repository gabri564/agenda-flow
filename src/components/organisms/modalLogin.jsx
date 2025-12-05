import { useState } from 'react'
import { Title } from '../atoms/titles'
import styles from './modalLogin.module.css'
import { Paragraph } from '../atoms/paragraph'
import { Link } from '../atoms/customLink'
import { Button } from '../atoms/button'
import { FormItem } from '../molecules/formItem'


function Login({ setModalIsOpen, setModalRegisterOpen }) {
  const formFields =[
    {
      text: 'Usuario',
      htmlFor: 'user',
      type: 'text',
      name:'user',
    },
    {
      text: 'Contraseña',
      htmlFor: 'password',
      type: 'password',
      name:'password',
    },
  ]

  const [isClosing, setIsClosing] = useState(false)

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setModalIsOpen(false)
    }, 400)
  }

  // Cerrar al hacer click fuera del modal
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }
  // Evitar que el click dentro del modal cierre el backdrop
  const handleModalClick = (e) => {
    e.stopPropagation()
  }

  const handleGoToRegister = () => {
  setIsClosing(true)
  setTimeout(() => {
    setModalIsOpen(false)
    setModalRegisterOpen(true)
  }, 400)
}


  return (
    <>
      <div
        className={`${styles.backdrop} ${isClosing ? styles.closing : ''}`}
        onClick={handleBackdropClick}
      >
        <div
          className={`${styles.containerLogin} ${isClosing ? styles.closing : ''}`}
          onClick={handleModalClick}
        >
          <form action="" className={styles.form}>
            <div className={styles.containerTitles}>
              <Title level='h3' variant='secondary' align='center'>
                Login
              </Title>
              <Paragraph align='center' size='small'>
                Ingresa para continuar con tu sesión segura
              </Paragraph>
            </div>
            <FormItem
              formFields={formFields}
              inputVariant="primary"
              inputAlign="left"
            />
            <Button
              type='submit'
              variant='secondary'
              text={'Enviar'}
            />
            <div className={styles.containerLinks}>
              <Link href='#' text={'olvide mi contraseña'} className={styles.link}/>
              <Link onClick={handleGoToRegister} text={'No tengo cuenta'} className={styles.link}/>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export { Login }