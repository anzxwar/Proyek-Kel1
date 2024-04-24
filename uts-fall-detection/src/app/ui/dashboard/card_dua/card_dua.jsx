import styles from './card_dua.module.css'

import React from 'react';

const CardDua = ({ status1, status2, status3 }) => {
  return (
    <div className={styles.card}>
      <div className={styles.texts}>
        <span>Current Status</span>
      </div>
      <div className={styles.status}>
        <div className={styles.symbol}>{status1 === 'SOS' ? 'SOS' : '✔️'}</div>
        <div className={styles.timestamp}>{status1 === 'SOS' ? 'Fall' : 'Normal'} - {new Date().toLocaleString()}</div>
      </div>
      <div className={styles.status}>
        <div className={styles.symbol}>{status2 === 'SOS' ? 'SOS' : '✔️'}</div>
        <div className={styles.timestamp}>{status2 === 'SOS' ? 'Fall' : 'Normal'} - {new Date().toLocaleString()}</div>
      </div>
      <div className={styles.status}>
        <div className={styles.symbol}>{status3 === 'SOS' ? 'SOS' : '✔️'}</div>
        <div className={styles.timestamp}>{status3 === 'SOS' ? 'Fall' : 'Normal'} - {new Date().toLocaleString()}</div>
      </div>
    </div>
  );
};


export default CardDua