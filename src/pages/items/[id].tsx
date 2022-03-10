import React, { useState } from 'react';
import styles from './styles.module.scss';
import StoreHeader from 'components/StoreHeader';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { Options } from 'types/items';
import { API } from 'constants/api';
import ProductCard from 'components/ProductCard';
import InfoNotice from 'components/InfoNotice';
import Button from 'components/Button';
import OptionContainer from 'components/OptionContainer';
import OverlayBackground from 'components/OverlayBackground';

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
  const [isClickedModal, setIsClickedModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Options>();
  const handleButton = () => {
    setIsClickedModal(true);
  };
  console.log('selectedOption', selectedOption);
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
        {isClickedModal && (
          <div
            className={styles.overlay}
            onClick={() => {
              setIsClickedModal(false);
            }}
          />
        )}
        <div className={styles.buttonContainer}>
          {!selectedOption && isClickedModal && (
            <OptionContainer
              optionData={detailData.options}
              discountRate={detailData.discountRate}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          )}
          <Button isClickedModal={isClickedModal} onClick={handleButton} />
        </div>
      </section>
    </div>
  );
}

export default Items;
