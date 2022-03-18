export interface Categories {
  id: number | string;
  name: string;
  conCategory1Id: number;
  imageUrl: string;
  conItems: ConItem[];
}

export interface ConItem {
  id: number;
  name: string;
  originalPrice: number;
  minSellingPrice: number;
  count: number;
  imageUrl: string;
}
