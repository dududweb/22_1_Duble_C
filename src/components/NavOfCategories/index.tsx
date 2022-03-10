import React from 'react';
import styles from './styles.module.scss';
import { ConCategory } from 'types/interface';

interface NavOfCategories {
  categoryLists: ConCategory[];
}

function NavOfCategories({ categoryLists }: NavOfCategories) {
  return (
    <section className={styles.navBox}>
      <ul className={styles.navList}>
        {categoryLists.map(list => {
          return <li className={styles.list}>{list.name}</li>;
        })}
      </ul>
    </section>
  );
}

export default NavOfCategories;
