import React, { useState } from 'react';
import styles from './styles.module.scss';
import { ConCategory } from 'types/interface';
import Link from 'next/link';
import { path } from 'constants/path';

interface NavOfCategories {
  categoryLists: ConCategory[];
}

function NavOfCategories({ categoryLists }: NavOfCategories) {
  const [isClickedMenu, setIsClickedMenu] = useState<boolean>(false);

  const highlightMenuTap = (id: number) => {};

  return (
    <section className={styles.navBox}>
      <ul className={styles.navList}>
        {categoryLists.map(list => {
          return (
            <li className={styles.list} key={list.id}>
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
