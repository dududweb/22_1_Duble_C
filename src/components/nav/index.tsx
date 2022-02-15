import React from 'react';
import styles from 'styles/components/Nav.module.scss';

function Nav() {
  return (
    <div>
      <h1 className="weight400">Nav</h1>
      <h1 className={styles.weight500}>Nav</h1>
      <h1 className="weight600">Nav</h1>
    </div>
  );
}

export default Nav;
