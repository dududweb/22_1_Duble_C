import React from 'react';
import styles from 'styles/components/store/productCard.module.scss';
import { ConItem } from 'types/productOfBrands';
import ProductCard from 'components/ProductCard';

interface ProductCardListProps {
  data: ConItem[];
}

function ProductsCardList({ data }: ProductCardListProps) {
  console.log(data);
  return (
    <div className={styles.itemContainer}>
      {data.map(productList => {
        return (
          <ProductCard
            id={productList.id}
            key={productList.id}
            name={productList.name}
            discountRate={productList.discountRate}
            originalPrice={productList.originalPrice}
            minSellingPrice={productList.minSellingPrice}
            ncSellingPrice={productList.ncSellingPrice}
            conCategory2Id={productList.conCategory2Id}
            tip={productList.tip}
            information={productList.information}
            info={productList.info}
            warning={productList.warning}
            isOnlyAccount={productList.isOnlyAccount}
            imageUrl={productList.imageUrl}
          />
        );
      })}
    </div>
  );
}

export default ProductsCardList;
