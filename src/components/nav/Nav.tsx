import React from 'react';
import styles from 'styles/components/Nav.module.scss';

function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navWrap}>
        <button className={styles.menu}>
          <img src="/images/icon/menu.png" />
        </button>
        <h1 className={styles.logo}>니콘내콘</h1>
      </div>
    </nav>
  );
}

export default Nav;
