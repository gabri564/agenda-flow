import { Bell, Calendar, Clock, EllipsisVertical } from "lucide-react";
import { MyTemplate } from "../templates/myTemplate";
import styles from "./dashboardPage.module.css";
import { Paragraph } from "../atoms/paragraph";

function DashboardPage() {
  // Lista de resumenes
  const stats = [
    { icon: Clock, value: 5, label: "Tareas pendientes" },
    { icon: Calendar, value: 5, label: "Eventos hoy" },
    { icon: Bell, value: 5, label: "Recordatorios" },
  ];

  // Lista de tareas del dia
  const tareas = [
    {
      input: <input type="checkbox" />,
      titulo: "Revisar correos pendientes",
      mensaje: "Responder emails importantes",
      hora: "9.00",
    },
    {
      input: <input type="checkbox" />,
      titulo: "Reunion con equipo",
      mensaje: "Planificacion del proyecto Q1",
      hora: "11.00",
    },
    {
      input: <input type="checkbox" />,
      titulo: "Actualizar documentación",
      mensaje: "Documentar nuevas funcionalidades",
      hora: "5.00",
    },
    {
      input: <input type="checkbox" />,
      titulo: "Llamada con cliente",
      mensaje: "Seegimiento del proyecto actual",
      hora: "8.00",
    },
    {
      input: <input type="checkbox" />,
      titulo: "Comprar material de oficina",
      mensaje: "Papeleria y suministros",
      hora: "9.00",
    },
  ];

  // Lista de recordatorios
  const recordatorio = [
    {
      iconn: Bell,
      titlee: "Comprar material de oficina",
      mesash: "Papeleria y suministros",
    },
    {
      iconn: Bell,
      titlee: "Comprar material de oficina",
      mesash: "Papeleria y suministros",
    },
    {
      iconn: Bell,
      titlee: "Comprar material de oficina",
      mesash: "Papeleria y suministros",
    },
  ];

  //Lista de eventos proximos

  const eventsProx = [
    {
      icon: Calendar,
      fecha: "15 Nov",
      titulo: "Reunion con equipo",
      hora: "10.00 - 12.00",
      parrafo: "En la sala de conferencias",
    },
    {
      icon: Calendar,
      fecha: "15 Nov",
      titulo: "Reunion con equipo",
      hora: "10.00 - 12.00",
      parrafo: "En la sala de conferencias",
    },
    {
      icon: Calendar,
      fecha: "15 Nov",
      titulo: "Reunion con equipo",
      hora: "10.00 - 12.00",
      parrafo: "En la sala de conferencias",
    },
  ];

  return (
    // Primer apartado
    <MyTemplate className={styles.home}>
      <div className={styles.scrollContent}>
        <h2> Bienbenido de nuevo</h2>
        <Paragraph size="large" className={styles.titleForm}>
          Aqui esta tu resumen del dia
        </Paragraph>

        <section className={styles.cards}>
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <div className={styles.card}>
                <div className={styles.info_card}>
                  <Icon className={styles.icon} />
                  <aside>{item.value}</aside>
                </div>
                <p>{item.label}</p>
              </div>
            );
          })}
        </section>

        <section className={styles.tareasCard}>
          <div className={styles.container_tasks_reminders}>
            <div className={styles.container_tasks}>
              <div className={styles.tareasCard_title}>
                <div className={styles.textCard}>
                  <p>Tareas del Día</p>
                  <span className={styles.textCard_options}>
                    <EllipsisVertical />
                  </span>
                </div>
              </div>

              <div className={styles.listaTareas}>
                <div className={styles.listas}>
                  {tareas.map((tarea, index) => (
                    <div key={index} className={styles.tarea}>
                      <div className={styles.tareas_check}>{tarea.input}</div>

                        <div className={styles.info}>
                          <h4>{tarea.titulo}</h4>
                          <p>{tarea.mensaje}</p>
                        </div>

                      <div className={styles.tareasHora}>
                        <span>{tarea.hora}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.container_reminders}>
            <div className={styles.tareasCard_title}>
              <div className={styles.textCard}>
                <p>Recordatorio</p>
                <span className={styles.reminders_icon}>
                  <EllipsisVertical />
                </span>
              </div>
              <div className={styles.card_recordatorio}>
                {recordatorio.map((item, index) => {
                  const Icon = item.iconn;

                  return (
                    <div key={index} className={styles.recordatorioCard}>
                      <div className={styles.reminders_cont}>
                        <span>
                          <Icon />
                        </span>
                      </div>
                      <div className={styles.recordatori_info}>
                        <h4>{item.titlee}</h4>
                        <p>{item.mesash}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.container_event}>
          <div className={styles.eventsCard}>
            <p>Eventos proximos</p>
            <span className={styles.eventsCard_icon}>
              <EllipsisVertical />
            </span>
          </div>
          <div className={styles.max_container}>
            <div className={styles.upcoming_events}>
              {eventsProx.map((event, index) => {
                const Icon = event.icon;

                return (
                  <div key={index} className={styles.eventtCard}>
                    <div className={styles.eventIcon}>
                      <Icon />
                      <span className={styles.eventFecha}>{event.fecha}</span>
                    </div>

                    <div className={styles.eventInfo}>
                      <h4>{event.titulo}</h4>
                      <small>{event.hora}</small>
                      <p>{event.parrafo}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </MyTemplate>
  );
}

export { DashboardPage };
