import React, { useState } from 'react';
import styles from './styles.module.scss';
import PageHeader from 'components/PageHeader';

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
      <div>고객센터</div>
    </div>
  );
}

export default SideMenu;
