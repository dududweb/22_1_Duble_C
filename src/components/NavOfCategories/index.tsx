import React, { useState } from 'react';
import styles from './styles.module.scss';
import { ConCategory } from 'types/interface';
import Link from 'next/link';
import { path } from 'constants/path';
import { useRouter } from 'next/router';

interface NavOfCategories {
  categoryLists: ConCategory[];
  urlId: string | string[] | undefined;
}

function NavOfCategories({ categoryLists, urlId }: NavOfCategories) {
  const router = useRouter();

  return (
    <section className={styles.navBox}>
      <ul className={styles.navList}>
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
    </section>
  );
}

export default NavOfCategories;
