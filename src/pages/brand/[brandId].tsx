import React from 'react';
import styles from 'styles/components/store/store.module.scss';
import Storeheader from '../../components/store/storeheader/Index';
import BrandSort from '../../components/store/brandSort/index';
import BrandCard from '../../components/store/brandCard/index';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Brnad() {
  const router = useRouter();
  const brandId = router.query.brandId;
  const NEXT_URL = `/brand/${brandId}/list/`;

  const [filterBrand, setFilterBrand] = useState([]);
  useEffect(() => {
    axios(`https://api2.ncnc.app/con-category1s/${brandId}/nested`).then(res =>
      setFilterBrand(res.data.conCategory1.conCategory2s),
    );
  }, []);

  return (
    <div>
      <Storeheader />
      <BrandSort />
      <section className={styles.storeSection}>
        <BrandCard data={filterBrand} NEXT_URL={NEXT_URL} />
      </section>
    </div>
  );
}

export default Brnad;
