import React from 'react';
import styles from './Input.module.scss';

function Input({ label, ...props }) {
  return (
    <label className={styles.label}>
      {label && <span>{label}</span>}
      <input className={styles.input} {...props} />
    </label>
  );
}

export default Input; 