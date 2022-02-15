import React, { useState, useEffect } from 'react';
import styles from 'styles/components/store/store.module.scss';
import Storeheader from '../../../components/store/storeheader/Index';
import BrandSort from '../../../components/store/brandSort/index';
import BrandCard from '../../../components/store/brandCard/index';
import axios from 'axios';
import { ConCategory } from 'types/interface';
import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from 'next';

function Brand() {
  const [brandProduct, setBrandProduct] = useState<ConCategory[]>([]);

  useEffect(() => {
    axios(`https://api2.ncnc.app/con-category1s/67conCategory1Id/nested`)
      .then(res => setBrandProduct(res.data))
      .catch(err => console.log(err));
  }, []);

  console.log(brandProduct);

  return (
    <div>
      <Storeheader />
      <BrandSort />
      <section className={styles.storeSection}>
        <BrandCard data={brandProduct} />
      </section>
    </div>
  );
}

export default Brand;
