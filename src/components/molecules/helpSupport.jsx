import { HelpCircle } from 'lucide-react';
import { Paragraph } from '../atoms/paragraph';
import { Title } from '../atoms/titles';
import styles from './helpSupport.module.css';

function HelpSupport({ channels }) {
  return (
    <section className={styles.supportSection} aria-labelledby="support-contact-title">
      <div className={styles.supportHeader}>
        <HelpCircle aria-hidden="true" />
        <Title id="support-contact-title" level="h4">Contacto de Soporte</Title>
      </div>

      <div className={styles.supportList}>
        {channels.map(({ Icon, title, description, actionLabel, isPrimary, onClick }, index) => (
          <div key={`support-channel-${index}`} className={styles.supportCard}>
            <div className={styles.supportIconBox}>
              <Icon aria-hidden="true" />
            </div>

            <div className={styles.supportContent}>
              <div className={styles.supportTitle}>{title}</div>
              <div className={styles.supportPara}>{description}</div>
              <div className={styles.supportActions}>
                <button
                  type="button"
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
    </section>
  );
}

export { HelpSupport };