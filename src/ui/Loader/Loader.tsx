import React from 'react';
import styles from './Loader.module.scss';

function Loader() {
  return (
    <div className={styles.Loader}>
      <div className={styles.Spinner} />
    </div>
  );
}

export default Loader; 