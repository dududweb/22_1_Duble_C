import React from 'react';
import styles from 'styles/components/store/store.module.scss';
import Storeheader from '../../components/store/storeheader/Index';

function detailsPage() {
  return (
    <div>
      <Storeheader />
      <section className={styles.storeSection}></section>
    </div>
  );
}

export default detailsPage;
