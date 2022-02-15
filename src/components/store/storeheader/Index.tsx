import React from 'react';
import styles from 'styles/components/store/storeheader.module.scss';

function Storeheader() {
  return (
    <div>
      <div>
        <div>
          <div className={styles.time}></div>
          <div className={styles.location}></div>
        </div>
        <div>
          <div className={styles.signal}></div>
          <div className={styles.wifi}></div>
          <div className={styles.battery}></div>
        </div>
      </div>
      <header className={styles.header}>
        <button className={styles.backButton}>
          <img src="/images/icon/back.png" alt="뒤로가기 버튼" />
        </button>
        <h2 className={styles.title}>카페</h2>
      </header>
    </div>
  );
}

export default Storeheader;
