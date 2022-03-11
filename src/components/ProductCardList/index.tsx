import React from 'react';
import styles from './styles.module.scss';
import { ConItem } from 'types/productOfBrands';
import ProductCard from 'components/ProductCard';

interface ProductCardListProps {
  data: ConItem[];
  path: string;
}

function ProductsCardList({ data, path }: ProductCardListProps) {
  console.log(data);
  console.log(path);
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
            path={path}
          />
        );
      })}
    </div>
  );
}

export default ProductsCardList;
