export interface ChildrenProps {
  children: JSX.Element;
}

export interface GetCategoryData {
  data?: ConCategory1[];
}

export interface ConCategory1 {
  id: number;
  name: string;
  discountRate: number;
  imageUrl: string;
}
