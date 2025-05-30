import React from 'react';
import styles from './Card.module.scss';

function Card({ children, style }) {
  return (
    <div className={styles.card} style={style}>
      {children}
    </div>
  );
}

export default Card; 