import React from 'react';
import styles from 'styles/Nav.module.scss';

function ProductList() {
  return (
    <div>
      <header>
        <button>
          <img src="" alt="뒤로가기 버튼" />
        </button>
        <h2>카페</h2>
      </header>
      <nav>
        <ul className={styles.NavList}>
          <li>떙처리콘</li>
          <li>카페</li>
          <li>편의점/마트</li>
          <li>디저트</li>
          <li>패스트푸드</li>
        </ul>
      </nav>
    </div>
  );
}

export default ProductList;
