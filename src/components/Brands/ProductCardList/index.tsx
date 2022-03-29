import React from 'react';
import styles from './styles.module.scss';
import { ConItem } from 'types/productOfBrands';
import ProductCard from 'components/common/ProductCard';
import Link from 'next/link';

interface ProductCardListProps {
  data: ConItem[] | undefined;
  path: string;
}

function ProductsCardList({ data, path }: ProductCardListProps) {
  return (
    <div className={styles.itemContainer}>
      {data?.map(productList => {
        return (
          <Link href={`${path}${productList.id}`}>
            <a>
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
            </a>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductsCardList;
