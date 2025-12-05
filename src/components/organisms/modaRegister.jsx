import { useState } from 'react'
import { Button } from '../atoms/button'
import { Title } from '../atoms/titles'
import styles from './modalRegister.module.css'
import { FormItem } from '../molecules/formItem'

function Register({setModalRegisterOpen}) {
  const [isClosee , setIsClosse] = useState (false)
  
    const hadleClosed = () =>{
      setIsClosse(true)
      setTimeout (() =>{
        setModalRegisterOpen(false)
      })
    }

    //cerrar el modal al hacer click fuera
    const handleBackdropClick = (e) => {
      if(e.target === e.currentTarget){
        hadleClosed()
      }
    } 

    //evitar cerrar modal al hacer clic en form
    const handleModalClick = (e) =>{
      e.stopPropagation()
    }

    const formFields = [
      {
        text :'Nombre',
        htmlFlor:'name',
        type: 'text',
        name: 'name',
        placeholder : 'Ingresa tu nombre'
      },
      {
        text :'Correo',
        htmlFlor:'email',
        type: 'email',
        name: 'email',
        placeholder : 'tucorreo@gamil.com'
      },
      {
        text :'Contraseña',
        htmlFlor:'passwd',
        type: 'password',
        name: 'passwd',
      },
      {
        text :'Repetir Contraseña',
        htmlFlor:'passwd',
        type: 'password',
        name: 'passwd',
      },
    ]

  return (
    <div onClick={handleBackdropClick} 
      className={`${styles.backdrop} ${isClosee ? styles.closing: ''}`}
    >
      <form 
        action=""
        onClick={handleModalClick}
        className={`${styles.form} ${isClosee ? styles.closing: ''}`}
      >
        <Title
          text={'Registrate'}
          level='h4'
          align='center'
        />
        <FormItem
          formFields={formFields}
          inputVariant="primary"
          inputAlign="left"
          inputSize='large'
        />
        <Button
        className={styles.btnRegister}
          text={'Registrarse'}
          variant='secondary'
          type='submit'
        />
      </form>
    </div>
    )
}

export { Register }