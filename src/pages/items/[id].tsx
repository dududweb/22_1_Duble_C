import React, { useState } from 'react';
import styles from './styles.module.scss';
import PageHeader from 'components/PageHeader';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { Items, Options } from 'types/items';
import { API } from 'constants/api';
import ProductCard from 'components/ProductCard';
import InfoNotice from 'components/InfoNotice';
import CommonButton from 'components/CommonButton';
import OptionContainer from 'components/OptionContainer';
import SelectedOption from 'components/SelectedOption';

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
  detailData: Items;
}

function Items({ detailData }: ItemsProps) {
  console.log(detailData);
  const [isClickedModal, setIsClickedModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Options>();

  const handleButton = () => {
    setIsClickedModal(true);
    if (selectedOption) {
      alert('구매가 완료되었습니다.');
    }
  };

  const resetSelectValue = () => {
    setSelectedOption(undefined);
  };

  console.log('selectedOption', selectedOption);
  return (
    <div>
      <PageHeader title=" " />
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
        {!selectedOption && isClickedModal && (
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
              setSelectedOption={setSelectedOption}
            />
          )}
          {selectedOption && (
            <SelectedOption
              selectedOption={selectedOption}
              resetSelectValue={resetSelectValue}
            />
          )}
          <CommonButton
            selectedOption={selectedOption}
            isClickedModal={isClickedModal}
            onClick={handleButton}
          />
        </div>
      </section>
    </div>
  );
}

export default Items;
