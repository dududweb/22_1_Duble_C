import React from 'react';
import styles from 'styles/components/store/store.module.scss';
import StoreHeader from 'components/StoreHeader';

function detailsPage() {
  return (
    <div>
      <StoreHeader />
      <section className={styles.storeSection}>디테일페이지입니다.</section>
    </div>
  );
}

export default detailsPage;
