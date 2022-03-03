import React from 'react';
import styles from 'styles/components/store/store.module.scss';
import ProductsCard from 'components/productCard';
import { useRouter } from 'next/router';

interface ProductListProps {
  conCategoryData: any;
}

function ProductList() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <div className={styles.count}>00개의 상품</div>
      <section className={styles.storeSection}>
        {id && <ProductsCard id={id} />}
      </section>
    </div>
  );
}

export default ProductList;
