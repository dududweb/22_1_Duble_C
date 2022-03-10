import React from 'react';
import styles from 'styles/components/Nav.module.scss';
import StoreHeader from 'components/StoreHeader';

function Nav() {
  return (
    <nav className={styles.nav}>
      <StoreHeader />
    </nav>
  );
}

export default Nav;
