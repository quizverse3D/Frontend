import React from 'react';
import styles from './CyberDivider.module.scss';

interface CyberDividerProps {
  className?: string;
}

export const CyberDivider: React.FC<CyberDividerProps> = ({ className = '' }) => (
  <div className={[styles.CyberDivider, className].filter(Boolean).join(' ')} />
); 