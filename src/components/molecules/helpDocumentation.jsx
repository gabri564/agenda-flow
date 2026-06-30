import { ChevronRight } from 'lucide-react';
import { Paragraph } from '../atoms/paragraph';
import styles from './helpDocumentation.module.css';

function HelpDocumentation({ items, activeIndex, onToggle }) {
  return (
    <div className={styles.documentationList}>
      {items.map(({ Icon, title, description }, index) => {
        const isExpanded = activeIndex === index;

        return (
          <div
            key={`doc-item-${index}`}
            className={`${styles.documentationWrapper} ${isExpanded ? styles.docItemOpen : ''}`}
          >
            <button
              type="button"
              className={styles.documentationItem}
              onClick={() => onToggle(index)}
              aria-expanded={isExpanded}
            >
              <div className={styles.docIconBox}>
                <Icon aria-hidden="true" />
              </div>

              <div className={styles.docContent}>
                <div className={styles.docTitle}>{title}</div>
              </div>

              <ChevronRight
                className={isExpanded ? styles.chevronOpen : styles.chevronClosed}
                aria-hidden="true"
              />
            </button>

            {isExpanded && (
              <div className={styles.docAnswer}>
                <Paragraph variant="secondary">{description}</Paragraph>
              </div>
            )}
          </div>
        );
      })}

      <div className={styles.systemStatusBox}>
        <div className={styles.systemStatusTitle}>Estado del Sistema</div>
        <div className={styles.systemStatusCard}>
          <div className={styles.systemStatusLeft}>
            <div className={styles.systemStatusIcon} aria-hidden="true" />
            <span className={styles.systemStatusText}>Todos los sistemas operativos</span>
          </div>
          <span className={styles.systemStatusUpdate}>Última actualización: hace 2 minutos</span>
        </div>
      </div>
    </div>
  );
}

export { HelpDocumentation };