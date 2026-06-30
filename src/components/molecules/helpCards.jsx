import { Paragraph } from '../atoms/paragraph';
import { Title } from '../atoms/titles';
import styles from './helpCards.module.css';

function HelpCards({ cards }) {
  return (
    <nav className={styles.helpCardsGrid} aria-label="Categorías de ayuda">
      {cards.map(({ Icon, title, description }, index) => (
        <article key={`help-card-${index}`} className={styles.helpCardItem}>
          <Icon aria-hidden="true" className={styles.helpCardIcon} />
          <Title level="h4">{title}</Title>
          <Paragraph variant="secondary">{description}</Paragraph>
        </article>
      ))}
    </nav>
  );
}

export { HelpCards };