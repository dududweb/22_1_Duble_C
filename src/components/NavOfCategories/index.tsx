import React from 'react';
import styles from 'styles/components/store/brandSort.module.scss';
import { ConCategory } from 'types/interface';

interface NavOfCategories {
  categoryLists: ConCategory[];
}

function NavOfCategories({ categoryLists }: NavOfCategories) {
  return (
    <ul className={styles.navList}>
      {categoryLists.map(list => {
        return <li className={styles.list}>{list.name}</li>;
      })}
    </ul>
  );
}

export default NavOfCategories;
