import React from 'react';
import styles from 'styles/components/store/store.module.scss';
import Storeheader from '../../components/store/storeheader/Index';
import ProductCard from '../../components/store/productCard/index';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

function ProductList() {
  const router = useRouter();
  const { id } = router.query;
  const [itemData, setItemData] = useState({});

  useEffect(() => {
    axios(`https://api2.ncnc.app/con-category1s/${Id}/nested`).then(res =>
      setItemData(res),
    );
  }, []);
  return (
    <div>
      <Storeheader />
      <div className={styles.count}>00개의 상품</div>
      <section className={styles.storeSection}>
        <ProductCard />
      </section>
    </div>
  );
}

export default ProductList;
