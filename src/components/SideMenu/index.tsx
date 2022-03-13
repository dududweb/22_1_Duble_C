import React, { useState } from 'react';
import styles from './styles.module.scss';
import PageHeader from 'components/PageHeader';
import Link from 'next/link';
import { path } from 'constants/path';

interface SideMenuProps {
  isClickedMenu: boolean;
  openMenu?: () => void;
}

function SideMenu({ isClickedMenu, openMenu }: SideMenuProps) {
  console.log(isClickedMenu);
  return (
    <div className={isClickedMenu ? styles.sideMenuOpen : styles.sideMenu}>
      <PageHeader
        title="마이페이지"
        isClickedMenu={isClickedMenu}
        openMenu={openMenu}
      />
      <div className={styles.menu}>
        <Link href={path.contacts}>
          <a className={styles.menuLists}>
            <span>고객센터</span>
            <img
              className={styles.moveButton}
              src="/images/icon/Back.png"
              alt="고객센터이동"
            />
          </a>
        </Link>
      </div>
      <div className={styles.bottomMenu}></div>
    </div>
  );
}

export default SideMenu;
