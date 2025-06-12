import React from 'react';
import styles from './Button.module.scss';

function Button({ children, variant = 'primary', ...props }) {
  const className = [
    styles.btn,
    variant === 'outline' ? styles['btn--outline'] : ''
  ].join(' ');
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}

export default Button; 