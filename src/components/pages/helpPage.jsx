import { useState } from 'react';
import { MyTemplate } from '../templates/myTemplate';
import styles from './helpPage.module.css';
import { Title } from '../atoms/titles';
import { Paragraph } from '../atoms/paragraph';
import { Book, NotepadText, Video, Mail, Phone, MessageCircle, FileSpreadsheet } from 'lucide-react';
import { HelpSearch } from '../molecules/helpSearch';
import { HelpCards } from '../molecules/helpCards';
import { HelpFaq } from '../molecules/helpFaq';
import { HelpSupport } from '../molecules/helpSupport';
import { HelpDocumentation } from '../molecules/helpDocumentation';

/**
 * Fuentes de datos estáticas (Definidas fuera del componente para optimizar rendimiento)
 */
const HELP_CARDS = [
  { Icon: Book, title: 'Guía de Usuario', description: 'Documentación completa de la aplicación' },
  { Icon: Video, title: 'Video Tutoriales', description: 'Aprende con videos paso a paso' },
  { Icon: NotepadText, title: 'Notas de Versión', description: 'Últimas actualizaciones y mejoras' }
];

const FAQ_ITEMS = [
  { question: '¿Cómo creo una nueva tarea?', answer: 'Haz clic en el botón "Nueva Tarea"...' },
  { question: '¿Puedo sincronizar con mi calendario?', answer: 'Sí, puedes sincronizar tus eventos con Google Calendar...' },
  { question: '¿Cómo configuro recordatorios recurrentes?', answer: 'Al crear un recordatorio selecciona "Repetir"...' },
  { question: '¿Puedo compartir tareas con otros usuarios?', answer: 'Sí, usa la función de colaboración...' }
];

const DOCUMENTATION_ITEMS = [
  { Icon: FileSpreadsheet, title: 'Gestión de tareas', description: 'Aprende a crear, editar y priorizar tus tareas de forma efectiva desde el panel de control principal.' },
  { Icon: FileSpreadsheet, title: 'Configurar recordatorios', description: 'Nunca olvides una entrega importante activando notificaciones push, alertas sonoras y avisos por correo.' },
  { Icon: FileSpreadsheet, title: 'Personalización', description: 'Ajusta la aplicación a tu gusto modificando el tema visual, colores de etiquetas y comportamiento de las vistas.' },
  { Icon: FileSpreadsheet, title: 'Uso del calendario', description: 'Programa, arrastra y gestiona todos tus eventos de manera visual mediante la integración de la vista mensual y semanal.' },
  { Icon: FileSpreadsheet, title: 'Análisis de estadísticas', description: 'Interpreta tu productividad real a través de métricas avanzadas y gráficos de completitud de tareas semanales.' },
  { Icon: FileSpreadsheet, title: 'Seguridad y privacidad', description: 'Protege tu información personal configurando contraseñas seguras, encriptación local y verificación en dos pasos.' }
];

function HelpPage() {
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);
  const [activeDocIndex, setActiveDocIndex] = useState(null);

  const handleToggleFaq = (index) => {
    setActiveFaqIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleToggleDoc = (index) => {
    setActiveDocIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const supportChannels = [
    {
      Icon: Mail,
      title: 'Email',
      description: 'soporteagenda@gmail.com',
      actionLabel: 'Enviar Email',
      isPrimary: false,
      onClick: () => {
        window.location.href = 'mailto:soporteagenda@gmail.com?subject=Soporte%20Desde%20Centro%20de%20Ayuda';
      }
    },
    {
      Icon: Phone,
      title: 'Teléfono',
      description: '+51 921 844 151',
      actionLabel: 'Llamar Ahora',
      isPrimary: false,
      onClick: () => {
        window.location.href = 'tel:+51 921 844 151';
      }
    },
    {
      Icon: MessageCircle,
      title: 'Chat',
      description: 'Chatear ahora mismo',
      actionLabel: 'Chatear',
      isPrimary: true,
      onClick: () => {
        console.log('Iniciando sesión de chat de soporte...');
      }
    }
  ];

  return (
    <MyTemplate className={styles.home}>
      <section aria-labelledby="help-center-title">
        <div className={styles.mainWrapper}>
          <header className={styles.container}>
            <Title id="help-center-title" level="h3">Centro de Ayuda</Title>
            <Paragraph variant="secondary">Encuentra respuestas y obtén soporte técnico</Paragraph>
          </header>

          <HelpSearch />

          <HelpCards cards={HELP_CARDS} />

          <HelpFaq items={FAQ_ITEMS} activeIndex={activeFaqIndex} onToggle={handleToggleFaq} />

          <HelpSupport channels={supportChannels} />

          <HelpDocumentation items={DOCUMENTATION_ITEMS} activeIndex={activeDocIndex} onToggle={handleToggleDoc} />
        </div>
      </section>
    </MyTemplate>
  );
}

export { HelpPage };