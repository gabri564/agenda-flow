import { useState, useId } from 'react';
import { MyTemplate } from '../templates/myTemplate';
import styles from './helpPage.module.css';
import { Title } from "../atoms/titles";
import { Paragraph } from "../atoms/paragraph";
import { 
  Book, 
  NotepadText, 
  Search, 
  Video, 
  HelpCircle, 
  ChevronRight, 
  Mail, 
  Phone, 
  MessageCircle, 
  FileSpreadsheet 
} from 'lucide-react';

/**
 * Fuentes de datos estáticas (Definidas fuera del componente para optimizar rendimiento)
 */
const HELP_CARDS = [
  { Icon: Book, title: "Guía de Usuario", description: "Documentación completa de la aplicación" },
  { Icon: Video, title: "Video Tutoriales", description: "Aprende con videos paso a paso" },
  { Icon: NotepadText, title: "Notas de Versión", description: "Últimas actualizaciones y mejoras" }
];

const FAQ_ITEMS = [
  { question: '¿Cómo creo una nueva tarea?', answer: 'Haz clic en el botón "Nueva Tarea"...' },
  { question: '¿Puedo sincronizar con mi calendario?', answer: 'Sí, puedes sincronizar tus eventos con Google Calendar...' },
  { question: '¿Cómo configuro recordatorios recurrentes?', answer: 'Al crear un recordatorio selecciona "Repetir"...' },
  { question: '¿Puedo compartir tareas con otros usuarios?', answer: 'Sí, usa la función de colaboración...' }
];

const DOCUMENTATION_ITEMS = [
  { Icon: FileSpreadsheet, title: "Gestión de tareas", description: "Aprende a crear, editar y priorizar tus tareas de forma efectiva desde el panel de control principal." },
  { Icon: FileSpreadsheet, title: "Configurar recordatorios", description: "Nunca olvides una entrega importante activando notificaciones push, alertas sonoras y avisos por correo." },
  { Icon: FileSpreadsheet, title: "Personalización", description: "Ajusta la aplicación a tu gusto modificando el tema visual, colores de etiquetas y comportamiento de las vistas." },
  { Icon: FileSpreadsheet, title: "Uso del calendario", description: "Programa, arrastra y gestiona todos tus eventos de manera visual mediante la integración de la vista mensual y semanal." },
  { Icon: FileSpreadsheet, title: "Análisis de estadísticas", description: "Interpreta tu productividad real a través de métricas avanzadas y gráficos de completitud de tareas semanales." },
  { Icon: FileSpreadsheet, title: "Seguridad y privacidad", description: "Protege tu información personal configurando contraseñas seguras, encriptación local y verificación en dos pasos." }
];

function HelpPage() {
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);
  const [activeDocIndex, setActiveDocIndex] = useState(null); 
  const baseId = useId();

  const handleToggleFaq = (index) => {
    setActiveFaqIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleToggleDoc = (index) => {
    setActiveDocIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const supportChannels = [
    { 
      Icon: Mail, 
      title: "Email", 
      description: "soporteagenda@gmail.com", 
      actionLabel: "Enviar Email", 
      isPrimary: false,
      onClick: () => {
        window.location.href = "mailto:soporteagenda@gmail.com?subject=Soporte%20Desde%20Centro%20de%20Ayuda";
      }
    },
    { 
      Icon: Phone, 
      title: "Teléfono", 
      description: "+1 (123) 456-7890", 
      actionLabel: "Llamar Ahora", 
      isPrimary: false,
      onClick: () => {
        window.location.href = "tel:+11234567890";
      }
    },
    { 
      Icon: MessageCircle, 
      title: "Chat", 
      description: "Chatear ahora mismo", 
      actionLabel: "Chatear", 
      isPrimary: true,
      onClick: () => {
        console.log("Iniciando sesión de chat de soporte...");
      }
    }
  ];

  return (
    <MyTemplate className={styles.home}>
      <section aria-labelledby="help-center-title">
        <div className={styles.mainWrapper}>
          
          {/* Header Section */}
          <header className={styles.container}>
            <Title id="help-center-title" level='h3'>Centro de Ayuda</Title>
            <Paragraph variant='secondary'>Encuentra respuestas y obtén soporte técnico</Paragraph>
          </header>

          {/* Search Bar */}
          <div className={styles.containerMax}>
            <div className={styles.containerGlass} role="search">
              <Search aria-hidden="true" className={styles.searchIcon} />
              <Paragraph variant="secondary">Busca tu pregunta...</Paragraph>
            </div>
          </div>

          {/* Help Categorization Cards */}
          <nav className={styles.helpCardsContainer} aria-label="Categorías de ayuda">
            {HELP_CARDS.map(({ Icon, title, description }, index) => (
              <article key={`${baseId}-help-${index}`} className={styles.helpCard}>
                <Icon aria-hidden="true" />
                <Title level='h4'>{title}</Title>
                <Paragraph variant='secondary'>{description}</Paragraph>
              </article>
            ))}
          </nav>

          {/* FAQ Section */}
          <div className={styles.faqSection}>
            <div className={styles.faqHeader}>
              <Title level='h4'>Preguntas Frecuentes</Title>
            </div>

            <div className={styles.faqList}>
              {FAQ_ITEMS.map(({ question, answer }, index) => {
                const isExpanded = activeFaqIndex === index;
                return (
                  <div key={`${baseId}-faq-${index}`} className={`${styles.faqItem} ${isExpanded ? styles.faqItemOpen : ''}`}>
                    <button 
                      onClick={() => handleToggleFaq(index)} 
                      className={styles.faqButton}
                      aria-expanded={isExpanded}
                    >
                      <Paragraph>{question}</Paragraph>
                      <ChevronRight className={isExpanded ? styles.chevronOpen : styles.chevronClosed} aria-hidden="true" />
                    </button>

                    {isExpanded && (
                      <div className={styles.faqAnswer}>
                        <Paragraph variant='secondary'>{answer}</Paragraph>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Support and Contact Section */}
            <section className={styles.supportSection} aria-labelledby="support-contact-title">
              <div className={styles.supportHeader}>
                <HelpCircle aria-hidden="true" />
                <Title id="support-contact-title" level='h4'>Contacto de Soporte</Title>
              </div>

              <div className={styles.supportList}>
                {supportChannels.map(({ Icon, title, description, actionLabel, isPrimary, onClick }, index) => (
                  <div key={`${baseId}-support-${index}`} className={styles.supportCard}>
                    <div className={styles.supportIconBox}><Icon aria-hidden="true" /></div>
                    <div className={styles.supportContent}>
                      <div className={styles.supportTitle}>{title}</div>
                      <div className={styles.supportPara}>{description}</div>
                      <div className={styles.supportActions}>
                        <button 
                          onClick={onClick} 
                          className={isPrimary ? styles.supportBtnPrimary : styles.supportBtn}
                        >
                          {actionLabel}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Documentation Feed */}
              <div className={styles.documentationList}>
                {DOCUMENTATION_ITEMS.map(({ Icon, title, description }, index) => {
                  const isDocExpanded = activeDocIndex === index;
                  return (
                    <div 
                      key={`${baseId}-doc-${index}`} 
                      className={`${styles.documentationWrapper} ${isDocExpanded ? styles.docItemOpen : ''}`}
                    >
                      <button 
                        className={styles.documentationItem} 
                        onClick={() => handleToggleDoc(index)}
                        aria-expanded={isDocExpanded}
                      >
                        <div className={styles.docIconBox}><Icon aria-hidden="true" /></div>
                        <div className={styles.docContent}>
                          <div className={styles.docTitle}>{title}</div>
                        </div>
                        <ChevronRight className={isDocExpanded ? styles.chevronOpen : styles.chevronClosed} aria-hidden="true" />
                      </button>

                      {isDocExpanded && (
                        <div className={styles.docAnswer}>
                          <Paragraph variant='secondary'>{description}</Paragraph>
                        </div>
                      )}
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