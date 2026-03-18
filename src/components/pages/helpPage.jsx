import { useState } from 'react';
import { MyTemplate } from '../templates/myTemplate';
import styles from './helpPage.module.css';
import { Title } from "../atoms/titles";
import { Paragraph } from "../atoms/paragraph";
import { Book, NotepadText, Search, Video, HelpCircle, ChevronRight, Mail, Phone, MessageCircle, FileSpreadsheet } from 'lucide-react';

function HelpPage() {

  const [openIndex, setOpenIndex] = useState(null);

  const listAyuda = [
    { icono: Book, titulo: "Guía de Usuario", paraf: "Documentación completa de la aplicación" },
    { icono: Video, titulo: "Video Tutoriales", paraf: "Aprende con videos paso a paso" },
    { icono: NotepadText, titulo: "Notas de Versión", paraf: "Últimas actualizaciones y mejoras" }
  ];

  const faqs = [
    { pregunta: '¿Cómo creo una nueva tarea?', respuesta: 'Haz clic en el botón "Nueva Tarea"...' },
    { pregunta: '¿Puedo sincronizar con mi calendario?', respuesta: 'Sí, puedes sincronizar tus eventos con Google Calendar...' },
    { pregunta: '¿Cómo configuro recordatorios recurrentes?', respuesta: 'Al crear un recordatorio selecciona "Repetir"...' },
    { pregunta: '¿Puedo compartir tareas con otros usuarios?', respuesta: 'Sí, usa la función de colaboración...' }
  ];

  const listsoporte = [
    { icono: Mail, titulo: "Email", paraf: "soporteagenda@gmail.com" },
    { icono: Phone, titulo: "Telefono", paraf: "123-456-7890" },
    { icono: MessageCircle, titulo: "Chat", paraf: "Chatear ahora mismo", button: "Chatear" }
  ];

  const listdocument = [
    { icono: FileSpreadsheet, titulo: "Gestion de tareas", paraf: "Aprende a crear y gestionar tareas" },
    { icono: FileSpreadsheet, titulo: "Configurar recordatorios", paraf: "Nunca olvides una tarea importante" },
    { icono: FileSpreadsheet, titulo: "Personalizacion", paraf: "Ajusta la aplicación a tu gusto" },
    { icono: FileSpreadsheet, titulo: "Uso del calendario", paraf: "Programa y gestiona tus eventos" },
    { icono: FileSpreadsheet, titulo: "Analisis de estadísticas", paraf: "Interpreta tu productividad" },
    { icono: FileSpreadsheet, titulo: "Seguridad y privacidad", paraf: "Protege tu información personal" }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <MyTemplate className={styles.home}>
      <section>

        {/* === WRAPPER DE ANCHO EXACTO COMO LA IMAGEN === */}
        <div className={styles.mainWrapper}>

          <div className={styles.container}>
            <Title level='h3'>Centro de Ayuda</Title>
            <Paragraph variant='secondary'>Encuentra respuestas y obtén soporte</Paragraph>
          </div>

          <div className={styles.containerMax}>
            <div className={styles.containerGlass}>
              <aside><Search /></aside>
              <aside><Paragraph>Busca tu pregunta...</Paragraph></aside>
            </div>
          </div>

          {/* Tarjetas de ayuda */}
          <div className={styles.helpCardsContainer}>
            {listAyuda.map((item, index) => {
              const Icono = item.icono;
              return (
                <div key={index} className={styles.helpCard}>
                  <Icono />
                  <aside>{item.titulo}</aside>
                  <aside>{item.paraf}</aside>
                </div>
              );
            })}
          </div>

          {/* FAQs */}
          <div className={styles.faqSection}>
            <div className={styles.faqHeader}>

              <Title level='h4'>Preguntas Frecuentes</Title>
            </div>

            <div className={styles.faqList}>
              {faqs.map((faq, index) => (
                <div key={index} className={`${styles.faqItem} ${openIndex === index ? styles.faqItemOpen : ''}`}>
                  <button onClick={() => toggleFAQ(index)} className={styles.faqButton}>
                    <Paragraph>{faq.pregunta}</Paragraph>
                    <ChevronRight className={openIndex === index ? styles.chevronOpen : styles.chevronClosed} />
                  </button>

                  {openIndex === index && (
                    <div className={styles.faqAnswer}>
                      <Paragraph variant='secondary'>{faq.respuesta}</Paragraph>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Sección de Soporte */}
            <div className={styles.supportSection}>
              <div className={styles.supportHeader}>
                <HelpCircle />
                <Title level='h4'>Contacto de Soporte</Title>
              </div>

              <div className={styles.supportList}>
                {listsoporte.map((item, index) => {
                  const Icono = item.icono;
                  const isChat = item.button && item.button.toLowerCase().includes('chat');
                  return (
                    <div key={index} className={styles.supportCard}>
                      <div className={styles.supportIconBox}><Icono /></div>
                      <div className={styles.supportContent}>
                        <div className={styles.supportTitle}>{item.titulo}</div>
                        <div className={styles.supportPara}>{item.paraf}</div>
                        <div className={styles.supportActions}>
                          <button className={isChat ? styles.supportBtnPrimary : styles.supportBtn}>
                            {item.button || (item.titulo === 'Email' ? 'Enviar Email' : item.titulo === 'Telefono' ? 'Llamar Ahora' : 'Acción')}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Documentación */}
              <div className={styles.documentationList}>
                {listdocument.map((item, index) => {
                  const Icono = item.icono;
                  return (
                    <div key={index} className={styles.documentationItem}>
                      <div className={styles.docIconBox}><Icono /></div>
                      <div className={styles.docContent}>
                        <div className={styles.docTitle}>{item.titulo}</div>
                        <div className={styles.docPara}>{item.paraf}</div>
                      </div>
                      <ChevronRight />
                    </div>

                  );
                })}

                {/* Estado del Sistema */}
                <div className={styles.systemStatusBox}>
                  <div className={styles.systemStatusTitle}>Estado del Sistema</div>
                  <div className={styles.systemStatusCard}>
                    <div className={styles.systemStatusLeft}>
                      <div className={styles.systemStatusIcon}></div>
                      <span className={styles.systemStatusText}>Todos los sistemas operativos</span>
                    </div>
                    <span className={styles.systemStatusUpdate}>
                      Última actualización: hace 2 minutos
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MyTemplate>
  );
}

export { HelpPage }