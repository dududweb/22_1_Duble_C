export interface GetCategoryData {
  conCategory1s: ConCategory1[];
}

export interface ConCategory1 {
  id: number;
  name: string;
  discountRate: number;
  imageUrl: string;
}
