import { Link, useLocation } from 'react-router';
import styles from './navLink.module.css';
import PropTypes from 'prop-types';

function NavLInk({ href, children, text, onClick, className = '' }) {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <Link
      to={href}
      onClick={onClick}
      className={`${styles.link} ${isActive ? styles.active : ''} ${className}`}
    >
      {children || text}
    </Link>
  );
}

NavLInk.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node,
};

export { NavLInk };
