import React from 'react';
import styles from 'styles/components/store/store.module.scss';
import Storeheader from '../../components/store/storeheader/Index';
import BrandSort from '../../components/store/brandSort/index';
import BrandCard from '../../components/store/brandCard/index';

function Brnad() {
  return (
    <div>
      <Storeheader />
      <BrandSort />
      <section className={styles.storeSection}>
        <BrandCard data="" />
      </section>
    </div>
  );
}

export default Brnad;
