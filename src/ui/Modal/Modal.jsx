import React from 'react';
import styles from './Modal.module.scss';

function Modal({ open, onClose, children }) {
  if (!open) return null;
  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>&times;</button>
        {children}
      </div>
    </div>
  );
}

export default Modal; 