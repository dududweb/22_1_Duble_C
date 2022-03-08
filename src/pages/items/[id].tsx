import React from 'react';
import styles from './styles.module.scss';
import StoreHeader from 'components/StoreHeader';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { API } from 'constants/api';
import ProductCard from 'components/ProductCard';
import InfoNotice from 'components/InfoNotice';
import Button from 'components/Button';
import OptionContainer from 'components/OptionContainer';

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { id } = context.query;
  const { data } = await axios(`${API.PRODUCT_OF_BRANDS}/${id}`);

  return {
    props: {
      detailData: data.conItem,
    },
  };
};

interface ItemsProps {
  detailData: any;
}

function Items({ detailData }: ItemsProps) {
  console.log(detailData);
  return (
    <div>
      <StoreHeader title=" " />
      <section className={styles.itemsContainer}>
        <ProductCard
          id={detailData.id}
          key={detailData.id}
          name={detailData.name}
          discountRate={detailData.discountRate}
          originalPrice={detailData.originalPrice}
          minSellingPrice={detailData.minSellingPrice}
          ncSellingPrice={detailData.ncSellingPrice}
          conCategory2Id={detailData.conCategory2Id}
          tip={detailData.tip}
          information={detailData.information}
          info={detailData.info}
          warning={detailData.warning}
          isOnlyAccount={detailData.isOnlyAccount}
          imageUrl={detailData.imageUrl}
        />
        <InfoNotice warningData={detailData.warning} />
        <div className={styles.buttonContainer}>
          <OptionContainer
            optionData={detailData.options}
            discountRate={detailData.discountRate}
          />
          <Button />
        </div>
      </section>
    </div>
  );
}

export default Items;
