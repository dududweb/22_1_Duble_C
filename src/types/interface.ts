export interface ChildrenProps {
  children: JSX.Element;
}

export interface GetCategoryData {
  categoriesData?: ConCategory[];
}

export interface ConCategory {
  id: number;
  name: string;
  discountRate: number;
  imageUrl: string;
}

export interface layOutPropsType {
  children: React.ReactNode;
}
