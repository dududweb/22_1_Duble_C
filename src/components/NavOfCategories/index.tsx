import React, { useState } from 'react';
import styles from './styles.module.scss';
import { Categories } from 'types/categories';
import Link from 'next/link';
import { path } from 'constants/path';

interface NavOfCategories {
  categoryLists: Categories[];
  urlId: string | string[] | undefined;
}

function NavOfCategories({ categoryLists, urlId }: NavOfCategories) {
  return (
    <section className={styles.navBox}>
      <div className={styles.navList}>
        <ul className={styles.innerList}>
          {categoryLists.map(list => {
            return (
              <li
                className={
                  list.id == urlId
                    ? `${styles.list} ${styles.selectedMenuRed}`
                    : styles.list
                }
                key={list.id}
              >
                <Link href={`${path.categories}${list.id}`}>
                  <a>{list.name}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default NavOfCategories;
