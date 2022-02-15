import React from 'react';
import styles from 'styles/components/store/store.module.scss';
import Storeheader from './storeheader/Index';
import BrandSort from './brandSort/index';
import BrandCard from './brandCard/index';

function Cafe() {
  return (
    <div>
      <Storeheader />
      <BrandSort />
      <section className={styles.storeSection}>
        <BrandCard />
      </section>
    </div>
  );
}

export default Cafe;
