import { ChevronRight } from 'lucide-react';
import { Paragraph } from '../atoms/paragraph';
import { Title } from '../atoms/titles';
import styles from './helpFaq.module.css';

function HelpFaq({ items, activeIndex, onToggle }) {
  return (
    <section className={styles.faqSection}>
      <div className={styles.faqHeader}>
        <Title level="h4">Preguntas Frecuentes</Title>
      </div>

      <div className={styles.faqList}>
        {items.map(({ question, answer }, index) => {
          const isExpanded = activeIndex === index;
          return (
            <div
              key={`faq-item-${index}`}
              className={`${styles.helpFaqItem} ${isExpanded ? styles.helpFaqItemOpen : ''}`}
            >
              <button
                onClick={() => onToggle(index)}
                className={styles.helpFaqButton}
                aria-expanded={isExpanded}
              >
                <Paragraph>{question}</Paragraph>
                <ChevronRight
                  className={isExpanded ? styles.helpChevronOpen : styles.helpChevronClosed}
                  aria-hidden="true"
                />
              </button>

              {isExpanded && (
                <div className={styles.helpFaqAnswer}>
                  <Paragraph variant="secondary">{answer}</Paragraph>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export { HelpFaq };