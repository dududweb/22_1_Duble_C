export type GetCategoryData = {
  conCategory1s?: ConCategory1[];
};

export type ConCategory1 = {
  id: number;
  name: string;
  discountRate: number;
  imageUrl: string;
};
