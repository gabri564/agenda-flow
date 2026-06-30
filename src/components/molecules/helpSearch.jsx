import { Search } from 'lucide-react';
import { Paragraph } from '../atoms/paragraph';
import styles from './helpSearch.module.css';

function HelpSearch({ placeholder = 'Busca tu pregunta...' }) {
  return (
    <div className={styles.helpSearchWrapper}>
      <div className={styles.helpSearchField} role="search">
        <Search aria-hidden="true" className={styles.helpSearchIcon} />
        <Paragraph variant="secondary">{placeholder}</Paragraph>
      </div>
    </div>
  );
}

export { HelpSearch };