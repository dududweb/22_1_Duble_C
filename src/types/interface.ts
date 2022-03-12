export interface ChildrenProps {
  children: JSX.Element;
}

export interface GetCategoryData {
  categoriesData: ConCategory[];
}

export interface ConCategory {
  id: number | string;
  name: string;
  discountRate: number;
  imageUrl: string;
}

export interface brandFilterType {
  id: number;
  name: string;
  discountRate: number;
  imageUrl: string;
  conItems: conItemsType;
}

export interface conItemsType {
  conItems: [];
}

export interface layOutPropsType {
  children: React.ReactNode;
}

export interface dataProps {
  data: ConCategory[];
  NEXT_URL: string;
}
